import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TAgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.interface';
import { AgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { CardList } from '@/components/ui/card-list/card-list.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Dropdown, DropdownItem } from '@/components/ui/dropdown/dropdown.ui';
import { JSONView } from '@/components/ui/json-view/json-view.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import {
	GET_AGENCY_AND_AGENCY_CONTRACTS,
	GET_COMMON_CONTRACTOR,
} from '@/components/widgets/agency/agency.gql';
import { IAgency } from '@/components/widgets/agency/agency.interface';
import { useAgencyStore } from '@/stores/agency.store';

export const Agency = ({ id }: IAgency) => {
	const [layoutTitle, setLayoutTitle] = useState<string>('');
	const navigate = useNavigate();
	const setAgency = useAgencyStore((state) => state.setAgency);
	const [agencyContracts, setAgencyContracts] = useState<TAgencyContractCard[]>(
		[],
	);

	const [
		getCommonContractor,
		{ loading: getCommonContractorLoading, data: getCommonContractorData },
	] = useLazyQuery(GET_COMMON_CONTRACTOR, {
		onError(error) {
			toast.error(error.message);
		},
	});

	const { loading: getAgencyLoading, data: getAgencyData } = useQuery(
		GET_AGENCY_AND_AGENCY_CONTRACTS,
		{
			variables: {
				agencyInput: { id },
				agencyContractsInput: { agency_id: id },
			},
			onCompleted(data) {
				setLayoutTitle(getAgencyData?.getAgency.agency.name || '');
				setAgencyContracts(
					data.getAgencyContracts.map((agencyContract) => ({
						agency: data.getAgency.agency,
						object: agencyContract.object,
						agency_contract_properties:
							agencyContract.agency_contract_properties,
					})),
				);
				getCommonContractor({
					variables: {
						input: { id: data.getAgency.agency.common_db_contractors_id },
					},
				});
			},
			onError(error) {
				navigate('/', { replace: true });
				toast.error(error.message);
			},
		},
	);

	const setJSONViewData = () => {
		return {
			...getCommonContractorData?.getCommonContractor.contractor,
			accounts: getCommonContractorData?.getCommonContractor.accounts,
		};
	};

	return (
		<BootLayout isLoading={getAgencyLoading}>
			<ContentLayout title={layoutTitle}>
				<Toolbar text='Агентство'>
					<Dropdown name='Создать контракт'>
						<DropdownItem
							name='Контракт агентства недвижимости'
							onClick={() => {
								setAgency(getAgencyData!.getAgency.agency);
								navigate('/agency-contract/real-estate-agency/new');
							}}
						/>
						<DropdownItem
							name='Контракт агентства МиП'
							onClick={() => {
								setAgency(getAgencyData!.getAgency.agency);
								navigate('/agency-contract/mip-agency/new');
							}}
						/>
					</Dropdown>
				</Toolbar>
				<Container>
					<NamedGroup title='Контракты'>
						<CardList showAddButton={false}>
							{agencyContracts.map((agencyContract) => (
								<AgencyContractCard
									key={agencyContract.agency_contract_properties.id}
									{...agencyContract}
								/>
							))}
						</CardList>
					</NamedGroup>
					<NamedGroup title='Данные'>
						<JSONView
							isLoading={getCommonContractorLoading}
							data={setJSONViewData()}
						/>
					</NamedGroup>
				</Container>
			</ContentLayout>
		</BootLayout>
	);
};
