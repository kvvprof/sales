import { inject, injectable } from 'inversify';

import {
	AGENCY_ALREADY_EXISTS,
	AGENCY_NOT_FOUND,
} from '@/schemas/agency/agency.constants';
import { IAgencyRepository } from '@/schemas/agency/agency.repository.interface';
import { IAgencyService } from '@/schemas/agency/agency.service.interface';
import {
	CreateAgencyContractSignatoryInput,
	CreateAgencyInput,
	GetAgenciesInput,
	GetAgencyContractSignatoriesInput,
	GetAgencyInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class AgencyService implements IAgencyService {
	constructor(
		@inject(TYPES.AgencyRepository)
		private readonly agencyRepository: IAgencyRepository,
	) {}

	public async getAgency({ id }: GetAgencyInput) {
		const agencyData = await this.agencyRepository.findById(id);

		if (!agencyData) {
			throw new Error(AGENCY_NOT_FOUND);
		}

		const { agency_contracts, ...agency } = agencyData;

		return { agency_contracts, agency };
	}

	public async getAgencies(input?: GetAgenciesInput | null) {
		return this.agencyRepository.findMany(input?.options);
	}

	public async createAgency(input: CreateAgencyInput) {
		const agency = await this.agencyRepository.findByCommonDBContractorsId(
			input.common_db_contractors_id,
		);

		if (agency) {
			throw new Error(AGENCY_ALREADY_EXISTS);
		}

		return this.agencyRepository.create(input);
	}

	public async getAgencyContractSignatories(
		input: GetAgencyContractSignatoriesInput,
	) {
		return this.agencyRepository.findManyAgencyContractSignatories(
			input.agency_id,
		);
	}

	public async createAgencyContractSignatory(
		input: CreateAgencyContractSignatoryInput,
	) {
		return this.agencyRepository.createAgencyContractSignatory(input);
	}
}
