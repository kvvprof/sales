import {
	CommonContractor,
	CommonContractors,
	GetCommonContractorInput,
	GetCommonContractorsInput,
} from '@/schemas/schema.types';

export interface IContractorService {
	getContractor(input: GetCommonContractorInput): Promise<CommonContractor>;
	getContractors(
		input?: GetCommonContractorsInput | null,
	): Promise<CommonContractors>;
}
