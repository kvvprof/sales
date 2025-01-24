import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  BasicBank,
  BasicClientContractToClient,
  BasicSubsidy,
  ClientContractType,
} from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  CardList,
  Checkbox,
  Container,
  ContentLayout,
  DatePickerUI,
  Form,
  Input,
  Modal,
  NamedGroup,
  Toolbar,
  normalizePayload,
  useClientContractStore,
} from '@/common';
import { TAgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.interface';
import { AgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.ui';
import { AgencyContractPicker } from '@/components/agency-contract/agency-contract-picker/agency-contract-picker.ui';
import { BankCard } from '@/components/bank/bank-card/bank-card.ui';
import { BankPicker } from '@/components/bank/bank-picker/bank-picker.ui';
import {
  IClientCard,
  TClientCard,
} from '@/components/client/client-card/client-card.interface';
import { ClientCard } from '@/components/client/client-card/client-card.ui';
import { TClientPicker } from '@/components/client/client-picker/client-picker.interface';
import { ClientPicker } from '@/components/client/client-picker/client-picker.ui';
import { CREATE_CLIENT_CONTRACT } from '@/components/client-contract/ddu-client-contract/ddu-client-contract.gql';
import {
  DduClientContractSchema,
  initialValues,
  validationSchema,
} from '@/components/client-contract/ddu-client-contract/ddu-client-contract.validation';
import { TProductCard } from '@/components/product/product-card/product-card.interface';
import { ProductCard } from '@/components/product/product-card/product-card.ui';
import { ProductInfo } from '@/components/product/product-info/product-info.ui';
import { ProductPicker } from '@/components/product/product-picker/product-picker.ui';
import { TRealEstateAgentCard } from '@/components/real-estate-agent/real-estate-agent-card/real-estate-agent-card.interface';
import { RealEstateAgentCard } from '@/components/real-estate-agent/real-estate-agent-card/real-estate-agent-card.ui';
import { RealEstateAgentPicker } from '@/components/real-estate-agent/real-estate-agent-picker/real-estate-agent-picker.ui';
import { SubsidyCard } from '@/components/subsidy/subsidy-card/subsidy-card.ui';
import { SubsidyPicker } from '@/components/subsidy/subsidy-picker/subsidy-picker.ui';
import { UserCard } from '@/components/user/user-card/user-card.ui';
import { TUserPicker } from '@/components/user/user-picker/user-picker.interface';
import { UserPicker } from '@/components/user/user-picker/user-picker.ui';

export const NewDduClientContract = () => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [clients, setClients] = useState<
    Omit<IClientCard<BasicClientContractToClient>, 'onDelete'>[]
  >([]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);
  const [product, setProduct] = useState<TProductCard | null>(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [manager, setManager] = useState<TUserPicker | null>(null);
  const [isRealEstateAgentModalOpen, setIsRealEstateAgentModalOpen] =
    useState(false);
  const [realEstateAgent, setRealEstateAgent] =
    useState<TRealEstateAgentCard | null>(null);
  const [isBankModalOpen, setIsBankModalOpen] = useState<boolean>(false);
  const [bank, setBank] = useState<BasicBank | null>(null);
  const [isSubsidyModalOpen, setIsSubsidyModalOpen] = useState<boolean>(false);
  const [subsidy, setSubsidy] = useState<BasicSubsidy | null>(null);
  const [isAgencyContractModalOpen, setIsAgencyContractModalOpen] =
    useState<boolean>(false);
  const [agencyContracts, setAgencyContracts] = useState<TAgencyContractCard[]>(
    [],
  );
  const navigate = useNavigate();
  const clientContract = useClientContractStore(
    (state) => state.clientContract,
  );
  const setClientContract = useClientContractStore(
    (state) => state.setClientContract,
  );

  const [createClientContract, { loading: createClientContractLoading }] =
    useMutation(CREATE_CLIENT_CONTRACT, {
      onCompleted(data) {
        navigate(`/client-contract/ddu/${data.createClientContract.id}`);
        toast.info('Контракт клиента создан успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<DduClientContractSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      const negativeShares = data.clientContractProperties.clients.find(
        ({ share }) => share && share < 0,
      );

      if (negativeShares) {
        toast.error('Доля не может быть отрицательной.');
        return;
      }

      const shares = data.clientContractProperties.clients.reduce(
        (acc, data) => acc + (data.share || 0),
        0,
      );

      if (shares !== 100 && shares !== 0) {
        toast.error('Доли распределены некорректно.');
        return;
      }

      createClientContract({
        variables: {
          input: normalizePayload({
            clientContractProperties: {
              ...data.clientContractProperties,
              clientContractType: ClientContractType.Ddu,
            },
            dduClientContractProperties: data.dduClientContractProperties,
          }),
        },
      });
    },
  });

  const handleSubmitClientPicker = (client: TClientPicker) => {
    const clientExists = clients.some((c) => c.id === client.id);

    if (!clientExists) {
      formik.setFieldValue('clientContractProperties.clients', [
        ...formik.values.clientContractProperties.clients,
        { clientId: client.id, isMain: false, share: 0 },
      ]);

      setClients([
        ...clients,
        {
          ...client,
          payload: { client: client, isMain: false, share: 0 },
        },
      ]);
    }

    setIsClientModalOpen(false);
  };

  const handleDeleteClient = (client: TClientCard) => {
    const filteredClients =
      formik.values.clientContractProperties.clients.filter(
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

      formik.setFieldValue('clientContractProperties.clients', updatedClients);
    } else {
      formik.setFieldValue('clientContractProperties.clients', filteredClients);
    }

    setClients((state) => {
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

  const handleSubmitProductPicker = (product: TProductCard) => {
    formik.setFieldValue(
      'clientContractProperties.productId',
      product.product.id,
    );
    setProduct(product);
    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = () => {
    formik.setFieldValue('clientContractProperties.productId', null);
    setProduct(null);
    setIsProductInfoModalOpen(false);
  };

  const handleSubmitUserPicker = (user: TUserPicker) => {
    formik.setFieldValue('clientContractProperties.managerId', user.id);
    setManager(user);
    setIsUserModalOpen(false);
  };

  const handleDeleteUserCard = () => {
    formik.setFieldValue('clientContractProperties.managerId', null);
    setManager(null);
  };

  const handleSubmitRealEstateAgentPicker = (
    realEstateAgent: TRealEstateAgentCard,
  ) => {
    formik.setFieldValue(
      'clientContractProperties.realEstateAgentId',
      realEstateAgent.id,
    );
    setRealEstateAgent(realEstateAgent);
    setIsRealEstateAgentModalOpen(false);
  };

  const handleDeleteRealEstateAgentCard = () => {
    formik.setFieldValue('clientContractProperties.realEstateAgentId', null);
    setRealEstateAgent(null);
  };

  const handleSubmitBankPicker = (bank: BasicBank) => {
    formik.setFieldValue('clientContractProperties.bankId', bank.id);
    setBank(bank);
    setIsBankModalOpen(false);
  };

  const handleSubmitSubsidyPicker = (subsidy: BasicSubsidy) => {
    formik.setFieldValue('clientContractProperties.subsidyId', subsidy.id);
    setSubsidy(subsidy);
    setIsSubsidyModalOpen(false);
  };

  const handleDeleteBankCard = () => {
    formik.setFieldValue('clientContractProperties.bankId', null);
    setBank(null);
  };

  const handleDeleteSubsidyCard = () => {
    formik.setFieldValue('clientContractProperties.subsidyId', null);
    setSubsidy(null);
  };

  const handleSubmitAgencyContract = (agencyContract: TAgencyContractCard) => {
    formik.setFieldValue('clientContractProperties.agencyContractIds', [
      ...new Set([
        ...formik.values.clientContractProperties.agencyContractIds,
        agencyContract.agencyContractProperties.id,
      ]),
    ]);

    setAgencyContracts((state) => {
      const agencyContractExists = state.some(
        (a) =>
          a.agencyContractProperties.id ===
          agencyContract.agencyContractProperties.id,
      );
      return !agencyContractExists ? [...state, agencyContract] : state;
    });

    setIsAgencyContractModalOpen(false);
  };

  const handleDeleteAgencyContractCard = (
    agencyContract: TAgencyContractCard,
  ) => {
    formik.setFieldValue(
      'clientContractProperties.agencyContractIds',
      formik.values.clientContractProperties.agencyContractIds.filter(
        (c) => c !== agencyContract.agencyContractProperties.id,
      ),
    );
    setAgencyContracts((state) =>
      state.filter(
        (c) =>
          c.agencyContractProperties.id !==
          agencyContract.agencyContractProperties.id,
      ),
    );
  };

  const handleChangeEscrowDiscount = () => {
    formik.setFieldValue(
      'dduClientContractProperties.isEscrowDiscount',
      !formik.values.dduClientContractProperties.isEscrowDiscount,
    );
  };

  const handleClientMainChange = (client: TClientCard) => {
    formik.setFieldValue(
      'clientContractProperties.clients',
      formik.values.clientContractProperties.clients.map((c) =>
        c.clientId === client.id
          ? { ...c, isMain: true }
          : { ...c, isMain: false },
      ),
    );

    setClients((state) =>
      state.map((c) =>
        c.id === client.id
          ? { ...c, payload: { ...c.payload, isMain: true } }
          : { ...c, payload: { ...c.payload, isMain: false } },
      ),
    );
  };

  const handleClientShareChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    client: TClientCard,
  ) => {
    formik.setFieldValue(
      'clientContractProperties.clients',
      formik.values.clientContractProperties.clients.map((c) =>
        c.clientId === client.id
          ? {
              ...c,
              share: parseInt(event.target.value, 10),
            }
          : c,
      ),
    );

    setClients((state) =>
      state.map((c) =>
        c.id === client.id
          ? {
              ...c,
              payload: {
                ...c.payload,
                share: parseInt(event.target.value),
              },
            }
          : c,
      ),
    );
  };

  useEffect(() => {
    if (clientContract && clientContract.dduClientContractProperties) {
      formik.setValues({
        clientContractProperties: clientContract.clientContractProperties,
        dduClientContractProperties: clientContract.dduClientContractProperties,
      });
      setClients(clientContract.clients);
      setProduct(clientContract.product);
      setAgencyContracts(clientContract.agencyContracts);
      setBank(clientContract.bank);
      setSubsidy(clientContract.subsidy);
      setManager(clientContract.manager);
      setRealEstateAgent(clientContract.realEstateAgent);
    }

    return () => {
      setClientContract(null);
    };
  }, []);

  return (
    <>
      <Modal
        title='Выбор клиента'
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
      >
        <ClientPicker onSubmit={handleSubmitClientPicker} />
      </Modal>
      <Modal
        title='Выбор продукта'
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      >
        <ProductPicker onSubmit={handleSubmitProductPicker} />
      </Modal>
      <Modal
        title='Информация о продукте'
        isOpen={isProductInfoModalOpen}
        onClose={() => setIsProductInfoModalOpen(false)}
      >
        <ProductInfo id={product?.product.pricingProductsId} />
      </Modal>
      <Modal
        title='Выбор менеджера'
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      >
        <UserPicker onSubmit={handleSubmitUserPicker} />
      </Modal>
      <Modal
        title='Выбор агента по недвижимости'
        isOpen={isRealEstateAgentModalOpen}
        onClose={() => setIsRealEstateAgentModalOpen(false)}
      >
        <RealEstateAgentPicker onSubmit={handleSubmitRealEstateAgentPicker} />
      </Modal>
      <Modal
        title='Выбор банка'
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
      >
        <BankPicker onSubmit={handleSubmitBankPicker} />
      </Modal>
      <Modal
        title='Выбор субсидии'
        isOpen={isSubsidyModalOpen}
        onClose={() => setIsSubsidyModalOpen(false)}
      >
        <SubsidyPicker onSubmit={handleSubmitSubsidyPicker} />
      </Modal>
      <Modal
        title='Выбор контракта агентства'
        isOpen={isAgencyContractModalOpen}
        onClose={() => setIsAgencyContractModalOpen(false)}
      >
        <AgencyContractPicker
          objectId={product?.object.id}
          onSubmit={handleSubmitAgencyContract}
        />
      </Modal>
      <BootLayout isLoading={createClientContractLoading}>
        <ContentLayout
          title={`Новый контракт клиента ${clientContract ? '(копия)' : ''}`}
        >
          <Toolbar text='ДДУ'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Создать
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Клиенты'>
                <CardList
                  onAdd={() => setIsClientModalOpen(true)}
                  error={
                    formik.touched.clientContractProperties?.clients
                      ? (formik.errors.clientContractProperties
                          ?.clients as string)
                      : null
                  }
                >
                  {clients.map((client) => (
                    <div className='flex flex-col gap-2' key={client.id}>
                      <ClientCard
                        {...client}
                        onDelete={() => handleDeleteClient(client)}
                      />
                      {clients.length > 1 && (
                        <div className='border-1 border-c-inactive hover:border-c-text-primary hover:text-c-text-primary flex flex-col gap-2 rounded-lg border-dashed p-2'>
                          <Checkbox
                            label='основной клиент'
                            checked={client.payload?.isMain || false}
                            onChange={() => handleClientMainChange(client)}
                          />
                          <Input
                            type='number'
                            placeholder='Доля %'
                            value={client.payload?.share || 0}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>,
                            ) => handleClientShareChange(event, client)}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Продукт'>
                <CardList
                  showAddButton={!product}
                  onAdd={() => setIsProductModalOpen(true)}
                  error={
                    formik.touched.clientContractProperties?.productId
                      ? formik.errors.clientContractProperties?.productId
                      : null
                  }
                >
                  {product && (
                    <ProductCard
                      {...product}
                      onClick={() => setIsProductInfoModalOpen(true)}
                      onDelete={handleDeleteProduct}
                    />
                  )}
                </CardList>
              </NamedGroup>
              {product && (
                <NamedGroup title='Контракты агентств'>
                  <CardList onAdd={() => setIsAgencyContractModalOpen(true)}>
                    {agencyContracts.map((agencyContract) => (
                      <AgencyContractCard
                        key={agencyContract.agencyContractProperties.id}
                        {...agencyContract}
                        onDelete={() =>
                          handleDeleteAgencyContractCard(agencyContract)
                        }
                      />
                    ))}
                  </CardList>
                </NamedGroup>
              )}
              <NamedGroup title='Банк'>
                <CardList
                  showAddButton={!bank}
                  onAdd={() => setIsBankModalOpen(true)}
                >
                  {bank && (
                    <BankCard {...bank} onDelete={handleDeleteBankCard} />
                  )}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Субсидия'>
                <CardList
                  showAddButton={!subsidy}
                  onAdd={() => setIsSubsidyModalOpen(true)}
                >
                  {subsidy && (
                    <SubsidyCard
                      {...subsidy}
                      onDelete={handleDeleteSubsidyCard}
                    />
                  )}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Менеджер'>
                <CardList
                  showAddButton={!manager}
                  error={
                    formik.touched.clientContractProperties?.managerId
                      ? formik.errors.clientContractProperties?.managerId
                      : null
                  }
                  onAdd={() => setIsUserModalOpen(true)}
                >
                  {manager && (
                    <UserCard {...manager} onDelete={handleDeleteUserCard} />
                  )}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Агент по недвижимости'>
                <CardList
                  showAddButton={!realEstateAgent}
                  onAdd={() => setIsRealEstateAgentModalOpen(true)}
                >
                  {realEstateAgent && (
                    <RealEstateAgentCard
                      {...realEstateAgent}
                      onDelete={handleDeleteRealEstateAgentCard}
                    />
                  )}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Основные данные'>
                <Input
                  label='Номер'
                  name='clientContractProperties.number'
                  value={formik.values.clientContractProperties.number}
                  error={
                    formik.touched.clientContractProperties?.number
                      ? formik.errors.clientContractProperties?.number
                      : null
                  }
                  onChange={formik.handleChange}
                />
                <DatePickerUI
                  label='Дата'
                  name='clientContractProperties.date'
                  value={formik.values.clientContractProperties.date}
                  error={
                    formik.touched.clientContractProperties?.date
                      ? formik.errors.clientContractProperties?.date
                      : null
                  }
                  onChange={(date) =>
                    formik.setFieldValue('clientContractProperties.date', date)
                  }
                />
                <DatePickerUI
                  label='Дата регистрации'
                  name='clientContractProperties.registrationDate'
                  value={
                    formik.values.clientContractProperties.registrationDate
                  }
                  error={
                    formik.touched.clientContractProperties?.registrationDate
                      ? formik.errors.clientContractProperties?.registrationDate
                      : null
                  }
                  onChange={(date) =>
                    formik.setFieldValue(
                      'clientContractProperties.registrationDate',
                      date,
                    )
                  }
                />
                <Input
                  label='Стоимость'
                  name='clientContractProperties.price'
                  type='number'
                  step='0.01'
                  value={formik.values.clientContractProperties.price}
                  error={
                    formik.touched.clientContractProperties?.price
                      ? formik.errors.clientContractProperties?.price
                      : null
                  }
                  onChange={formik.handleChange}
                />
                <Input
                  label='Возвратный счет'
                  name='dduClientContractProperties.returnAccount'
                  value={
                    formik.values.dduClientContractProperties.returnAccount
                  }
                  error={
                    formik.touched.dduClientContractProperties?.returnAccount
                      ? formik.errors.dduClientContractProperties?.returnAccount
                      : null
                  }
                  onChange={formik.handleChange}
                />
              </NamedGroup>
              <NamedGroup title='Эскроу'>
                <div className='flex'>
                  <Checkbox
                    label='Эскроу дисконт'
                    checked={
                      formik.values.dduClientContractProperties.isEscrowDiscount
                    }
                    error={
                      formik.touched.dduClientContractProperties
                        ?.isEscrowDiscount
                        ? formik.errors.dduClientContractProperties
                            ?.isEscrowDiscount
                        : null
                    }
                    onChange={handleChangeEscrowDiscount}
                  />
                </div>
                <Input
                  label='Номер эскроу-счета'
                  name='dduClientContractProperties.escrowAccountNumber'
                  value={
                    formik.values.dduClientContractProperties
                      .escrowAccountNumber
                  }
                  error={
                    formik.touched.dduClientContractProperties
                      ?.escrowAccountNumber
                      ? formik.errors.dduClientContractProperties
                          ?.escrowAccountNumber
                      : null
                  }
                  onChange={formik.handleChange}
                />
                <DatePickerUI
                  label='Дата открытия эскроу-счета'
                  name='dduClientContractProperties.escrowAccountOpeningDate'
                  value={
                    formik.values.dduClientContractProperties
                      .escrowAccountOpeningDate
                  }
                  error={
                    formik.touched.dduClientContractProperties
                      ?.escrowAccountOpeningDate
                      ? formik.errors.dduClientContractProperties
                          ?.escrowAccountOpeningDate
                      : null
                  }
                  onChange={(date) =>
                    formik.setFieldValue(
                      'dduClientContractProperties.escrowAccountOpeningDate',
                      date,
                    )
                  }
                />
                <DatePickerUI
                  label='Срок условного депонирования'
                  name='dduClientContractProperties.escrowPeriod'
                  value={formik.values.dduClientContractProperties.escrowPeriod}
                  error={
                    formik.touched.dduClientContractProperties?.escrowPeriod
                      ? formik.errors.dduClientContractProperties?.escrowPeriod
                      : null
                  }
                  onChange={(date) =>
                    formik.setFieldValue(
                      'dduClientContractProperties.escrowPeriod',
                      date,
                    )
                  }
                />
              </NamedGroup>
              <NamedGroup title='Дополнительные данные'>
                <Input
                  label='Ссылка на папку'
                  name='dduClientContractProperties.dduLink'
                  value={formik.values.dduClientContractProperties.dduLink}
                  error={
                    formik.touched.dduClientContractProperties?.dduLink
                      ? formik.errors.dduClientContractProperties?.dduLink
                      : null
                  }
                  linkTo={formik.values.dduClientContractProperties.dduLink}
                  onChange={formik.handleChange}
                />
                <Input
                  label='Комментарий'
                  name='clientContractProperties.comment'
                  value={formik.values.clientContractProperties.comment}
                  error={
                    formik.touched.clientContractProperties?.comment
                      ? formik.errors.clientContractProperties?.comment
                      : null
                  }
                  onChange={formik.handleChange}
                />
              </NamedGroup>
            </Form>
          </Container>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
