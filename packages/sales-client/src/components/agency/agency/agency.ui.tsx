import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  BootLayout,
  CardList,
  Container,
  ContentLayout,
  Dropdown,
  DropdownItem,
  JSONView,
  NamedGroup,
  Toolbar,
  useAgencyStore,
} from '@/common';
import {
  GET_AGENCY_AND_AGENCY_CONTRACTS,
  GET_COMMON_CONTRACTOR,
} from '@/components/agency/agency/agency.gql';
import { IAgency } from '@/components/agency/agency/agency.interface';
import { TAgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.interface';
import { AgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.ui';

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
        agencyContractsInput: { agencyId: id },
      },
      onCompleted(data) {
        setLayoutTitle(getAgencyData?.getAgency.agency.name || '');
        setAgencyContracts(
          data.getAgencyContracts.map((agencyContract) => ({
            agency: data.getAgency.agency,
            object: agencyContract.object,
            agencyContractProperties: agencyContract.agencyContractProperties,
            mipAgencyContractProperties:
              agencyContract.mipAgencyContractProperties,
            realEstateAgencyContractProperties:
              agencyContract.realEstateAgencyContractProperties,
          })),
        );
        getCommonContractor({
          variables: {
            input: { id: data.getAgency.agency.commonDbContractorsId },
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

  const handleCreateRealEstateAgencyContract = () => {
    setAgency(getAgencyData!.getAgency.agency);
    navigate('/agency-contract/real-estate-agency/new');
  };

  const handleCreateMipAgencyContract = () => {
    setAgency(getAgencyData!.getAgency.agency);
    navigate('/agency-contract/mip-agency/new');
  };

  return (
    <BootLayout isLoading={getAgencyLoading}>
      <ContentLayout title={layoutTitle}>
        <Toolbar text='Агентство'>
          <Dropdown name='Создать контракт'>
            <DropdownItem
              name='Контракт агентства недвижимости'
              onClick={handleCreateRealEstateAgencyContract}
            />
            <DropdownItem
              name='Контракт агентства МиП'
              onClick={handleCreateMipAgencyContract}
            />
          </Dropdown>
        </Toolbar>
        <Container>
          <NamedGroup title='Контракты'>
            <CardList showAddButton={false}>
              {agencyContracts.map((agencyContract) => (
                <AgencyContractCard
                  key={agencyContract.agencyContractProperties.id}
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
