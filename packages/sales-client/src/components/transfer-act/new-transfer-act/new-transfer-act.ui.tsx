import { useMutation } from '@apollo/client';
import axios from 'axios';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { BasicRepresentative } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  CardList,
  Checkbox,
  DatePickerUI,
  Form,
  Modal,
  NamedGroup,
  normalizePayload,
} from '@/common';

import { IRepresentativeCard } from '@/components/client/representative/representative-card/representative.interface';
import { RepresentativeCard } from '@/components/client/representative/representative-card/representative.ui';
import { RepresentativePicker } from '@/components/client/representative/representative-picker/representative-picker.ui';
import { IPrintoutPayload } from '@/components/printout/printout.interface';
import { CREATE_TRANSFER_ACT } from '@/components/transfer-act/new-transfer-act/new-transfer-act.gql';
import { INewTransferAct } from '@/components/transfer-act/new-transfer-act/new-transfer-act.interface';
import {
  NewTransferActSchema,
  initialValues,
  validationSchema,
} from '@/components/transfer-act/new-transfer-act/new-transfer-act.validation';

export const NewTransferAct = ({
  payload: { clientContractId, clientIds },
  onSubmit,
}: INewTransferAct) => {
  const [representatives, setRepresentatives] = useState<IRepresentativeCard[]>(
    [],
  );
  const [isRepresentativeModalOpen, setIsRepresentativeModalOpen] =
    useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [createTransferAct, { loading: createTransferActLoading }] =
    useMutation(CREATE_TRANSFER_ACT, {
      onCompleted(data) {
        if (isChecked) {
          axios.post(`${import.meta.env.VITE_SALES_GUARD_URL}/printout`, {
            id: data.createTransferAct.id,
            kind: 'BuyerAcceptanceCertificate',
          } as IPrintoutPayload);
        }
        onSubmit();
        toast.info('Акт создан успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<NewTransferActSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createTransferAct({
        variables: {
          input: normalizePayload(data),
        },
      });
    },
  });

  const handleSubmitRepresentative = (representative: IRepresentativeCard) => {
    const existentRepresentative = representatives.find(
      ({ id }) => id === representative.id,
    );

    if (!existentRepresentative) {
      setRepresentatives([...representatives, representative]);

      formik.setFieldValue('representativeIds', [
        ...formik.values.representativeIds,
        representative.id,
      ]);
    }

    setIsRepresentativeModalOpen(false);
  };

  const handleDeleteRepresentative = (representative: BasicRepresentative) => {
    setRepresentatives(
      representatives.filter(({ id }) => id !== representative.id),
    );

    formik.setFieldValue(
      'representativeIds',
      formik.values.representativeIds.filter((id) => id !== representative.id),
    );
  };

  const handleCheckboxChange = () => {
    setIsChecked((state) => !state);
  };

  useEffect(() => {
    formik.setValues({
      clientContractId,
      date: format(new Date(), 'yyyy-MM-dd'),
      representativeIds: [],
    });
  }, []);

  return (
    <>
      <Modal
        title='Выбор представителя'
        isOpen={isRepresentativeModalOpen}
        onClose={() => setIsRepresentativeModalOpen(false)}
      >
        <RepresentativePicker
          clientIds={clientIds}
          onSubmit={handleSubmitRepresentative}
        />
      </Modal>
      <BootLayout isLoading={createTransferActLoading}>
        <Form>
          <DatePickerUI
            label='Дата'
            name='date'
            value={formik.values.date}
            error={formik.touched.date ? formik.errors.date : null}
            onChange={(date) => formik.setFieldValue('date', date)}
          />
          <NamedGroup title='Представители по доверенности'>
            <CardList
              onAdd={() => setIsRepresentativeModalOpen(true)}
              showAddButton={representatives.length !== clientIds.length}
            >
              {representatives.map((representative) => (
                <RepresentativeCard
                  key={representative.id}
                  onDelete={() => handleDeleteRepresentative(representative)}
                  {...representative}
                />
              ))}
            </CardList>
          </NamedGroup>
          <Checkbox
            label='Автоматически создать распечатку'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <Button type='submit' onClick={formik.submitForm}>
            Создать
          </Button>
        </Form>
      </BootLayout>
    </>
  );
};
