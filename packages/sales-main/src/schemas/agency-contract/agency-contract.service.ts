import { format } from 'date-fns';
import { inject, injectable } from 'inversify';

import { AGENCY_CONTRACT_NOT_FOUND } from '@/schemas/agency-contract/agency-contract.constants';
import { IAgencyContractRepository } from '@/schemas/agency-contract/agency-contract.repository.interface';
import { IAgencyContractService } from '@/schemas/agency-contract/agency-contract.service.interface';
import {
	CreateAgencyContractInput,
	GetAgencyContractInput,
	GetAgencyContractsInput,
	UpdateAgencyContractInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class AgencyContractService implements IAgencyContractService {
	constructor(
		@inject(TYPES.AgencyContractRepository)
		private readonly agencyContractRepository: IAgencyContractRepository,
	) {}

	public async getAgencyContract({ id }: GetAgencyContractInput) {
		const agencyContract = await this.agencyContractRepository.findById(id);

		if (!agencyContract) {
			throw new Error(AGENCY_CONTRACT_NOT_FOUND);
		}

		const {
			object,
			agency,
			entity,
			responsible_user,
			real_estate_agency_contract_properties,
			mip_agency_contract_properties,
			agency_contract_signatory,
			...agency_contract_properties
		} = agencyContract;

		return {
			object,
			agency,
			entity,
			responsible_user,
			agency_contract_properties,
			agency_contract_signatory,
			real_estate_agency_contract_properties,
			mip_agency_contract_properties,
		};
	}

	public async getAgencyContracts({
		agency_id,
		object_id,
	}: GetAgencyContractsInput) {
		const agencyContracts = await this.agencyContractRepository.findMany(
			agency_id,
			object_id,
		);

		return agencyContracts.map(
			({
				object,
				agency,
				entity,
				responsible_user,
				real_estate_agency_contract_properties,
				mip_agency_contract_properties,
				agency_contract_signatory,
				...agency_contract_properties
			}) => ({
				object,
				agency,
				entity,
				responsible_user,
				agency_contract_properties,
				agency_contract_signatory,
				real_estate_agency_contract_properties,
				mip_agency_contract_properties,
			}),
		);
	}

	public async createAgencyContract(input: CreateAgencyContractInput) {
		const agencyContracts = await this.agencyContractRepository.findMany(
			input.agency_contract_properties.agency_id,
		);
		const serialNumber = agencyContracts.length + 1;
		const date = new Date();
		const number = `${serialNumber}/${format(date, 'dd-MM-yyyy')}`;

		return this.agencyContractRepository.create(number, date, input);
	}

	public async updateAgencyContract(input: UpdateAgencyContractInput) {
		return this.agencyContractRepository.update(input);
	}
}
