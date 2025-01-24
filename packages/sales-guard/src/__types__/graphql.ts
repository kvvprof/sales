/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  JSON: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeDecimal: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  PositiveDecimal: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
};

export type ActualPayments = {
  __typename?: 'ActualPayments';
  actualPayments: Array<BasicActualPayment>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type Agencies = {
  __typename?: 'Agencies';
  agencies: Array<BasicAgency>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type Agency = {
  __typename?: 'Agency';
  agency: BasicAgency;
  agencyContracts?: Maybe<Array<BasicAgencyContract>>;
};

export type AgencyContract = {
  __typename?: 'AgencyContract';
  agency: BasicAgency;
  agencyContractProperties: BasicAgencyContract;
  agencyContractSignatory?: Maybe<BasicAgencyContractSignatory>;
  entity: BasicEntity;
  mipAgencyContractProperties?: Maybe<BasicMipAgencyContractProperties>;
  object: BasicObject;
  realEstateAgencyContractProperties?: Maybe<BasicRealEstateAgencyContractProperties>;
  responsibleUser?: Maybe<BasicUser>;
};

export type AgencyContractClientContract = {
  __typename?: 'AgencyContractClientContract';
  agency: BasicAgency;
  agencyContract: BasicAgencyContract;
  mipAgencyContractProperties?: Maybe<BasicMipAgencyContractProperties>;
  realEstateAgencyContractProperties?: Maybe<BasicRealEstateAgencyContractProperties>;
};

export type AgencyContractCommissionInput = {
  maxDays: Scalars['NonNegativeInt']['input'];
  percent: Scalars['NonNegativeDecimal']['input'];
  threshold: Scalars['NonNegativeDecimal']['input'];
};

export enum AgencyContractType {
  MipAgencyContract = 'MIP_AGENCY_CONTRACT',
  RealEstateAgencyContract = 'REAL_ESTATE_AGENCY_CONTRACT'
}

export type AgencyContractWithRealEstateAgencyProperties = {
  __typename?: 'AgencyContractWithRealEstateAgencyProperties';
  agencyContract: BasicAgencyContract;
  realEstateAgencyContractProperties?: Maybe<BasicRealEstateAgencyContractProperties>;
};

export type BaseOptionsInput = {
  limit?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  prefix?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type BasicActualPayment = {
  __typename?: 'BasicActualPayment';
  clientContractId: Scalars['PositiveInt']['output'];
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  payment: Scalars['Decimal']['output'];
};

export type BasicAgency = {
  __typename?: 'BasicAgency';
  commonDbContractorsId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
};

export type BasicAgencyContract = {
  __typename?: 'BasicAgencyContract';
  agencyContractType: AgencyContractType;
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  link?: Maybe<Scalars['NonEmptyString']['output']>;
  number: Scalars['NonEmptyString']['output'];
};

export type BasicAgencyContractCommission = {
  __typename?: 'BasicAgencyContractCommission';
  maxDays: Scalars['NonNegativeInt']['output'];
  percent: Scalars['NonNegativeDecimal']['output'];
  threshold: Scalars['NonNegativeDecimal']['output'];
};

export type BasicAgencyContractSignatory = {
  __typename?: 'BasicAgencyContractSignatory';
  basedOn?: Maybe<Scalars['NonEmptyString']['output']>;
  fullName: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  title?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicBank = {
  __typename?: 'BasicBank';
  id: Scalars['PositiveInt']['output'];
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicClient = {
  __typename?: 'BasicClient';
  address?: Maybe<Scalars['NonEmptyString']['output']>;
  clientCategory: ClientCategory;
  email?: Maybe<Scalars['NonEmptyString']['output']>;
  fullName: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['NonEmptyString']['output']>;
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientContract = {
  __typename?: 'BasicClientContract';
  clientContractType: ClientContractType;
  comment?: Maybe<Scalars['String']['output']>;
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  isRealEstateAgencyActDisabled?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  number: Scalars['NonEmptyString']['output'];
  price: Scalars['PositiveDecimal']['output'];
  registrationDate?: Maybe<Scalars['Date']['output']>;
};

export type BasicClientContractToClient = {
  __typename?: 'BasicClientContractToClient';
  client: BasicClient;
  isMain: Scalars['Boolean']['output'];
  share: Scalars['NonNegativeInt']['output'];
};

export type BasicClientEntityProperties = {
  __typename?: 'BasicClientEntityProperties';
  kpp?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientIndividualMinorProperties = {
  __typename?: 'BasicClientIndividualMinorProperties';
  birthCertificate?: Maybe<Scalars['NonEmptyString']['output']>;
  clientPassport?: Maybe<BasicClientPassport>;
  dob?: Maybe<Scalars['Date']['output']>;
  representatives?: Maybe<Array<BasicClient>>;
  snils?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientIndividualProperties = {
  __typename?: 'BasicClientIndividualProperties';
  clientPassport?: Maybe<BasicClientPassport>;
  dob?: Maybe<Scalars['Date']['output']>;
  snils?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientPassport = {
  __typename?: 'BasicClientPassport';
  code?: Maybe<Scalars['NonEmptyString']['output']>;
  issued?: Maybe<Scalars['NonEmptyString']['output']>;
  number?: Maybe<Scalars['NonEmptyString']['output']>;
  placeOfBirth?: Maybe<Scalars['NonEmptyString']['output']>;
  registrationAddress?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicCommonAccount = {
  __typename?: 'BasicCommonAccount';
  bank?: Maybe<BasicCommonBank>;
  id: Scalars['PositiveInt']['output'];
  number?: Maybe<Scalars['String']['output']>;
};

export type BasicCommonBank = {
  __typename?: 'BasicCommonBank';
  bik?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  correspondentNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
};

export type BasicCommonContractor = {
  __typename?: 'BasicCommonContractor';
  actualAddress?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Scalars['String']['output']>;
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  kpp?: Maybe<Scalars['String']['output']>;
  legalAddress?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ogrn?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  propogatedAt?: Maybe<Scalars['DateTime']['output']>;
  reconciliationLink?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type BasicCommonEntity = {
  __typename?: 'BasicCommonEntity';
  dbName: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['PositiveInt']['output'];
  inn: Scalars['String']['output'];
  kpp: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ogrn: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  strId: Scalars['String']['output'];
};

export type BasicDduClientContractProperties = {
  __typename?: 'BasicDduClientContractProperties';
  dduLink?: Maybe<Scalars['NonEmptyString']['output']>;
  escrowAccountNumber?: Maybe<Scalars['NonEmptyString']['output']>;
  escrowAccountOpeningDate?: Maybe<Scalars['Date']['output']>;
  escrowPeriod?: Maybe<Scalars['Date']['output']>;
  id: Scalars['PositiveInt']['output'];
  isEscrowDiscount?: Maybe<Scalars['Boolean']['output']>;
  returnAccount?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicDkpClientContractProperties = {
  __typename?: 'BasicDkpClientContractProperties';
  dkpLink?: Maybe<Scalars['NonEmptyString']['output']>;
  id: Scalars['PositiveInt']['output'];
};

export type BasicEntity = {
  __typename?: 'BasicEntity';
  commonDbEntitiesId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
  website?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicEscrowAccountHistory = {
  __typename?: 'BasicEscrowAccountHistory';
  builderInn: Scalars['String']['output'];
  closingDate?: Maybe<Scalars['Date']['output']>;
  dateOfTransaction: Scalars['Date']['output'];
  dduDate: Scalars['Date']['output'];
  dduNumber: Scalars['String']['output'];
  depositedAmount: Scalars['Decimal']['output'];
  depositor: Scalars['String']['output'];
  depositorInn?: Maybe<Scalars['String']['output']>;
  expirationDate: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  incomingBalance: Scalars['Decimal']['output'];
  loanAgreementDate?: Maybe<Scalars['Date']['output']>;
  loanAgreementNumber?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  openingDate: Scalars['Date']['output'];
  outgoingBalance: Scalars['Decimal']['output'];
  status: EscrowAccountStatus;
  transactionAmount: Scalars['Decimal']['output'];
};

export type BasicMipAgencyContractProperties = {
  __typename?: 'BasicMipAgencyContractProperties';
  agencyContractCommission: BasicAgencyContractCommission;
};

export type BasicObject = {
  __typename?: 'BasicObject';
  commonDbObjectsId: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicOptionsInput = {
  limit?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  prefix?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type BasicPricingObject = {
  __typename?: 'BasicPricingObject';
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicPricingProduct = {
  __typename?: 'BasicPricingProduct';
  area: Scalars['NonNegativeDecimal']['output'];
  id: Scalars['PositiveInt']['output'];
  number: Scalars['NonEmptyString']['output'];
  oneGtId?: Maybe<Scalars['PositiveInt']['output']>;
  price: Scalars['NonNegativeDecimal']['output'];
};

export type BasicPricingProductCategory = {
  __typename?: 'BasicPricingProductCategory';
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicPricingProductType = {
  __typename?: 'BasicPricingProductType';
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicProduct = {
  __typename?: 'BasicProduct';
  id: Scalars['PositiveInt']['output'];
  number: Scalars['NonEmptyString']['output'];
  pricingProductsId: Scalars['PositiveInt']['output'];
  productCategory: ProductCategory;
};

export type BasicRealEstateAgencyAct = {
  __typename?: 'BasicRealEstateAgencyAct';
  amount: Scalars['NonNegativeDecimal']['output'];
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  link?: Maybe<Scalars['NonEmptyString']['output']>;
  note?: Maybe<Scalars['NonEmptyString']['output']>;
  number: Scalars['NonEmptyString']['output'];
  retention?: Maybe<Scalars['NonNegativeDecimal']['output']>;
};

export type BasicRealEstateAgencyContractProperties = {
  __typename?: 'BasicRealEstateAgencyContractProperties';
  agencyContractCommission: BasicAgencyContractCommission;
};

export type BasicRealEstateAgent = {
  __typename?: 'BasicRealEstateAgent';
  fullName: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  oneGtId?: Maybe<Scalars['PositiveInt']['output']>;
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicScheduledPayment = {
  __typename?: 'BasicScheduledPayment';
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  payment: Scalars['PositiveDecimal']['output'];
  scheduledPaymentType: ScheduledPaymentType;
};

export type BasicSubsidy = {
  __typename?: 'BasicSubsidy';
  id: Scalars['PositiveInt']['output'];
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicUser = {
  __typename?: 'BasicUser';
  email: Scalars['NonEmptyString']['output'];
  fullName: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  isManager: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
  userRole: UserRole;
};

export type CandidateType = {
  __typename?: 'CandidateType';
  agencyContractId: Scalars['PositiveInt']['output'];
  agencyContractNumber: Scalars['NonEmptyString']['output'];
  agencyContractPercent: Scalars['NonNegativeDecimal']['output'];
  agencyContractThreshold: Scalars['NonNegativeDecimal']['output'];
  agencyId: Scalars['PositiveInt']['output'];
  agencyName: Scalars['NonEmptyString']['output'];
  clientContractId: Scalars['PositiveInt']['output'];
  clientContractNumber: Scalars['NonEmptyString']['output'];
  clientContractPrice: Scalars['PositiveDecimal']['output'];
  clientContractType: ClientContractType;
  payAmount: Scalars['NonNegativeDecimal']['output'];
  paymentPercentage: Scalars['NonNegativeDecimal']['output'];
  transactionAmount: Scalars['NonNegativeDecimal']['output'];
};

export type Client = {
  __typename?: 'Client';
  clientEntityProperties?: Maybe<BasicClientEntityProperties>;
  clientIndividualMinorProperties?: Maybe<BasicClientIndividualMinorProperties>;
  clientIndividualProperties?: Maybe<BasicClientIndividualProperties>;
  clientProperties: BasicClient;
};

export enum ClientCategory {
  Entity = 'ENTITY',
  Individual = 'INDIVIDUAL',
  IndividualMinor = 'INDIVIDUAL_MINOR'
}

export type ClientContract = {
  __typename?: 'ClientContract';
  agencyContracts?: Maybe<Array<Maybe<AgencyContractClientContract>>>;
  bank?: Maybe<BasicBank>;
  clientContractProperties: BasicClientContract;
  clients: Array<BasicClientContractToClient>;
  dduClientContractProperties?: Maybe<BasicDduClientContractProperties>;
  dkpClientContractProperties?: Maybe<BasicDkpClientContractProperties>;
  manager?: Maybe<BasicUser>;
  object: BasicObject;
  product: Product;
  realEstateAgent?: Maybe<BasicRealEstateAgent>;
  subsidy?: Maybe<BasicSubsidy>;
};

export type ClientContractToClientInput = {
  clientId: Scalars['PositiveInt']['input'];
  isMain: Scalars['Boolean']['input'];
  share: Scalars['NonNegativeInt']['input'];
};

export enum ClientContractType {
  Ddu = 'DDU',
  Dkp = 'DKP'
}

export type ClientContractWithObject = {
  __typename?: 'ClientContractWithObject';
  clientContract: BasicClientContract;
  object: BasicObject;
};

export type ClientContracts = {
  __typename?: 'ClientContracts';
  clientContracts: Array<ClientContract>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type ClientContractsWithTransactionAmount = {
  __typename?: 'ClientContractsWithTransactionAmount';
  clientContract: ClientContract;
  transactionAmount: Scalars['PositiveDecimal']['output'];
};

export type ClientEntityPropertiesInput = {
  kpp?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ClientIndividualMinorPropertiesInput = {
  birthCertificate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  clientPassport?: InputMaybe<ClientPassportPropertiesInput>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  representativeIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  snils?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ClientIndividualPropertiesInput = {
  clientPassport?: InputMaybe<ClientPassportPropertiesInput>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  snils?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ClientPassportPropertiesInput = {
  code?: InputMaybe<Scalars['NonEmptyString']['input']>;
  issued?: InputMaybe<Scalars['NonEmptyString']['input']>;
  number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  placeOfBirth?: InputMaybe<Scalars['NonEmptyString']['input']>;
  registrationAddress?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type Clients = {
  __typename?: 'Clients';
  clients: Array<Client>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type CommonContractor = {
  __typename?: 'CommonContractor';
  accounts?: Maybe<Array<BasicCommonAccount>>;
  contractor: BasicCommonContractor;
};

export type CommonContractors = {
  __typename?: 'CommonContractors';
  contractors: Array<CommonContractor>;
  totalCount: Scalars['PositiveInt']['output'];
};

export type CommonEntities = {
  __typename?: 'CommonEntities';
  entities: Array<BasicCommonEntity>;
  totalCount: Scalars['PositiveInt']['output'];
};

export type CreateActualPaymentInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  payment: Scalars['Decimal']['input'];
};

export type CreateAgencyContractInput = {
  agencyContractProperties: CreateAgencyContractPropertiesInput;
  mipAgencyContractProperties?: InputMaybe<MipAgencyContractPropertiesInput>;
  realEstateAgencyContractProperties?: InputMaybe<RealEstateAgencyContractPropertiesInput>;
};

export type CreateAgencyContractPropertiesInput = {
  agencyContractSignatoryId?: InputMaybe<Scalars['PositiveInt']['input']>;
  agencyContractType: AgencyContractType;
  agencyId: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  entityId: Scalars['PositiveInt']['input'];
  objectId: Scalars['PositiveInt']['input'];
  responsibleUserId: Scalars['PositiveInt']['input'];
};

export type CreateAgencyContractSignatoryInput = {
  agencyId: Scalars['PositiveInt']['input'];
  basedOn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  fullName: Scalars['NonEmptyString']['input'];
  title?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type CreateAgencyInput = {
  commonDbContractorsId: Scalars['PositiveInt']['input'];
  inn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
};

export type CreateAssignmentInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  clientIdsFrom: Array<Scalars['PositiveInt']['input']>;
  clientIdsTo: Array<Scalars['PositiveInt']['input']>;
};

export type CreateBankInput = {
  isVisible: Scalars['Boolean']['input'];
  name: Scalars['NonEmptyString']['input'];
};

export type CreateClientContractInput = {
  clientContractProperties: CreateClientContractPropertiesInput;
  dduClientContractProperties?: InputMaybe<DduClientContractPropertiesInput>;
  dkpClientContractProperties?: InputMaybe<DkpClientContractPropertiesInput>;
};

export type CreateClientContractPropertiesInput = {
  agencyContractIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  bankId?: InputMaybe<Scalars['PositiveInt']['input']>;
  clientContractType: ClientContractType;
  clients: Array<ClientContractToClientInput>;
  comment?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Date']['input'];
  managerId?: InputMaybe<Scalars['PositiveInt']['input']>;
  number: Scalars['NonEmptyString']['input'];
  price: Scalars['PositiveDecimal']['input'];
  productId: Scalars['PositiveInt']['input'];
  realEstateAgentId?: InputMaybe<Scalars['PositiveInt']['input']>;
  registrationDate?: InputMaybe<Scalars['Date']['input']>;
  subsidyId?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type CreateClientInput = {
  clientEntityProperties?: InputMaybe<ClientEntityPropertiesInput>;
  clientIndividualMinorProperties?: InputMaybe<ClientIndividualMinorPropertiesInput>;
  clientIndividualProperties?: InputMaybe<ClientIndividualPropertiesInput>;
  clientProperties: CreateClientPropertiesInput;
};

export type CreateClientPropertiesInput = {
  address?: InputMaybe<Scalars['NonEmptyString']['input']>;
  clientCategory: ClientCategory;
  email?: InputMaybe<Scalars['NonEmptyString']['input']>;
  fullName: Scalars['NonEmptyString']['input'];
  inn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type CreateProductInput = {
  number: Scalars['NonEmptyString']['input'];
  objectId: Scalars['PositiveInt']['input'];
  pricingProductsId: Scalars['PositiveInt']['input'];
  productCategory: ProductCategory;
};

export type CreateRealEstateAgencyActInput = {
  agencyContractId: Scalars['PositiveInt']['input'];
  agencyId: Scalars['PositiveInt']['input'];
  amount: Scalars['NonNegativeDecimal']['input'];
  clientContractId: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  note?: InputMaybe<Scalars['NonEmptyString']['input']>;
  number: Scalars['NonEmptyString']['input'];
  retention?: InputMaybe<Scalars['NonNegativeDecimal']['input']>;
};

export type CreateRealEstateAgentInput = {
  agencyIds: Array<Scalars['PositiveInt']['input']>;
  fullName: Scalars['NonEmptyString']['input'];
  oneGtId?: InputMaybe<Scalars['PositiveInt']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type CreateScheduledPaymentInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  payment: Scalars['PositiveDecimal']['input'];
  scheduledPaymentType: ScheduledPaymentType;
};

export type CreateSubsidyInput = {
  isVisible: Scalars['Boolean']['input'];
  name: Scalars['NonEmptyString']['input'];
};

export type CreateUserInput = {
  email: Scalars['NonEmptyString']['input'];
  fullName: Scalars['NonEmptyString']['input'];
  isManager: Scalars['Boolean']['input'];
  isStaff: Scalars['Boolean']['input'];
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
  userRole: UserRole;
};

export type DduClientContractPropertiesInput = {
  dduLink?: InputMaybe<Scalars['NonEmptyString']['input']>;
  escrowAccountNumber?: InputMaybe<Scalars['NonEmptyString']['input']>;
  escrowAccountOpeningDate?: InputMaybe<Scalars['Date']['input']>;
  escrowPeriod?: InputMaybe<Scalars['Date']['input']>;
  isEscrowDiscount?: InputMaybe<Scalars['Boolean']['input']>;
  returnAccount?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type DeleteActualPaymentInput = {
  id: Scalars['PositiveInt']['input'];
};

export type DeleteBankInput = {
  id: Scalars['PositiveInt']['input'];
};

export type DeleteScheduledPaymentInput = {
  id: Scalars['PositiveInt']['input'];
};

export type DeleteSubsidyInput = {
  id: Scalars['PositiveInt']['input'];
};

export type DeleteUserInput = {
  id: Scalars['PositiveInt']['input'];
};

export type DkpClientContractPropertiesInput = {
  dkpLink?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  entity: BasicEntity;
  objects: Array<BasicObject>;
};

export type EscrowAccountHistoryInput = {
  builderInn: Scalars['String']['input'];
  closingDate?: InputMaybe<Scalars['Date']['input']>;
  dateOfTransaction: Scalars['Date']['input'];
  dduDate: Scalars['Date']['input'];
  dduNumber: Scalars['String']['input'];
  depositedAmount: Scalars['Decimal']['input'];
  depositor: Scalars['String']['input'];
  depositorInn?: InputMaybe<Scalars['String']['input']>;
  expirationDate: Scalars['Date']['input'];
  incomingBalance: Scalars['Decimal']['input'];
  loanAgreementDate?: InputMaybe<Scalars['Date']['input']>;
  loanAgreementNumber?: InputMaybe<Scalars['String']['input']>;
  number: Scalars['String']['input'];
  openingDate: Scalars['Date']['input'];
  outgoingBalance: Scalars['Decimal']['input'];
  status: EscrowAccountStatus;
  transactionAmount: Scalars['Decimal']['input'];
};

export enum EscrowAccountStatus {
  Closed = 'CLOSED',
  Opened = 'OPENED'
}

export type EscrowAccountsHistory = {
  __typename?: 'EscrowAccountsHistory';
  escrowAccountsHistory: Array<BasicEscrowAccountHistory>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type GetActualPaymentsInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetAgenciesInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetAgencyContractInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetAgencyContractSignatoriesInput = {
  agencyId: Scalars['PositiveInt']['input'];
};

export type GetAgencyContractsInput = {
  agencyId: Scalars['PositiveInt']['input'];
  objectId?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type GetAgencyInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetClientContractInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetClientContractsByIdsInput = {
  ids: Array<Scalars['PositiveInt']['input']>;
};

export type GetClientContractsInput = {
  objectId?: InputMaybe<Scalars['PositiveInt']['input']>;
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetClientInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetClientsInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetCommonContractorInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetCommonContractorsInput = {
  options?: InputMaybe<BaseOptionsInput>;
};

export type GetCommonEntitiesInput = {
  options?: InputMaybe<BaseOptionsInput>;
};

export type GetCommonEntityInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetEscrowAccountsHistoryByDduNumberInput = {
  dduNumber: Scalars['NonEmptyString']['input'];
};

export type GetEscrowAccountsHistoryInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetObjectInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetPricingProductInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetPricingProductsInput = {
  objectId: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BaseOptionsInput>;
};

export type GetRealEstateAgencyActInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetRealEstateAgencyActsInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetRealEstateAgentInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetRealEstateAgentsInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetScheduledPaymentsInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BasicOptionsInput>;
};

export type IsDeleted = {
  __typename?: 'IsDeleted';
  isDeleted: Scalars['Boolean']['output'];
};

export type MipAgencyContractPropertiesInput = {
  agencyContractCommission: AgencyContractCommissionInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createActualPayment: BasicActualPayment;
  createActualPayments: Scalars['Boolean']['output'];
  createAgency: BasicAgency;
  createAgencyContract: BasicAgencyContract;
  createAgencyContractSignatory: BasicAgencyContractSignatory;
  createAssignment: Scalars['Boolean']['output'];
  createBank: BasicBank;
  createClient: BasicClient;
  createClientContract: BasicClientContract;
  createEscrowAccountsHistory: Scalars['Boolean']['output'];
  createProduct: Product;
  createRealEstateAgencyAct: BasicRealEstateAgencyAct;
  createRealEstateAgent: BasicRealEstateAgent;
  createScheduledPayment: BasicScheduledPayment;
  createScheduledPayments: Scalars['Boolean']['output'];
  createStaff: BasicUser;
  createSubsidy: BasicSubsidy;
  createUser: BasicUser;
  deleteActualPayment: IsDeleted;
  deleteBank: Scalars['Boolean']['output'];
  deleteScheduledPayment: IsDeleted;
  deleteSubsidy: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  updateAgencyContract: BasicAgencyContract;
  updateBank: BasicBank;
  updateClient: BasicClient;
  updateClientContract: BasicClientContract;
  updateRealEstateAgencyAct: BasicRealEstateAgencyAct;
  updateRealEstateAgent: BasicRealEstateAgent;
  updateSubsidy: BasicSubsidy;
  updateUser: BasicUser;
};


export type MutationCreateActualPaymentArgs = {
  input: CreateActualPaymentInput;
};


export type MutationCreateActualPaymentsArgs = {
  input: Array<CreateActualPaymentInput>;
};


export type MutationCreateAgencyArgs = {
  input: CreateAgencyInput;
};


export type MutationCreateAgencyContractArgs = {
  input: CreateAgencyContractInput;
};


export type MutationCreateAgencyContractSignatoryArgs = {
  input: CreateAgencyContractSignatoryInput;
};


export type MutationCreateAssignmentArgs = {
  input: CreateAssignmentInput;
};


export type MutationCreateBankArgs = {
  input: CreateBankInput;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateClientContractArgs = {
  input: CreateClientContractInput;
};


export type MutationCreateEscrowAccountsHistoryArgs = {
  input: Array<EscrowAccountHistoryInput>;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateRealEstateAgencyActArgs = {
  input: CreateRealEstateAgencyActInput;
};


export type MutationCreateRealEstateAgentArgs = {
  input: CreateRealEstateAgentInput;
};


export type MutationCreateScheduledPaymentArgs = {
  input: CreateScheduledPaymentInput;
};


export type MutationCreateScheduledPaymentsArgs = {
  input: Array<CreateScheduledPaymentInput>;
};


export type MutationCreateStaffArgs = {
  input: CreateUserInput;
};


export type MutationCreateSubsidyArgs = {
  input: CreateSubsidyInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteActualPaymentArgs = {
  input: DeleteActualPaymentInput;
};


export type MutationDeleteBankArgs = {
  input: DeleteBankInput;
};


export type MutationDeleteScheduledPaymentArgs = {
  input: DeleteScheduledPaymentInput;
};


export type MutationDeleteSubsidyArgs = {
  input: DeleteSubsidyInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationUpdateAgencyContractArgs = {
  input: UpdateAgencyContractInput;
};


export type MutationUpdateBankArgs = {
  input: UpdateBankInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationUpdateClientContractArgs = {
  input: UpdateClientContractInput;
};


export type MutationUpdateRealEstateAgencyActArgs = {
  input: UpdateRealEstateAgencyActInput;
};


export type MutationUpdateRealEstateAgentArgs = {
  input: UpdateRealEstateAgentInput;
};


export type MutationUpdateSubsidyArgs = {
  input: UpdateSubsidyInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type PricingProduct = {
  __typename?: 'PricingProduct';
  category: BasicPricingProductCategory;
  object: BasicPricingObject;
  product: BasicPricingProduct;
  productType?: Maybe<BasicPricingProductType>;
};

export type PricingProducts = {
  __typename?: 'PricingProducts';
  products: Array<PricingProduct>;
  totalCount: Scalars['PositiveInt']['output'];
};

export type Product = {
  __typename?: 'Product';
  object: BasicObject;
  product: BasicProduct;
};

export enum ProductCategory {
  Apartment = 'APARTMENT',
  Flat = 'FLAT',
  Office = 'OFFICE',
  ParkingSpace = 'PARKING_SPACE',
  StorageRoom = 'STORAGE_ROOM'
}

export type Query = {
  __typename?: 'Query';
  getActualPayments: ActualPayments;
  getAgencies: Agencies;
  getAgency: Agency;
  getAgencyContract: AgencyContract;
  getAgencyContractSignatories: Array<BasicAgencyContractSignatory>;
  getAgencyContracts: Array<AgencyContract>;
  getBanks: Array<BasicBank>;
  getClient: Client;
  getClientContract: ClientContract;
  getClientContracts: ClientContracts;
  getClientContractsByIds: ClientContracts;
  getClients: Clients;
  getCommonContractor: CommonContractor;
  getCommonContractors: CommonContractors;
  getCommonEntities: CommonEntities;
  getCommonEntity: BasicCommonEntity;
  getEntities: Array<Entity>;
  getEscrowAccountsHistory: EscrowAccountsHistory;
  getEscrowAccountsHistoryByDduNumber: Array<BasicEscrowAccountHistory>;
  getObject: BasicObject;
  getObjects: Array<BasicObject>;
  getPricingProduct: PricingProduct;
  getPricingProducts: PricingProducts;
  getRealEstateAgencyAct: RealEstateAgencyAct;
  getRealEstateAgencyActCandidates: Array<CandidateType>;
  getRealEstateAgencyActs: RealEstateAgencyActs;
  getRealEstateAgent: RealEstateAgent;
  getRealEstateAgents: RealEstateAgents;
  getScheduledPayments: ScheduledPayments;
  getSubsidies: Array<BasicSubsidy>;
  getUsers: Array<BasicUser>;
};


export type QueryGetActualPaymentsArgs = {
  input: GetActualPaymentsInput;
};


export type QueryGetAgenciesArgs = {
  input?: InputMaybe<GetAgenciesInput>;
};


export type QueryGetAgencyArgs = {
  input: GetAgencyInput;
};


export type QueryGetAgencyContractArgs = {
  input: GetAgencyContractInput;
};


export type QueryGetAgencyContractSignatoriesArgs = {
  input: GetAgencyContractSignatoriesInput;
};


export type QueryGetAgencyContractsArgs = {
  input: GetAgencyContractsInput;
};


export type QueryGetClientArgs = {
  input: GetClientInput;
};


export type QueryGetClientContractArgs = {
  input: GetClientContractInput;
};


export type QueryGetClientContractsArgs = {
  input?: InputMaybe<GetClientContractsInput>;
};


export type QueryGetClientContractsByIdsArgs = {
  input: GetClientContractsByIdsInput;
};


export type QueryGetClientsArgs = {
  input?: InputMaybe<GetClientsInput>;
};


export type QueryGetCommonContractorArgs = {
  input: GetCommonContractorInput;
};


export type QueryGetCommonContractorsArgs = {
  input?: InputMaybe<GetCommonContractorsInput>;
};


export type QueryGetCommonEntitiesArgs = {
  input?: InputMaybe<GetCommonEntitiesInput>;
};


export type QueryGetCommonEntityArgs = {
  input: GetCommonEntityInput;
};


export type QueryGetEscrowAccountsHistoryArgs = {
  input?: InputMaybe<GetEscrowAccountsHistoryInput>;
};


export type QueryGetEscrowAccountsHistoryByDduNumberArgs = {
  input: GetEscrowAccountsHistoryByDduNumberInput;
};


export type QueryGetObjectArgs = {
  input: GetObjectInput;
};


export type QueryGetPricingProductArgs = {
  input: GetPricingProductInput;
};


export type QueryGetPricingProductsArgs = {
  input: GetPricingProductsInput;
};


export type QueryGetRealEstateAgencyActArgs = {
  input: GetRealEstateAgencyActInput;
};


export type QueryGetRealEstateAgencyActsArgs = {
  input?: InputMaybe<GetRealEstateAgencyActsInput>;
};


export type QueryGetRealEstateAgentArgs = {
  input: GetRealEstateAgentInput;
};


export type QueryGetRealEstateAgentsArgs = {
  input?: InputMaybe<GetRealEstateAgentsInput>;
};


export type QueryGetScheduledPaymentsArgs = {
  input: GetScheduledPaymentsInput;
};

export type RealEstateAgencyAct = {
  __typename?: 'RealEstateAgencyAct';
  agency: BasicAgency;
  agencyContract: AgencyContractWithRealEstateAgencyProperties;
  clientContract: ClientContractWithObject;
  realEstateAgencyAct: BasicRealEstateAgencyAct;
};

export type RealEstateAgencyActs = {
  __typename?: 'RealEstateAgencyActs';
  realEstateAgencyActs: Array<RealEstateAgencyAct>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type RealEstateAgencyContractPropertiesInput = {
  agencyContractCommission: AgencyContractCommissionInput;
};

export type RealEstateAgent = {
  __typename?: 'RealEstateAgent';
  agencies: Array<BasicAgency>;
  realEstateAgent: BasicRealEstateAgent;
};

export type RealEstateAgents = {
  __typename?: 'RealEstateAgents';
  realEstateAgents: Array<RealEstateAgent>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export enum ScheduledPaymentType {
  Exchange = 'EXCHANGE',
  MaternityCapital = 'MATERNITY_CAPITAL',
  Mortgage = 'MORTGAGE',
  Own = 'OWN'
}

export type ScheduledPayments = {
  __typename?: 'ScheduledPayments';
  scheduledPayments: Array<BasicScheduledPayment>;
  totalCount: Scalars['NonNegativeInt']['output'];
};

export type UpdateAgencyContractInput = {
  agencyContractProperties: UpdateAgencyContractPropertiesInput;
  mipAgencyContractProperties?: InputMaybe<MipAgencyContractPropertiesInput>;
  realEstateAgencyContractProperties?: InputMaybe<RealEstateAgencyContractPropertiesInput>;
};

export type UpdateAgencyContractPropertiesInput = {
  agencyContractSignatoryId?: InputMaybe<Scalars['PositiveInt']['input']>;
  agencyId?: InputMaybe<Scalars['PositiveInt']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  entityId?: InputMaybe<Scalars['PositiveInt']['input']>;
  id: Scalars['PositiveInt']['input'];
  number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  objectId?: InputMaybe<Scalars['PositiveInt']['input']>;
  responsibleUserId?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type UpdateBankInput = {
  id: Scalars['PositiveInt']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateClientContractInput = {
  clientContractProperties: UpdateClientContractPropertiesInput;
  dduClientContractProperties?: InputMaybe<DduClientContractPropertiesInput>;
  dkpClientContractProperties?: InputMaybe<DkpClientContractPropertiesInput>;
};

export type UpdateClientContractPropertiesInput = {
  agencyContractIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  bankId?: InputMaybe<Scalars['PositiveInt']['input']>;
  clients?: InputMaybe<Array<ClientContractToClientInput>>;
  comment?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['PositiveInt']['input'];
  isRealEstateAgencyActDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  managerId?: InputMaybe<Scalars['PositiveInt']['input']>;
  number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  productId?: InputMaybe<Scalars['PositiveInt']['input']>;
  realEstateAgentId?: InputMaybe<Scalars['PositiveInt']['input']>;
  registrationDate?: InputMaybe<Scalars['Date']['input']>;
  subsidyId?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type UpdateClientInput = {
  clientEntityProperties?: InputMaybe<ClientEntityPropertiesInput>;
  clientIndividualMinorProperties?: InputMaybe<ClientIndividualMinorPropertiesInput>;
  clientIndividualProperties?: InputMaybe<ClientIndividualPropertiesInput>;
  clientProperties: UpdateClientPropertiesInput;
};

export type UpdateClientPropertiesInput = {
  address?: InputMaybe<Scalars['NonEmptyString']['input']>;
  email?: InputMaybe<Scalars['NonEmptyString']['input']>;
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
  inn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateRealEstateAgencyActInput = {
  amount?: InputMaybe<Scalars['NonNegativeDecimal']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['PositiveInt']['input'];
  note?: InputMaybe<Scalars['NonEmptyString']['input']>;
  number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  retention?: InputMaybe<Scalars['NonNegativeDecimal']['input']>;
};

export type UpdateRealEstateAgentInput = {
  agencyIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
  oneGtId?: InputMaybe<Scalars['PositiveInt']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateSubsidyInput = {
  id: Scalars['PositiveInt']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['NonEmptyString']['input']>;
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
  isManager?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
  userRole?: InputMaybe<UserRole>;
};

export enum UserRole {
  Administrator = 'ADMINISTRATOR',
  Director = 'DIRECTOR',
  SalesEmployee = 'SALES_EMPLOYEE'
}
