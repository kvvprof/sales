import { differenceInDays } from 'date-fns';
import Decimal from 'decimal.js';
import { inject, injectable } from 'inversify';

import { AgencyContractType, CandidateType, TYPES } from '@/common';
import { IEscrowAccountHistoryRepository } from '@/modules/escrow-account-history/repository/escrow-account-history.repository.interface';
import { IRealEstateAgencyActCandidateRepository } from '@/modules/real-estate-agency-act-candidate/repository/real-estate-agency-act-candidate.repository.interface';
import { IRealEstateAgencyActCandidateService } from '@/modules/real-estate-agency-act-candidate/service/real-estate-agency-act-candidate.service.interface';

@injectable()
export class RealEstateAgencyActCandidateService
  implements IRealEstateAgencyActCandidateService
{
  constructor(
    @inject(TYPES.RealEstateAgencyActCandidateRepository)
    private readonly realEstateAgencyActCandidateRepository: IRealEstateAgencyActCandidateRepository,
    @inject(TYPES.EscrowAccountHistoryRepository)
    private readonly escrowAccountHistoryRepository: IEscrowAccountHistoryRepository,
  ) {}

  public async getRealEstateAgencyActCandidates(): Promise<CandidateType[]> {
    const getRealEstateActCandidatesRes =
      await this.realEstateAgencyActCandidateRepository.getRealEstateActCandidates();

    if (!getRealEstateActCandidatesRes.length) {
      return [];
    }

    const filteredRealEstateActCandidates = getRealEstateActCandidatesRes
      .filter((candidate) => {
        const agencyIds = candidate.clientContractsToAgencyContracts.map(
          ({ agencyContract }) => agencyContract.agency.id,
        );

        const hasDuplicates = new Set(agencyIds).size !== agencyIds.length;

        return !hasDuplicates;
      })
      .map((candidate) => ({
        ...candidate,
        agencyContracts: candidate.clientContractsToAgencyContracts.filter(
          ({ agencyContract: { agencyContractType } }) =>
            agencyContractType === AgencyContractType.RealEstateAgencyContract,
        ),
      }));

    const countTransactionsByDduNumbersRes =
      await this.escrowAccountHistoryRepository.countTransactionsByDduNumbers(
        filteredRealEstateActCandidates.map(({ number }) => number),
      );

    return filteredRealEstateActCandidates
      .map((candidate) => {
        const data = countTransactionsByDduNumbersRes.find(
          ({ dduNumber }) => dduNumber === candidate.number,
        );

        const paymentPercentage = data
          ? data.totalTransactionAmount
              .div(candidate.price)
              .mul(100)
              .toDecimalPlaces(2)
          : new Decimal(0);

        if (
          paymentPercentage.lessThan(
            candidate.agencyContracts[0].agencyContract
              .realEstateAgencyContractProperties!.agencyContractCommission
              .threshold,
          )
        ) {
          return null;
        }

        const payAmount = candidate.price
          .mul(
            candidate.agencyContracts[0].agencyContract.realEstateAgencyContractProperties!.agencyContractCommission.percent.div(
              100,
            ),
          )
          .toDecimalPlaces(2);

        const mostRecentTransactionDate = data?.mostRecentTransactionDate
          ? data.mostRecentTransactionDate
          : candidate.date;

        const daysElapsed = differenceInDays(
          new Date(),
          mostRecentTransactionDate,
        );

        return {
          clientContractId: candidate.id,
          clientContractNumber: candidate.number,
          clientContractType: candidate.clientContractType,
          clientContractPrice: candidate.price,
          agencyContractId: candidate.agencyContracts[0].agencyContract.id,
          agencyContractNumber:
            candidate.agencyContracts[0].agencyContract.number,
          agencyContractPercent:
            candidate.agencyContracts[0].agencyContract
              .realEstateAgencyContractProperties?.agencyContractCommission
              .percent,
          agencyContractThreshold:
            candidate.agencyContracts[0].agencyContract
              .realEstateAgencyContractProperties?.agencyContractCommission
              .threshold,
          agencyContractMaxDays:
            candidate.agencyContracts[0].agencyContract
              .realEstateAgencyContractProperties?.agencyContractCommission
              .maxDays,
          agencyId: candidate.agencyContracts[0].agencyContract.agency.id,
          agencyName: candidate.agencyContracts[0].agencyContract.agency.name,
          transactionAmount: data?.totalTransactionAmount || new Decimal(0),
          paymentPercentage,
          payAmount,
          mostRecentTransactionDate,
          daysElapsed,
        };
      })
      .filter((candidate) => candidate !== null)
      .sort((a, b) => b.daysElapsed - a.daysElapsed);
  }
}
