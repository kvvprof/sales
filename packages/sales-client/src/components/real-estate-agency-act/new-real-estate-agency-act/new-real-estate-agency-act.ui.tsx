import { useMutation } from '@apollo/client';
import axios from 'axios';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  Checkbox,
  DatePickerUI,
  Form,
  Input,
  normalizePayload,
} from '@/common';
import { IPrintoutPayload } from '@/components/printout/printout.interface';
import { CREATE_NEW_REAL_ESTATE_AGENCY_ACT } from '@/components/real-estate-agency-act/new-real-estate-agency-act/new-real-estate-agency-act.gql';
import { INewRealEstateAgencyAct } from '@/components/real-estate-agency-act/new-real-estate-agency-act/new-real-estate-agency-act.interface';
import {
  initialValues,
  NewRealEstateAgencyActSchema,
  validationSchema,
} from '@/components/real-estate-agency-act/new-real-estate-agency-act/new-real-estate-agency-act.validation';

export const NewRealEstateAgencyAct = ({
  clientContractId,
  amount,
  onSubmit,
}: INewRealEstateAgencyAct) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const [
    createNewRealEstateAgencyAct,
    { loading: createNewRealEstateAgencyActLoading },
  ] = useMutation(CREATE_NEW_REAL_ESTATE_AGENCY_ACT, {
    onCompleted(data) {
      if (isChecked) {
        axios.post(`${import.meta.env.VITE_SALES_GUARD_URL}/printout`, {
          id: data.createRealEstateAgencyAct.id,
          kind: 'ActRealEstateAgency',
        } as IPrintoutPayload);
      }
      onSubmit();
      toast.info('Акт создан успешно.');
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<NewRealEstateAgencyActSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createNewRealEstateAgencyAct({
        variables: {
          input: normalizePayload(data),
        },
      });
    },
  });

  const handleCheckboxChange = () => {
    setIsChecked((state) => !state);
  };

  useEffect(() => {
    formik.setValues({
      clientContractId,
      date: format(new Date(), 'yyyy-MM-dd'),
      retention: 0,
      note: '',
    });
  }, []);

  return (
    <BootLayout isLoading={createNewRealEstateAgencyActLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <DatePickerUI
          label='Дата'
          name='date'
          value={formik.values.date}
          error={formik.touched.date ? formik.errors.date : null}
          onChange={(date) => formik.setFieldValue('date', date)}
        />
        <Input
          label='Сумма к выплате'
          name='amount'
          disabled={true}
          type='number'
          step='0.01'
          value={amount}
        />
        <Input
          label='Удержание'
          name='retention'
          type='number'
          step='0.01'
          value={formik.values.retention}
          error={formik.touched.retention ? formik.errors.retention : null}
          onChange={formik.handleChange}
        />
        <Input
          label='Примечание'
          name='note'
          value={formik.values.note}
          onChange={formik.handleChange}
        />
        <Checkbox
          label='Автоматически создать распечатку'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Button type='submit'>Создать</Button>
      </Form>
    </BootLayout>
  );
};
