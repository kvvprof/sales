import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import {
	RealEstateAgencyContractProperties,
	MIPAgencyContractProperties,
} from '@/database/prisma/output';
import { IAgencyContractRepository } from '@/schemas/agency-contract/agency-contract.repository.interface';
import {
	AgencyContractType,
	CreateAgencyContractInput,
	UpdateAgencyContractInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class AgencyContractRepository implements IAgencyContractRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.agencyContract.findFirst({
			where: { id },
			include: {
				entity: true,
				object: true,
				agency: true,
				responsible_user: true,
				agency_contract_signatory: true,
				real_estate_agency_contract_properties: {
					include: { agency_contract_commission: true },
				},
				mip_agency_contract_properties: {
					include: { agency_contract_commission: true },
				},
			},
		});
	}

	public async findMany(agency_id: number, object_id?: number) {
		return this.databaseService.client.agencyContract.findMany({
			where: { agency_id, object_id },
			include: {
				entity: true,
				object: true,
				agency: true,
				responsible_user: true,
				agency_contract_signatory: true,
				real_estate_agency_contract_properties: {
					include: { agency_contract_commission: true },
				},
				mip_agency_contract_properties: {
					include: { agency_contract_commission: true },
				},
			},
		});
	}

	public async create(
		number: string,
		date: Date,
		{
			agency_contract_properties,
			real_estate_agency_contract_properties,
			mip_agency_contract_properties,
		}: CreateAgencyContractInput,
	) {
		return this.databaseService.client.$transaction(async (prisma) => {
			let realEstateAgencyContractProperties: RealEstateAgencyContractProperties | null =
				null;
			let mipAgencyContractProperties: MIPAgencyContractProperties | null =
				null;

			if (
				real_estate_agency_contract_properties &&
				agency_contract_properties.agency_contract_type ===
					AgencyContractType.RealEstateAgencyContract
			) {
				const { agency_contract_commission, ...data } =
					real_estate_agency_contract_properties;

				const agencyContractCommission =
					await prisma.agencyContractCommission.create({
						data: agency_contract_commission,
					});

				realEstateAgencyContractProperties =
					await prisma.realEstateAgencyContractProperties.create({
						data: {
							agency_contract_commission_id: agencyContractCommission.id,
							...data,
						},
					});
			}

			if (
				mip_agency_contract_properties &&
				agency_contract_properties.agency_contract_type ===
					AgencyContractType.MipAgencyContract
			) {
				const { agency_contract_commission, ...data } =
					mip_agency_contract_properties;

				const agencyContractCommission =
					await prisma.agencyContractCommission.create({
						data: agency_contract_commission,
					});

				mipAgencyContractProperties =
					await prisma.mIPAgencyContractProperties.create({
						data: {
							agency_contract_commission_id: agencyContractCommission.id,
							...data,
						},
					});
			}

			const agencyContract = await prisma.agencyContract.create({
				data: {
					number,
					date,
					real_estate_agency_contract_properties_id:
						realEstateAgencyContractProperties?.id,
					mip_agency_contract_properties_id: mipAgencyContractProperties?.id,
					...agency_contract_properties,
				},
			});

			return agencyContract;
		});
	}

	public async update({
		agency_contract_properties,
		real_estate_agency_contract_properties,
		mip_agency_contract_properties,
	}: UpdateAgencyContractInput) {
		return this.databaseService.client.$transaction(async (prisma) => {
			const agencyContract = await prisma.agencyContract.update({
				where: { id: agency_contract_properties.id },
				data: agency_contract_properties,
				include: {
					real_estate_agency_contract_properties: true,
					mip_agency_contract_properties: true,
				},
			});

			if (
				real_estate_agency_contract_properties &&
				agencyContract.agency_contract_type ===
					AgencyContractType.RealEstateAgencyContract
			) {
				const { agency_contract_commission, ...data } =
					real_estate_agency_contract_properties;

				const agencyContractCommission =
					await prisma.agencyContractCommission.upsert({
						where: {
							id:
								agencyContract.real_estate_agency_contract_properties
									?.agency_contract_commission_id || undefined,
						},
						create: agency_contract_commission,
						update: agency_contract_commission,
					});

				const realEstateAgencyContractProperties =
					await prisma.realEstateAgencyContractProperties.upsert({
						where: {
							id:
								agencyContract.real_estate_agency_contract_properties_id ||
								undefined,
						},
						create: {
							agency_contract_commission_id: agencyContractCommission.id,
							...data,
						},
						update: {
							agency_contract_commission_id: agencyContractCommission.id,
							...data,
						},
					});

				await prisma.agencyContract.update({
					where: { id: agency_contract_properties.id },
					data: {
						real_estate_agency_contract_properties_id:
							realEstateAgencyContractProperties.id,
					},
				});
			}

			if (
				mip_agency_contract_properties &&
				agencyContract.agency_contract_type ===
					AgencyContractType.MipAgencyContract
			) {
				const { agency_contract_commission, ...data } =
					mip_agency_contract_properties;

				const agencyContractCommission =
					await prisma.agencyContractCommission.upsert({
						where: {
							id:
								agencyContract.mip_agency_contract_properties
									?.agency_contract_commission_id || undefined,
						},
						create: agency_contract_commission,
						update: agency_contract_commission,
					});

				const mipAgencyContractProperties =
					await prisma.mIPAgencyContractProperties.upsert({
						where: {
							id: agencyContract.mip_agency_contract_properties_id || undefined,
						},
						create: {
							agency_contract_commission_id: agencyContractCommission.id,
							...data,
						},
						update: {
							agency_contract_commission_id: agencyContractCommission.id,
							...data,
						},
					});

				await prisma.agencyContract.update({
					where: { id: agency_contract_properties.id },
					data: {
						mip_agency_contract_properties_id: mipAgencyContractProperties.id,
					},
				});
			}

			return agencyContract;
		});
	}
}
