import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicAgencyContractSignatory } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  Form,
  MiniButton,
  Modal,
  IOption,
  Select,
} from '@/common';
import { GET_AGENCY_CONTRACT_SIGNATORIES } from '@/components/agency-contract/agency-contract-signatory-picker/agency-contract-signatory-picker.gql';
import { ISignatoryPicker } from '@/components/agency-contract/agency-contract-signatory-picker/agency-contract-signatory-picker.interface';
import {
  SignatoryPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/agency-contract/agency-contract-signatory-picker/agency-contract-signatory-picker.validation';
import { NewAgencyContractSignatory } from '@/components/agency-contract/new-agency-contract-signatory/new-agency-contract-signatory.ui';

export const AgencyContractSignatoryPicker = ({
  agencyId,
  onSubmit,
}: ISignatoryPicker) => {
  const [agencyContractSignatoryOptions, setAgencyContractSignatoryOptions] =
    useState<IOption<BasicAgencyContractSignatory>[]>([]);
  const [
    isNewAgencyContractSignatoryModalOpen,
    setIsNewAgencyContractSignatoryModalOpen,
  ] = useState(false);

  const { loading: getAgencyContractSignatoriesLoading } = useQuery(
    GET_AGENCY_CONTRACT_SIGNATORIES,
    {
      variables: { input: { agencyId } },
      onCompleted(data) {
        const agencyContractSignatoryOptions =
          data.getAgencyContractSignatories.map((agencyContractSignatory) => ({
            name: agencyContractSignatory.fullName,
            payload: agencyContractSignatory,
          }));
        setAgencyContractSignatoryOptions(agencyContractSignatoryOptions);
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<SignatoryPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.signatory!);
    },
  });

  const handleSelectSignatory = ({
    payload,
  }: IOption<BasicAgencyContractSignatory>) => {
    formik.setFieldValue('signatory', payload);
  };

  const handleDeleteSignatory = () => {
    formik.setFieldValue('signatory', null);
  };

  return (
    <>
      <Modal
        title='Создание подписанта'
        isOpen={isNewAgencyContractSignatoryModalOpen}
        onClose={() => setIsNewAgencyContractSignatoryModalOpen(false)}
      >
        <NewAgencyContractSignatory
          agencyId={agencyId}
          onSubmit={(agencyContractSignatory) =>
            onSubmit(agencyContractSignatory)
          }
        />
      </Modal>
      <BootLayout isLoading={getAgencyContractSignatoriesLoading}>
        <Form handleSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-1'>
            <Select
              label='Подписант'
              placeholder='Выберите подписанта'
              options={agencyContractSignatoryOptions}
              error={formik.touched.signatory ? formik.errors.signatory : null}
              onSelect={handleSelectSignatory}
              onDelete={handleDeleteSignatory}
            />
            <div className='flex justify-center'>
              <MiniButton
                onClick={() => setIsNewAgencyContractSignatoryModalOpen(true)}
              >
                Создать подписанта
              </MiniButton>
            </div>
          </div>
          <Button type='submit'>Выбрать</Button>
        </Form>
      </BootLayout>
    </>
  );
};
