import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES } from '@/common';
import { IRealEstateAgencyActCandidateService } from '@/modules/real-estate-agency-act-candidate/service/real-estate-agency-act-candidate.service.interface';

@injectable()
export class RealEstateAgencyActCandidateSchema implements ISchema {
  constructor(
    @inject(TYPES.RealEstateAgencyActCandidateService)
    private readonly realEstateAgencyActCandidateService: IRealEstateAgencyActCandidateService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type CandidateType {
        clientContractId: PositiveInt!
        clientContractNumber: NonEmptyString!
        clientContractType: ClientContractType!
        clientContractPrice: PositiveDecimal!
        agencyContractId: PositiveInt!
        agencyContractNumber: NonEmptyString!
        agencyContractPercent: NonNegativeDecimal!
        agencyContractThreshold: NonNegativeDecimal!
        agencyContractMaxDays: NonNegativeInt!
        agencyId: PositiveInt!
        agencyName: NonEmptyString!
        transactionAmount: NonNegativeDecimal!
        paymentPercentage: NonNegativeDecimal!
        payAmount: NonNegativeDecimal!
        mostRecentTransactionDate: Date
        daysElapsed: NonNegativeInt!
      }

      type Query {
        getRealEstateAgencyActCandidates: [CandidateType!]!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getRealEstateAgencyActCandidates: async () => {
          return this.realEstateAgencyActCandidateService.getRealEstateAgencyActCandidates();
        },
      },
    };
  }
}
