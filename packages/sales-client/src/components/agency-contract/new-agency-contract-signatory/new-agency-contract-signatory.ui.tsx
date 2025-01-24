import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { BootLayout, Button, Form, Input, normalizePayload } from '@/common';
import { CREATE_AGENCY_CONTRACT_SIGNATORY } from '@/components/agency-contract/new-agency-contract-signatory/new-agency-contract-signatory.gql';
import { INewAgencyContractSignatory } from '@/components/agency-contract/new-agency-contract-signatory/new-agency-contract-signatory.interface';
import {
  NewAgencyContractSignatorySchema,
  initialValues,
  validationSchema,
} from '@/components/agency-contract/new-agency-contract-signatory/new-agency-contract-signatory.validation';

export const NewAgencyContractSignatory = ({
  agencyId,
  onSubmit,
}: INewAgencyContractSignatory) => {
  const [
    createAgencyContractSignatory,
    { loading: createAgencyContractSignatoryLoading },
  ] = useMutation(CREATE_AGENCY_CONTRACT_SIGNATORY, {
    onCompleted(data) {
      onSubmit(data.createAgencyContractSignatory);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<NewAgencyContractSignatorySchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createAgencyContractSignatory({
        variables: {
          input: normalizePayload({ agencyId, ...data }),
        },
      });
    },
  });

  return (
    <BootLayout isLoading={createAgencyContractSignatoryLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Input
          label='ФИО'
          name='fullName'
          value={formik.values.fullName}
          error={formik.touched?.fullName ? formik.errors?.fullName : null}
          onChange={formik.handleChange}
        />
        <Input
          label='Основание'
          name='basedOn'
          value={formik.values.basedOn}
          error={formik.touched?.basedOn ? formik.errors?.basedOn : null}
          onChange={formik.handleChange}
        />
        <Input
          label='Должность'
          name='title'
          value={formik.values.title}
          error={formik.touched?.title ? formik.errors?.title : null}
          onChange={formik.handleChange}
        />
        <Button type='submit'>Создать</Button>
      </Form>
    </BootLayout>
  );
};
