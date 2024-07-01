import { BasicAgency } from '@/__types__/graphql';

export type TAgencyPicker = Pick<BasicAgency, 'id' | 'name'>;

export interface IAgencyPicker {
	onSubmit(agency: TAgencyPicker): void;
}
