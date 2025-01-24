import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicClientContractToClient } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  CardList,
  Form,
  Modal,
  NamedGroup,
  normalizePayload,
} from '@/common';
import {
  IClientCard,
  TClientCard,
} from '@/components/client/client-card/client-card.interface';
import { ClientCard } from '@/components/client/client-card/client-card.ui';
import { TClientPicker } from '@/components/client/client-picker/client-picker.interface';
import { ClientPicker } from '@/components/client/client-picker/client-picker.ui';
import { CREATE_ASSIGNMENT } from '@/components/client-contract/assignment/assignment.gql';
import { IAssignment } from '@/components/client-contract/assignment/assignment.interface';
import {
  AssignmentSchema,
  initialValues,
  validationSchema,
} from '@/components/client-contract/assignment/assignment.validation';

export const Assignment = ({
  clientContractId,
  clientsFrom,
  onSubmit,
}: IAssignment) => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [clientsTo, setClientsTo] = useState<
    Omit<IClientCard<BasicClientContractToClient>, 'onDelete'>[]
  >([]);

  const [createAssignment, { loading: createAssignmentLoading }] = useMutation(
    CREATE_ASSIGNMENT,
    {
      onCompleted() {
        toast.info('Контракт клиента обновлен успешно.');
        onSubmit();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<AssignmentSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createAssignment({
        variables: {
          input: normalizePayload({
            clientContractId: clientContractId,
            clientIdsFrom: clientsFrom.map((client) => client.id),
            clientIdsTo: data.clientsTo.map((client) => client.clientId),
          }),
        },
      });
    },
  });

  const handleSubmitClientPicker = (client: TClientPicker) => {
    const clientFromExists = clientsFrom.find((c) => c.id === client.id);

    if (clientFromExists) {
      toast.error('Невозможно выбрать клиента, так как он переуступает.');
      return;
    }

    const clientExists = clientsTo.some((c) => c.id === client.id);

    if (!clientExists) {
      formik.setFieldValue('clientsTo', [
        ...formik.values.clientsTo,
        { clientId: client.id, isMain: false, share: 0 },
      ]);

      setClientsTo([
        ...clientsTo,
        {
          ...client,
          payload: { client: client, isMain: false, share: 0 },
        },
      ]);
    }

    setIsClientModalOpen(false);
  };

  const handleDeleteClient = (client: TClientCard) => {
    const filteredClients = formik.values.clientsTo.filter(
      (c) => c.clientId !== client.id,
    );

    if (filteredClients.length === 1) {
      const updatedClients = filteredClients.map((client, index) => {
        if (index === 0) {
          return {
            ...client,
            share: 0,
            isMain: false,
          };
        }
        return client;
      });

      formik.setFieldValue('clientsTo', updatedClients);
    } else {
      formik.setFieldValue('clientsTo', filteredClients);
    }

    setClientsTo((state) => {
      const filteredClients = state.filter((c) => c.id !== client.id);

      if (filteredClients.length === 1) {
        return filteredClients.map((client, index) => {
          if (index === 0) {
            return {
              ...client,
              payload: { ...client.payload, isMain: false, share: 0 },
            };
          }
          return client;
        });
      }

      return filteredClients;
    });
  };

  return (
    <>
      <Modal
        title='Выбор клиента'
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
      >
        <ClientPicker onSubmit={handleSubmitClientPicker} />
      </Modal>
      <BootLayout isLoading={createAssignmentLoading}>
        <Form>
          <NamedGroup title='Кто переуступает:'>
            <CardList showAddButton={false}>
              {clientsFrom.map((client) => (
                <div className='flex flex-col gap-2' key={client.id}>
                  <ClientCard {...client} />
                </div>
              ))}
            </CardList>
          </NamedGroup>
          <NamedGroup title='Кому переуступают:'>
            <CardList
              onAdd={() => setIsClientModalOpen(true)}
              error={
                formik.touched.clientsTo && !clientsTo.length
                  ? 'Выберите клиента'
                  : null
              }
            >
              {clientsTo.map((client) => (
                <div className='flex flex-col gap-2' key={client.id}>
                  <ClientCard
                    {...client}
                    onDelete={() => handleDeleteClient(client)}
                  />
                </div>
              ))}
            </CardList>
          </NamedGroup>
          <Button type='submit' onClick={() => formik.handleSubmit()}>
            Сохранить
          </Button>
        </Form>
      </BootLayout>
    </>
  );
};
