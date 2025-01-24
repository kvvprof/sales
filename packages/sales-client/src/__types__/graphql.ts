/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type BasicRepresentative = {
  __typename?: 'BasicRepresentative';
  attorneyDate?: Maybe<Scalars['Date']['output']>;
  attorneyNumber?: Maybe<Scalars['NonEmptyString']['output']>;
  authorizedBy?: Maybe<Scalars['NonEmptyString']['output']>;
  authorizedRole?: Maybe<Scalars['NonEmptyString']['output']>;
  fullName: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
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

export type BasicTransferAct = {
  __typename?: 'BasicTransferAct';
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  link?: Maybe<Scalars['NonEmptyString']['output']>;
  number: Scalars['NonEmptyString']['output'];
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
  agencyContractMaxDays: Scalars['NonNegativeInt']['output'];
  agencyContractNumber: Scalars['NonEmptyString']['output'];
  agencyContractPercent: Scalars['NonNegativeDecimal']['output'];
  agencyContractThreshold: Scalars['NonNegativeDecimal']['output'];
  agencyId: Scalars['PositiveInt']['output'];
  agencyName: Scalars['NonEmptyString']['output'];
  clientContractId: Scalars['PositiveInt']['output'];
  clientContractNumber: Scalars['NonEmptyString']['output'];
  clientContractPrice: Scalars['PositiveDecimal']['output'];
  clientContractType: ClientContractType;
  daysElapsed: Scalars['NonNegativeInt']['output'];
  mostRecentTransactionDate?: Maybe<Scalars['Date']['output']>;
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
  representatives?: Maybe<Array<BasicRepresentative>>;
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
  clientContractId: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  note?: InputMaybe<Scalars['NonEmptyString']['input']>;
  retention?: InputMaybe<Scalars['NonNegativeDecimal']['input']>;
};

export type CreateRealEstateAgentInput = {
  agencyIds: Array<Scalars['PositiveInt']['input']>;
  fullName: Scalars['NonEmptyString']['input'];
  oneGtId?: InputMaybe<Scalars['PositiveInt']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type CreateRepresentativeInput = {
  attorneyDate?: InputMaybe<Scalars['Date']['input']>;
  attorneyNumber?: InputMaybe<Scalars['NonEmptyString']['input']>;
  authorizedBy?: InputMaybe<Scalars['NonEmptyString']['input']>;
  authorizedRole?: InputMaybe<Scalars['NonEmptyString']['input']>;
  clientId: Scalars['PositiveInt']['input'];
  fullName: Scalars['NonEmptyString']['input'];
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

export type CreateTransferActInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  representativeIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
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

export type GetRepresentativesByClientIdsInput = {
  clientIds: Array<Scalars['PositiveInt']['input']>;
};

export type GetScheduledPaymentsInput = {
  clientContractId: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetTransferActInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetTransferActsInput = {
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
  createRepresentative: BasicRepresentative;
  createScheduledPayment: BasicScheduledPayment;
  createScheduledPayments: Scalars['Boolean']['output'];
  createStaff: BasicUser;
  createSubsidy: BasicSubsidy;
  createTransferAct: BasicTransferAct;
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
  updateRepresentative: BasicRepresentative;
  updateSubsidy: BasicSubsidy;
  updateTransferAct: BasicTransferAct;
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


export type MutationCreateRepresentativeArgs = {
  input: CreateRepresentativeInput;
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


export type MutationCreateTransferActArgs = {
  input: CreateTransferActInput;
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


export type MutationUpdateRepresentativeArgs = {
  input: UpdateRepresentativeInput;
};


export type MutationUpdateSubsidyArgs = {
  input: UpdateSubsidyInput;
};


export type MutationUpdateTransferActArgs = {
  input: UpdateTransferActInput;
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
  getClientContractsWithoutTransferAct: ClientContracts;
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
  getRepresentativesByClientIds: Array<Representative>;
  getScheduledPayments: ScheduledPayments;
  getSubsidies: Array<BasicSubsidy>;
  getTransferAct: TransferAct;
  getTransferActs: TransferActs;
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


export type QueryGetClientContractsWithoutTransferActArgs = {
  input?: InputMaybe<GetClientContractsInput>;
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


export type QueryGetRepresentativesByClientIdsArgs = {
  input: GetRepresentativesByClientIdsInput;
};


export type QueryGetScheduledPaymentsArgs = {
  input: GetScheduledPaymentsInput;
};


export type QueryGetTransferActArgs = {
  input: GetTransferActInput;
};


export type QueryGetTransferActsArgs = {
  input: GetTransferActsInput;
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

export type Representative = {
  __typename?: 'Representative';
  client: BasicClient;
  representative: BasicRepresentative;
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

export type TransferAct = {
  __typename?: 'TransferAct';
  clientContract: BasicClientContract;
  clients?: Maybe<Array<BasicClient>>;
  object: BasicObject;
  product: BasicProduct;
  representatives?: Maybe<Array<Representative>>;
  transferAct: BasicTransferAct;
};

export type TransferActs = {
  __typename?: 'TransferActs';
  totalCount: Scalars['NonNegativeInt']['output'];
  transferActs: Array<TransferAct>;
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
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['PositiveInt']['input'];
  note?: InputMaybe<Scalars['NonEmptyString']['input']>;
  retention?: InputMaybe<Scalars['NonNegativeDecimal']['input']>;
};

export type UpdateRealEstateAgentInput = {
  agencyIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
  oneGtId?: InputMaybe<Scalars['PositiveInt']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateRepresentativeInput = {
  attorneyDate?: InputMaybe<Scalars['Date']['input']>;
  attorneyNumber?: InputMaybe<Scalars['NonEmptyString']['input']>;
  authorizedBy?: InputMaybe<Scalars['NonEmptyString']['input']>;
  authorizedRole?: InputMaybe<Scalars['NonEmptyString']['input']>;
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
};

export type UpdateSubsidyInput = {
  id: Scalars['PositiveInt']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateTransferActInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['PositiveInt']['input'];
  representativeIds?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
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

export type GetBanksInAdminPanelBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksInAdminPanelBanksQuery = { __typename?: 'Query', getBanks: Array<{ __typename?: 'BasicBank', id: any, name: any, isVisible: boolean }> };

export type CreateBankInAdminPanelBanksMutationVariables = Exact<{
  input: CreateBankInput;
}>;


export type CreateBankInAdminPanelBanksMutation = { __typename?: 'Mutation', createBank: { __typename?: 'BasicBank', id: any, name: any } };

export type UpdateBankInAdminPanelBanksMutationVariables = Exact<{
  input: UpdateBankInput;
}>;


export type UpdateBankInAdminPanelBanksMutation = { __typename?: 'Mutation', updateBank: { __typename?: 'BasicBank', id: any, name: any } };

export type DeleteBankInAdminPanelBanksMutationVariables = Exact<{
  input: DeleteBankInput;
}>;


export type DeleteBankInAdminPanelBanksMutation = { __typename?: 'Mutation', deleteBank: boolean };

export type GetUsersInAdminPanelManagersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersInAdminPanelManagersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'BasicUser', id: any, fullName: any, email: any, phone?: any | null, isManager: boolean, isStaff: boolean, userRole: UserRole }> };

export type CreateUserInAdminPanelManagersMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserInAdminPanelManagersMutation = { __typename?: 'Mutation', createUser: { __typename?: 'BasicUser', id: any } };

export type UpdateUserInAdminPanelManagersMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserInAdminPanelManagersMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'BasicUser', id: any } };

export type DeleteUserInAdminPanelManagersMutationVariables = Exact<{
  input: DeleteUserInput;
}>;


export type DeleteUserInAdminPanelManagersMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type GetSubsidiesInAdminPanelSubsidiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubsidiesInAdminPanelSubsidiesQuery = { __typename?: 'Query', getSubsidies: Array<{ __typename?: 'BasicSubsidy', id: any, name: any, isVisible: boolean }> };

export type CreateSubsidyInAdminPanelSubsidiesMutationVariables = Exact<{
  input: CreateSubsidyInput;
}>;


export type CreateSubsidyInAdminPanelSubsidiesMutation = { __typename?: 'Mutation', createSubsidy: { __typename?: 'BasicSubsidy', id: any, name: any } };

export type UpdateSubsidyInAdminPanelSubsidiesMutationVariables = Exact<{
  input: UpdateSubsidyInput;
}>;


export type UpdateSubsidyInAdminPanelSubsidiesMutation = { __typename?: 'Mutation', updateSubsidy: { __typename?: 'BasicSubsidy', id: any, name: any } };

export type DeleteSubsidyInAdminPanelSubsidiesMutationVariables = Exact<{
  input: DeleteSubsidyInput;
}>;


export type DeleteSubsidyInAdminPanelSubsidiesMutation = { __typename?: 'Mutation', deleteSubsidy: boolean };

export type GetAgenciesInAgencyContractPickerQueryVariables = Exact<{
  input: GetAgenciesInput;
}>;


export type GetAgenciesInAgencyContractPickerQuery = { __typename?: 'Query', getAgencies: { __typename?: 'Agencies', agencies: Array<{ __typename?: 'BasicAgency', id: any, name: any, commonDbContractorsId: any }> } };

export type GetAgencyContractsInAgencyContractPickerQueryVariables = Exact<{
  input: GetAgencyContractsInput;
}>;


export type GetAgencyContractsInAgencyContractPickerQuery = { __typename?: 'Query', getAgencyContracts: Array<{ __typename?: 'AgencyContract', agencyContractProperties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType }, mipAgencyContractProperties?: { __typename?: 'BasicMipAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, realEstateAgencyContractProperties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, object: { __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any }, agency: { __typename?: 'BasicAgency', id: any, name: any, commonDbContractorsId: any } }> };

export type GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQueryVariables = Exact<{
  input: GetAgencyContractSignatoriesInput;
}>;


export type GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQuery = { __typename?: 'Query', getAgencyContractSignatories: Array<{ __typename?: 'BasicAgencyContractSignatory', id: any, fullName: any, basedOn?: any | null, title?: any | null }> };

export type GetObjectsInMipAgencyContractQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInMipAgencyContractQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any }> };

export type GetAgencyContractInMipAgencyContractQueryVariables = Exact<{
  input: GetAgencyContractInput;
}>;


export type GetAgencyContractInMipAgencyContractQuery = { __typename?: 'Query', getAgencyContract: { __typename?: 'AgencyContract', agencyContractProperties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType, link?: any | null }, agencyContractSignatory?: { __typename?: 'BasicAgencyContractSignatory', id: any, fullName: any, basedOn?: any | null, title?: any | null } | null, mipAgencyContractProperties?: { __typename?: 'BasicMipAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', percent: any, threshold: any, maxDays: any } } | null, entity: { __typename?: 'BasicEntity', id: any, name: any }, object: { __typename?: 'BasicObject', id: any, name: any }, agency: { __typename?: 'BasicAgency', id: any, name: any }, responsibleUser?: { __typename?: 'BasicUser', id: any, fullName: any } | null } };

export type CreateAgencyContractInMipAgencyContractMutationVariables = Exact<{
  input: CreateAgencyContractInput;
}>;


export type CreateAgencyContractInMipAgencyContractMutation = { __typename?: 'Mutation', createAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type UpdateAgencyContractInMipAgencyContractMutationVariables = Exact<{
  input: UpdateAgencyContractInput;
}>;


export type UpdateAgencyContractInMipAgencyContractMutation = { __typename?: 'Mutation', updateAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutationVariables = Exact<{
  input: CreateAgencyContractSignatoryInput;
}>;


export type CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutation = { __typename?: 'Mutation', createAgencyContractSignatory: { __typename?: 'BasicAgencyContractSignatory', id: any, fullName: any, basedOn?: any | null, title?: any | null } };

export type GetObjectsInNewAgencyContractQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInNewAgencyContractQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any }> };

export type GetAgencyContractInRealEstateAgencyContractQueryVariables = Exact<{
  input: GetAgencyContractInput;
}>;


export type GetAgencyContractInRealEstateAgencyContractQuery = { __typename?: 'Query', getAgencyContract: { __typename?: 'AgencyContract', agencyContractProperties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType, link?: any | null }, agencyContractSignatory?: { __typename?: 'BasicAgencyContractSignatory', id: any, fullName: any, basedOn?: any | null, title?: any | null } | null, realEstateAgencyContractProperties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', percent: any, threshold: any, maxDays: any } } | null, entity: { __typename?: 'BasicEntity', id: any, name: any }, object: { __typename?: 'BasicObject', id: any, name: any }, agency: { __typename?: 'BasicAgency', id: any, name: any }, responsibleUser?: { __typename?: 'BasicUser', id: any, fullName: any } | null } };

export type CreateAgencyContractInNewAgencyContractMutationVariables = Exact<{
  input: CreateAgencyContractInput;
}>;


export type CreateAgencyContractInNewAgencyContractMutation = { __typename?: 'Mutation', createAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type UpdateAgencyContractInNewAgencyContractMutationVariables = Exact<{
  input: UpdateAgencyContractInput;
}>;


export type UpdateAgencyContractInNewAgencyContractMutation = { __typename?: 'Mutation', updateAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type GetAgenciesInAgenciesQueryVariables = Exact<{
  input: GetAgenciesInput;
}>;


export type GetAgenciesInAgenciesQuery = { __typename?: 'Query', getAgencies: { __typename?: 'Agencies', totalCount: any, agencies: Array<{ __typename?: 'BasicAgency', id: any, name: any }> } };

export type GetAgenciesInAgencyPickerQueryVariables = Exact<{
  input: GetAgenciesInput;
}>;


export type GetAgenciesInAgencyPickerQuery = { __typename?: 'Query', getAgencies: { __typename?: 'Agencies', agencies: Array<{ __typename?: 'BasicAgency', id: any, name: any }> } };

export type GetAgencyAndAgencyContractsInAgencyQueryVariables = Exact<{
  agencyInput: GetAgencyInput;
  agencyContractsInput: GetAgencyContractsInput;
}>;


export type GetAgencyAndAgencyContractsInAgencyQuery = { __typename?: 'Query', getAgency: { __typename?: 'Agency', agency: { __typename?: 'BasicAgency', id: any, name: any, inn?: any | null, commonDbContractorsId: any } }, getAgencyContracts: Array<{ __typename?: 'AgencyContract', agencyContractProperties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType }, mipAgencyContractProperties?: { __typename?: 'BasicMipAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, realEstateAgencyContractProperties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, object: { __typename?: 'BasicObject', id: any, commonDbObjectsId: any, name: any } }> };

export type GetCommonContractorInAgencyQueryVariables = Exact<{
  input: GetCommonContractorInput;
}>;


export type GetCommonContractorInAgencyQuery = { __typename?: 'Query', getCommonContractor: { __typename?: 'CommonContractor', contractor: { __typename?: 'BasicCommonContractor', id: any, name: string, shortName?: string | null, inn?: string | null, kpp?: string | null, ogrn?: string | null, legalAddress?: string | null, actualAddress?: string | null, contacts?: string | null, reconciliationLink?: string | null, isActive?: boolean | null, propogatedAt?: any | null, phone?: string | null }, accounts?: Array<{ __typename?: 'BasicCommonAccount', id: any, number?: string | null, bank?: { __typename?: 'BasicCommonBank', id: any, name: string, city?: string | null, bik?: string | null, correspondentNumber?: string | null } | null }> | null } };

export type GetCommonContractorsInNewAgencyQueryVariables = Exact<{
  input: GetCommonContractorsInput;
}>;


export type GetCommonContractorsInNewAgencyQuery = { __typename?: 'Query', getCommonContractors: { __typename?: 'CommonContractors', contractors: Array<{ __typename?: 'CommonContractor', contractor: { __typename?: 'BasicCommonContractor', id: any, name: string, shortName?: string | null, inn?: string | null, kpp?: string | null, ogrn?: string | null, legalAddress?: string | null, actualAddress?: string | null, contacts?: string | null, reconciliationLink?: string | null, isActive?: boolean | null, propogatedAt?: any | null, phone?: string | null }, accounts?: Array<{ __typename?: 'BasicCommonAccount', id: any, number?: string | null, bank?: { __typename?: 'BasicCommonBank', id: any, name: string, city?: string | null, bik?: string | null, correspondentNumber?: string | null } | null }> | null }> } };

export type CreateAgencyInNewAgencyMutationVariables = Exact<{
  input: CreateAgencyInput;
}>;


export type CreateAgencyInNewAgencyMutation = { __typename?: 'Mutation', createAgency: { __typename?: 'BasicAgency', id: any } };

export type GetBanksInBankPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksInBankPickerQuery = { __typename?: 'Query', getBanks: Array<{ __typename?: 'BasicBank', id: any, name: any, isVisible: boolean }> };

export type CreateAssignmentInAssignmentMutationVariables = Exact<{
  input: CreateAssignmentInput;
}>;


export type CreateAssignmentInAssignmentMutation = { __typename?: 'Mutation', createAssignment: boolean };

export type GetObjectsInClientContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInClientContractsQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any }> };

export type GetClientContractsInClientContractsQueryVariables = Exact<{
  input: GetClientContractsInput;
}>;


export type GetClientContractsInClientContractsQuery = { __typename?: 'Query', getClientContracts: { __typename?: 'ClientContracts', totalCount: any, clientContracts: Array<{ __typename?: 'ClientContract', clientContractProperties: { __typename?: 'BasicClientContract', id: any, number: any, price: any, date: any, clientContractType: ClientContractType }, clients: Array<{ __typename?: 'BasicClientContractToClient', client: { __typename?: 'BasicClient', id: any, fullName: any } }>, product: { __typename?: 'Product', product: { __typename?: 'BasicProduct', id: any, number: any, productCategory: ProductCategory } }, object: { __typename?: 'BasicObject', id: any, name: any }, agencyContracts?: Array<{ __typename?: 'AgencyContractClientContract', agencyContract: { __typename?: 'BasicAgencyContract', agencyContractType: AgencyContractType } } | null> | null }> } };

export type GetClientContractInDduClientContractQueryVariables = Exact<{
  input: GetClientContractInput;
}>;


export type GetClientContractInDduClientContractQuery = { __typename?: 'Query', getClientContract: { __typename?: 'ClientContract', agencyContracts?: Array<{ __typename?: 'AgencyContractClientContract', agencyContract: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType }, mipAgencyContractProperties?: { __typename?: 'BasicMipAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, realEstateAgencyContractProperties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, agency: { __typename?: 'BasicAgency', id: any, name: any, commonDbContractorsId: any } } | null> | null, bank?: { __typename?: 'BasicBank', id: any, name: any, isVisible: boolean } | null, subsidy?: { __typename?: 'BasicSubsidy', id: any, name: any, isVisible: boolean } | null, clientContractProperties: { __typename?: 'BasicClientContract', id: any, number: any, date: any, registrationDate?: any | null, price: any, clientContractType: ClientContractType, comment?: string | null, link?: string | null }, clients: Array<{ __typename?: 'BasicClientContractToClient', isMain: boolean, share: any, client: { __typename?: 'BasicClient', id: any, fullName: any, clientCategory: ClientCategory } }>, manager?: { __typename?: 'BasicUser', id: any, fullName: any } | null, object: { __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any }, product: { __typename?: 'Product', object: { __typename?: 'BasicObject', id: any, commonDbObjectsId: any, name: any }, product: { __typename?: 'BasicProduct', id: any, pricingProductsId: any, number: any, productCategory: ProductCategory } }, realEstateAgent?: { __typename?: 'BasicRealEstateAgent', id: any, fullName: any } | null, dduClientContractProperties?: { __typename?: 'BasicDduClientContractProperties', id: any, isEscrowDiscount?: boolean | null, escrowAccountOpeningDate?: any | null, escrowPeriod?: any | null, escrowAccountNumber?: any | null, dduLink?: any | null, returnAccount?: any | null } | null } };

export type CreateClientContractIDduClientContractMutationVariables = Exact<{
  input: CreateClientContractInput;
}>;


export type CreateClientContractIDduClientContractMutation = { __typename?: 'Mutation', createClientContract: { __typename?: 'BasicClientContract', id: any } };

export type UpdateClientContractInDduClientContractMutationVariables = Exact<{
  input: UpdateClientContractInput;
}>;


export type UpdateClientContractInDduClientContractMutation = { __typename?: 'Mutation', updateClientContract: { __typename?: 'BasicClientContract', id: any, number: any } };

export type GetClientContractInDkpClientContractQueryVariables = Exact<{
  input: GetClientContractInput;
}>;


export type GetClientContractInDkpClientContractQuery = { __typename?: 'Query', getClientContract: { __typename?: 'ClientContract', agencyContracts?: Array<{ __typename?: 'AgencyContractClientContract', agencyContract: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType }, mipAgencyContractProperties?: { __typename?: 'BasicMipAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, realEstateAgencyContractProperties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null, agency: { __typename?: 'BasicAgency', id: any, name: any, commonDbContractorsId: any } } | null> | null, bank?: { __typename?: 'BasicBank', id: any, name: any, isVisible: boolean } | null, subsidy?: { __typename?: 'BasicSubsidy', id: any, name: any, isVisible: boolean } | null, clientContractProperties: { __typename?: 'BasicClientContract', id: any, number: any, date: any, registrationDate?: any | null, price: any, clientContractType: ClientContractType, comment?: string | null, link?: string | null }, clients: Array<{ __typename?: 'BasicClientContractToClient', isMain: boolean, share: any, client: { __typename?: 'BasicClient', id: any, fullName: any, clientCategory: ClientCategory } }>, manager?: { __typename?: 'BasicUser', id: any, fullName: any } | null, object: { __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any }, product: { __typename?: 'Product', object: { __typename?: 'BasicObject', id: any, commonDbObjectsId: any, name: any }, product: { __typename?: 'BasicProduct', id: any, pricingProductsId: any, number: any, productCategory: ProductCategory } }, realEstateAgent?: { __typename?: 'BasicRealEstateAgent', id: any, fullName: any } | null, dkpClientContractProperties?: { __typename?: 'BasicDkpClientContractProperties', id: any, dkpLink?: any | null } | null } };

export type CreateClientContractInDkpClientContractMutationVariables = Exact<{
  input: CreateClientContractInput;
}>;


export type CreateClientContractInDkpClientContractMutation = { __typename?: 'Mutation', createClientContract: { __typename?: 'BasicClientContract', id: any } };

export type UpdateClientContractInDkpClientContractMutationVariables = Exact<{
  input: UpdateClientContractInput;
}>;


export type UpdateClientContractInDkpClientContractMutation = { __typename?: 'Mutation', updateClientContract: { __typename?: 'BasicClientContract', id: any, number: any } };

export type GetClientEntityInClientEntityQueryVariables = Exact<{
  input: GetClientInput;
}>;


export type GetClientEntityInClientEntityQuery = { __typename?: 'Query', getClient: { __typename?: 'Client', clientProperties: { __typename?: 'BasicClient', id: any, fullName: any, inn?: any | null, phone?: any | null, email?: any | null, address?: any | null, clientCategory: ClientCategory }, clientEntityProperties?: { __typename?: 'BasicClientEntityProperties', kpp?: any | null } | null, representatives?: Array<{ __typename?: 'BasicRepresentative', id: any, fullName: any, attorneyNumber?: any | null, attorneyDate?: any | null, authorizedBy?: any | null, authorizedRole?: any | null }> | null } };

export type CreateClientEntityInClientEntityMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientEntityInClientEntityMutation = { __typename?: 'Mutation', createClient: { __typename?: 'BasicClient', id: any } };

export type UpdateClientEntityInClientEntityMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientEntityInClientEntityMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'BasicClient', fullName: any } };

export type GetClientIndividualMinorInClientIndividualMinorQueryVariables = Exact<{
  input: GetClientInput;
}>;


export type GetClientIndividualMinorInClientIndividualMinorQuery = { __typename?: 'Query', getClient: { __typename?: 'Client', clientProperties: { __typename?: 'BasicClient', id: any, fullName: any, inn?: any | null, phone?: any | null, email?: any | null, address?: any | null, clientCategory: ClientCategory }, clientIndividualMinorProperties?: { __typename?: 'BasicClientIndividualMinorProperties', dob?: any | null, snils?: any | null, birthCertificate?: any | null, clientPassport?: { __typename?: 'BasicClientPassport', number?: any | null, issued?: any | null, code?: any | null, placeOfBirth?: any | null, registrationAddress?: any | null } | null, representatives?: Array<{ __typename?: 'BasicClient', id: any, fullName: any, clientCategory: ClientCategory }> | null } | null, representatives?: Array<{ __typename?: 'BasicRepresentative', id: any, fullName: any, attorneyNumber?: any | null, attorneyDate?: any | null, authorizedBy?: any | null, authorizedRole?: any | null }> | null } };

export type CreateClientIndividualMinorInClientIndividualMinorMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientIndividualMinorInClientIndividualMinorMutation = { __typename?: 'Mutation', createClient: { __typename?: 'BasicClient', id: any } };

export type UpdateClientIndividualMinorInClientIndividualMinorMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientIndividualMinorInClientIndividualMinorMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'BasicClient', fullName: any } };

export type GetClientIndividualInClientIndividualQueryVariables = Exact<{
  input: GetClientInput;
}>;


export type GetClientIndividualInClientIndividualQuery = { __typename?: 'Query', getClient: { __typename?: 'Client', clientProperties: { __typename?: 'BasicClient', id: any, fullName: any, inn?: any | null, phone?: any | null, email?: any | null, address?: any | null, clientCategory: ClientCategory }, clientIndividualProperties?: { __typename?: 'BasicClientIndividualProperties', dob?: any | null, snils?: any | null, clientPassport?: { __typename?: 'BasicClientPassport', number?: any | null, issued?: any | null, code?: any | null, placeOfBirth?: any | null, registrationAddress?: any | null } | null } | null, representatives?: Array<{ __typename?: 'BasicRepresentative', id: any, fullName: any, attorneyNumber?: any | null, attorneyDate?: any | null, authorizedBy?: any | null, authorizedRole?: any | null }> | null } };

export type CreateClientIndividualInClientIndividualMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientIndividualInClientIndividualMutation = { __typename?: 'Mutation', createClient: { __typename?: 'BasicClient', id: any } };

export type UpdateClientIndividualInClientIndividualMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientIndividualInClientIndividualMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'BasicClient', fullName: any } };

export type GetClientsInClientPickerQueryVariables = Exact<{
  input: GetClientsInput;
}>;


export type GetClientsInClientPickerQuery = { __typename?: 'Query', getClients: { __typename?: 'Clients', clients: Array<{ __typename?: 'Client', clientProperties: { __typename?: 'BasicClient', id: any, fullName: any, clientCategory: ClientCategory } }> } };

export type GetClientsInClientsQueryVariables = Exact<{
  input: GetClientsInput;
}>;


export type GetClientsInClientsQuery = { __typename?: 'Query', getClients: { __typename?: 'Clients', totalCount: any, clients: Array<{ __typename?: 'Client', clientProperties: { __typename?: 'BasicClient', id: any, fullName: any, clientCategory: ClientCategory } }> } };

export type CreateRepresentativeInNewRepresentativeMutationVariables = Exact<{
  input: CreateRepresentativeInput;
}>;


export type CreateRepresentativeInNewRepresentativeMutation = { __typename?: 'Mutation', createRepresentative: { __typename?: 'BasicRepresentative', id: any, fullName: any, attorneyNumber?: any | null, attorneyDate?: any | null, authorizedBy?: any | null, authorizedRole?: any | null } };

export type GetRepresentativesByClientIdsInRepresentativePickerQueryVariables = Exact<{
  input: GetRepresentativesByClientIdsInput;
}>;


export type GetRepresentativesByClientIdsInRepresentativePickerQuery = { __typename?: 'Query', getRepresentativesByClientIds: Array<{ __typename?: 'Representative', representative: { __typename?: 'BasicRepresentative', id: any, fullName: any, attorneyNumber?: any | null, attorneyDate?: any | null, authorizedBy?: any | null, authorizedRole?: any | null }, client: { __typename?: 'BasicClient', id: any, fullName: any } }> };

export type UpdateRepresentativeInNewRepresentativeMutationVariables = Exact<{
  input: UpdateRepresentativeInput;
}>;


export type UpdateRepresentativeInNewRepresentativeMutation = { __typename?: 'Mutation', updateRepresentative: { __typename?: 'BasicRepresentative', id: any, fullName: any, attorneyNumber?: any | null, attorneyDate?: any | null, authorizedBy?: any | null, authorizedRole?: any | null } };

export type GetEntitiesInEntityPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesInEntityPickerQuery = { __typename?: 'Query', getEntities: Array<{ __typename?: 'Entity', entity: { __typename?: 'BasicEntity', id: any, name: any }, objects: Array<{ __typename?: 'BasicObject', id: any, name: any }> }> };

export type CreateEscrowAccountsHistoryMutationVariables = Exact<{
  input: Array<EscrowAccountHistoryInput> | EscrowAccountHistoryInput;
}>;


export type CreateEscrowAccountsHistoryMutation = { __typename?: 'Mutation', createEscrowAccountsHistory: boolean };

export type GetEscrowAccountsHistoryQueryVariables = Exact<{
  input?: InputMaybe<GetEscrowAccountsHistoryInput>;
}>;


export type GetEscrowAccountsHistoryQuery = { __typename?: 'Query', getEscrowAccountsHistory: { __typename?: 'EscrowAccountsHistory', totalCount: any, escrowAccountsHistory: Array<{ __typename?: 'BasicEscrowAccountHistory', id: any, status: EscrowAccountStatus, number: string, openingDate: any, depositedAmount: any, incomingBalance: any, dateOfTransaction: any, transactionAmount: any, outgoingBalance: any, expirationDate: any, depositor: string, depositorInn?: string | null, dduNumber: string, dduDate: any, loanAgreementNumber?: string | null, loanAgreementDate?: any | null, closingDate?: any | null, builderInn: string }> } };

export type GetClientContractsByIdsInRightPanelQueryVariables = Exact<{
  input: GetClientContractsByIdsInput;
}>;


export type GetClientContractsByIdsInRightPanelQuery = { __typename?: 'Query', getClientContractsByIds: { __typename?: 'ClientContracts', clientContracts: Array<{ __typename?: 'ClientContract', clientContractProperties: { __typename?: 'BasicClientContract', id: any, date: any, number: any, price: any, clientContractType: ClientContractType }, product: { __typename?: 'Product', product: { __typename?: 'BasicProduct', number: any, productCategory: ProductCategory }, object: { __typename?: 'BasicObject', name: any } } }> } };

export type GetObjectsInObjectPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInObjectPickerQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any }> };

export type CreateActualPaymentsInNewActualPaymentsMutationVariables = Exact<{
  input: Array<CreateActualPaymentInput> | CreateActualPaymentInput;
}>;


export type CreateActualPaymentsInNewActualPaymentsMutation = { __typename?: 'Mutation', createActualPayments: boolean };

export type CreateScheduledPaymentsInNewScheduledPaymentsMutationVariables = Exact<{
  input: Array<CreateScheduledPaymentInput> | CreateScheduledPaymentInput;
}>;


export type CreateScheduledPaymentsInNewScheduledPaymentsMutation = { __typename?: 'Mutation', createScheduledPayments: boolean };

export type GetPaymentsInPaymentScheduleQueryVariables = Exact<{
  getScheduledPaymentsInput: GetScheduledPaymentsInput;
  getActualPaymentsInput: GetActualPaymentsInput;
  getClientContractInput: GetClientContractInput;
}>;


export type GetPaymentsInPaymentScheduleQuery = { __typename?: 'Query', getScheduledPayments: { __typename?: 'ScheduledPayments', scheduledPayments: Array<{ __typename?: 'BasicScheduledPayment', id: any, date: any, payment: any, scheduledPaymentType: ScheduledPaymentType }> }, getActualPayments: { __typename?: 'ActualPayments', actualPayments: Array<{ __typename?: 'BasicActualPayment', id: any, date: any, payment: any }> }, getClientContract: { __typename?: 'ClientContract', clientContractProperties: { __typename?: 'BasicClientContract', number: any, price: any } } };

export type GetEscrowAccountsHistoryByDduNumberInPaymentScheduleQueryVariables = Exact<{
  input: GetEscrowAccountsHistoryByDduNumberInput;
}>;


export type GetEscrowAccountsHistoryByDduNumberInPaymentScheduleQuery = { __typename?: 'Query', getEscrowAccountsHistoryByDduNumber: Array<{ __typename?: 'BasicEscrowAccountHistory', id: any, status: EscrowAccountStatus, number: string, openingDate: any, depositedAmount: any, incomingBalance: any, dateOfTransaction: any, transactionAmount: any, outgoingBalance: any, expirationDate: any, depositor: string, depositorInn?: string | null, dduNumber: string, dduDate: any, loanAgreementNumber?: string | null, loanAgreementDate?: any | null, closingDate?: any | null, builderInn: string }> };

export type DeleteScheduledPaymentInPaymentScheduleMutationVariables = Exact<{
  input: DeleteScheduledPaymentInput;
}>;


export type DeleteScheduledPaymentInPaymentScheduleMutation = { __typename?: 'Mutation', deleteScheduledPayment: { __typename?: 'IsDeleted', isDeleted: boolean } };

export type DeleteActualPaymentInPaymentScheduleMutationVariables = Exact<{
  input: DeleteActualPaymentInput;
}>;


export type DeleteActualPaymentInPaymentScheduleMutation = { __typename?: 'Mutation', deleteActualPayment: { __typename?: 'IsDeleted', isDeleted: boolean } };

export type GetPricingProductInProductInfoQueryVariables = Exact<{
  input: GetPricingProductInput;
}>;


export type GetPricingProductInProductInfoQuery = { __typename?: 'Query', getPricingProduct: { __typename?: 'PricingProduct', object: { __typename?: 'BasicPricingObject', name: any }, category: { __typename?: 'BasicPricingProductCategory', name: any }, product: { __typename?: 'BasicPricingProduct', id: any, number: any, area: any, price: any, oneGtId?: any | null }, productType?: { __typename?: 'BasicPricingProductType', name: any } | null } };

export type GetObjectsInProductPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInProductPickerQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any }> };

export type GetPricingProductsInProductPickerQueryVariables = Exact<{
  input: GetPricingProductsInput;
}>;


export type GetPricingProductsInProductPickerQuery = { __typename?: 'Query', getPricingProducts: { __typename?: 'PricingProducts', products: Array<{ __typename?: 'PricingProduct', product: { __typename?: 'BasicPricingProduct', id: any, number: any, area: any, price: any }, category: { __typename?: 'BasicPricingProductCategory', id: any, name: any }, object: { __typename?: 'BasicPricingObject', id: any, name: any } }> } };

export type CreateProductInProductPickerMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductInProductPickerMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', product: { __typename?: 'BasicProduct', id: any, number: any, pricingProductsId: any, productCategory: ProductCategory }, object: { __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any } } };

export type CreateRealEstateAgencyActInNewRealEstateAgencyActMutationVariables = Exact<{
  input: CreateRealEstateAgencyActInput;
}>;


export type CreateRealEstateAgencyActInNewRealEstateAgencyActMutation = { __typename?: 'Mutation', createRealEstateAgencyAct: { __typename?: 'BasicRealEstateAgencyAct', id: any } };

export type GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidatesQuery = { __typename?: 'Query', getRealEstateAgencyActCandidates: Array<{ __typename?: 'CandidateType', clientContractId: any, clientContractNumber: any, clientContractType: ClientContractType, clientContractPrice: any, agencyContractId: any, agencyContractNumber: any, agencyContractPercent: any, agencyContractThreshold: any, agencyContractMaxDays: any, agencyId: any, agencyName: any, transactionAmount: any, paymentPercentage: any, payAmount: any, mostRecentTransactionDate?: any | null, daysElapsed: any }> };

export type CreateRealEstateAgencyActInRealEstateAgencyActCandidatesMutationVariables = Exact<{
  input: CreateRealEstateAgencyActInput;
}>;


export type CreateRealEstateAgencyActInRealEstateAgencyActCandidatesMutation = { __typename?: 'Mutation', createRealEstateAgencyAct: { __typename?: 'BasicRealEstateAgencyAct', id: any } };

export type GetRealEstateAgencyActInRealEstateAgencyActQueryVariables = Exact<{
  input: GetRealEstateAgencyActInput;
}>;


export type GetRealEstateAgencyActInRealEstateAgencyActQuery = { __typename?: 'Query', getRealEstateAgencyAct: { __typename?: 'RealEstateAgencyAct', agency: { __typename?: 'BasicAgency', id: any, name: any, commonDbContractorsId: any }, clientContract: { __typename?: 'ClientContractWithObject', clientContract: { __typename?: 'BasicClientContract', id: any, number: any, price: any, clientContractType: ClientContractType }, object: { __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any } }, realEstateAgencyAct: { __typename?: 'BasicRealEstateAgencyAct', id: any, number: any, date: any, amount: any, link?: any | null, retention?: any | null, note?: any | null }, agencyContract: { __typename?: 'AgencyContractWithRealEstateAgencyProperties', agencyContract: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agencyContractType: AgencyContractType }, realEstateAgencyContractProperties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agencyContractCommission: { __typename?: 'BasicAgencyContractCommission', maxDays: any, percent: any, threshold: any } } | null } } };

export type UpdateRealEstateAgencyActInRealEstateAgencyActMutationVariables = Exact<{
  input: UpdateRealEstateAgencyActInput;
}>;


export type UpdateRealEstateAgencyActInRealEstateAgencyActMutation = { __typename?: 'Mutation', updateRealEstateAgencyAct: { __typename?: 'BasicRealEstateAgencyAct', id: any } };

export type GetRealEstateAgencyActsInRealEstateAgencyActsQueryVariables = Exact<{
  input?: InputMaybe<GetRealEstateAgencyActsInput>;
}>;


export type GetRealEstateAgencyActsInRealEstateAgencyActsQuery = { __typename?: 'Query', getRealEstateAgencyActs: { __typename?: 'RealEstateAgencyActs', totalCount: any, realEstateAgencyActs: Array<{ __typename?: 'RealEstateAgencyAct', agency: { __typename?: 'BasicAgency', id: any, inn?: any | null, name: any, commonDbContractorsId: any }, realEstateAgencyAct: { __typename?: 'BasicRealEstateAgencyAct', id: any, number: any, date: any, amount: any, link?: any | null, retention?: any | null }, clientContract: { __typename?: 'ClientContractWithObject', clientContract: { __typename?: 'BasicClientContract', id: any, number: any } }, agencyContract: { __typename?: 'AgencyContractWithRealEstateAgencyProperties', agencyContract: { __typename?: 'BasicAgencyContract', id: any, number: any, agencyContractType: AgencyContractType } } }> } };

export type GetRealEstateAgentsInRealEstateAgentPickerQueryVariables = Exact<{
  input?: InputMaybe<GetRealEstateAgentsInput>;
}>;


export type GetRealEstateAgentsInRealEstateAgentPickerQuery = { __typename?: 'Query', getRealEstateAgents: { __typename?: 'RealEstateAgents', realEstateAgents: Array<{ __typename?: 'RealEstateAgent', realEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any, fullName: any } }> } };

export type GetRealEstateAgentInRealEstateAgentQueryVariables = Exact<{
  input: GetRealEstateAgentInput;
}>;


export type GetRealEstateAgentInRealEstateAgentQuery = { __typename?: 'Query', getRealEstateAgent: { __typename?: 'RealEstateAgent', realEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any, fullName: any, phone?: any | null, oneGtId?: any | null }, agencies: Array<{ __typename?: 'BasicAgency', id: any, commonDbContractorsId: any, name: any, inn?: any | null }> } };

export type CreateRealEstateAgentInNewRealEstateAgentMutationVariables = Exact<{
  input: CreateRealEstateAgentInput;
}>;


export type CreateRealEstateAgentInNewRealEstateAgentMutation = { __typename?: 'Mutation', createRealEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any } };

export type UpdateRealEstateAgentInRealEstateAgentMutationVariables = Exact<{
  input: UpdateRealEstateAgentInput;
}>;


export type UpdateRealEstateAgentInRealEstateAgentMutation = { __typename?: 'Mutation', updateRealEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any, fullName: any } };

export type GetRealEstateAgentsInRealEstateAgentsQueryVariables = Exact<{
  input: GetRealEstateAgentsInput;
}>;


export type GetRealEstateAgentsInRealEstateAgentsQuery = { __typename?: 'Query', getRealEstateAgents: { __typename?: 'RealEstateAgents', totalCount: any, realEstateAgents: Array<{ __typename?: 'RealEstateAgent', realEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any, fullName: any, phone?: any | null } }> } };

export type GetSubsidiesInSubsidyPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubsidiesInSubsidyPickerQuery = { __typename?: 'Query', getSubsidies: Array<{ __typename?: 'BasicSubsidy', id: any, name: any, isVisible: boolean }> };

export type CreateTransferActInNewTransferActMutationVariables = Exact<{
  input: CreateTransferActInput;
}>;


export type CreateTransferActInNewTransferActMutation = { __typename?: 'Mutation', createTransferAct: { __typename?: 'BasicTransferAct', id: any } };

export type GetObjectsInTransferActCandidatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInTransferActCandidatesQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any, commonDbObjectsId: any }> };

export type GetClientContractsWithoutTransferActInTransferActCandidatesQueryVariables = Exact<{
  input: GetClientContractsInput;
}>;


export type GetClientContractsWithoutTransferActInTransferActCandidatesQuery = { __typename?: 'Query', getClientContractsWithoutTransferAct: { __typename?: 'ClientContracts', totalCount: any, clientContracts: Array<{ __typename?: 'ClientContract', clientContractProperties: { __typename?: 'BasicClientContract', id: any, number: any, date: any, clientContractType: ClientContractType }, clients: Array<{ __typename?: 'BasicClientContractToClient', client: { __typename?: 'BasicClient', id: any, fullName: any } }>, product: { __typename?: 'Product', product: { __typename?: 'BasicProduct', id: any, number: any, productCategory: ProductCategory } }, object: { __typename?: 'BasicObject', id: any, name: any } }> } };

export type GetTransferActInTransferActQueryVariables = Exact<{
  input: GetTransferActInput;
}>;


export type GetTransferActInTransferActQuery = { __typename?: 'Query', getTransferAct: { __typename?: 'TransferAct', clientContract: { __typename?: 'BasicClientContract', id: any, number: any, clientContractType: ClientContractType, price: any }, object: { __typename?: 'BasicObject', id: any, commonDbObjectsId: any, name: any }, product: { __typename?: 'BasicProduct', id: any, number: any, productCategory: ProductCategory, pricingProductsId: any }, transferAct: { __typename?: 'BasicTransferAct', id: any, number: any, date: any, link?: any | null }, representatives?: Array<{ __typename?: 'Representative', representative: { __typename?: 'BasicRepresentative', id: any, fullName: any }, client: { __typename?: 'BasicClient', id: any, fullName: any } }> | null, clients?: Array<{ __typename?: 'BasicClient', id: any, fullName: any }> | null } };

export type UpdateTransferActInTransferActMutationVariables = Exact<{
  input: UpdateTransferActInput;
}>;


export type UpdateTransferActInTransferActMutation = { __typename?: 'Mutation', updateTransferAct: { __typename?: 'BasicTransferAct', id: any } };

export type GetTransferActsInTransferActsQueryVariables = Exact<{
  input: GetTransferActsInput;
}>;


export type GetTransferActsInTransferActsQuery = { __typename?: 'Query', getTransferActs: { __typename?: 'TransferActs', totalCount: any, transferActs: Array<{ __typename?: 'TransferAct', transferAct: { __typename?: 'BasicTransferAct', id: any, number: any, date: any, link?: any | null }, clientContract: { __typename?: 'BasicClientContract', id: any, number: any, clientContractType: ClientContractType }, object: { __typename?: 'BasicObject', name: any }, product: { __typename?: 'BasicProduct', number: any, productCategory: ProductCategory } }> } };

export type GetUsersInUserPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersInUserPickerQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'BasicUser', id: any, fullName: any, isManager: boolean }> };


export const GetBanksInAdminPanelBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBanksInAdminPanelBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}}]}}]} as unknown as DocumentNode<GetBanksInAdminPanelBanksQuery, GetBanksInAdminPanelBanksQueryVariables>;
export const CreateBankInAdminPanelBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBankInAdminPanelBanks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateBankInAdminPanelBanksMutation, CreateBankInAdminPanelBanksMutationVariables>;
export const UpdateBankInAdminPanelBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateBankInAdminPanelBanks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateBankInAdminPanelBanksMutation, UpdateBankInAdminPanelBanksMutationVariables>;
export const DeleteBankInAdminPanelBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteBankInAdminPanelBanks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteBankInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteBank"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteBankInAdminPanelBanksMutation, DeleteBankInAdminPanelBanksMutationVariables>;
export const GetUsersInAdminPanelManagersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersInAdminPanelManagers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}},{"kind":"Field","name":{"kind":"Name","value":"isStaff"}},{"kind":"Field","name":{"kind":"Name","value":"userRole"}}]}}]}}]} as unknown as DocumentNode<GetUsersInAdminPanelManagersQuery, GetUsersInAdminPanelManagersQueryVariables>;
export const CreateUserInAdminPanelManagersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserInAdminPanelManagers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserInAdminPanelManagersMutation, CreateUserInAdminPanelManagersMutationVariables>;
export const UpdateUserInAdminPanelManagersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserInAdminPanelManagers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateUserInAdminPanelManagersMutation, UpdateUserInAdminPanelManagersMutationVariables>;
export const DeleteUserInAdminPanelManagersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserInAdminPanelManagers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteUserInAdminPanelManagersMutation, DeleteUserInAdminPanelManagersMutationVariables>;
export const GetSubsidiesInAdminPanelSubsidiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubsidiesInAdminPanelSubsidies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubsidies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}}]}}]} as unknown as DocumentNode<GetSubsidiesInAdminPanelSubsidiesQuery, GetSubsidiesInAdminPanelSubsidiesQueryVariables>;
export const CreateSubsidyInAdminPanelSubsidiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubsidyInAdminPanelSubsidies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubsidyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubsidy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateSubsidyInAdminPanelSubsidiesMutation, CreateSubsidyInAdminPanelSubsidiesMutationVariables>;
export const UpdateSubsidyInAdminPanelSubsidiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubsidyInAdminPanelSubsidies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSubsidyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSubsidy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateSubsidyInAdminPanelSubsidiesMutation, UpdateSubsidyInAdminPanelSubsidiesMutationVariables>;
export const DeleteSubsidyInAdminPanelSubsidiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubsidyInAdminPanelSubsidies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteSubsidyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSubsidy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<DeleteSubsidyInAdminPanelSubsidiesMutation, DeleteSubsidyInAdminPanelSubsidiesMutationVariables>;
export const GetAgenciesInAgencyContractPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgenciesInAgencyContractPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgenciesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgenciesInAgencyContractPickerQuery, GetAgenciesInAgencyContractPickerQueryVariables>;
export const GetAgencyContractsInAgencyContractPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractsInAgencyContractPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mipAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractsInAgencyContractPickerQuery, GetAgencyContractsInAgencyContractPickerQueryVariables>;
export const GetAgencyContractSignatoriesInAgencyContractSignatoryPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractSignatoriesInAgencyContractSignatoryPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractSignatoriesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContractSignatories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"basedOn"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQuery, GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQueryVariables>;
export const GetObjectsInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInMipAgencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInMipAgencyContractQuery, GetObjectsInMipAgencyContractQueryVariables>;
export const GetAgencyContractInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractInMipAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractSignatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"basedOn"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mipAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"maxDays"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsibleUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractInMipAgencyContractQuery, GetAgencyContractInMipAgencyContractQueryVariables>;
export const CreateAgencyContractInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyContractInMipAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyContractInMipAgencyContractMutation, CreateAgencyContractInMipAgencyContractMutationVariables>;
export const UpdateAgencyContractInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAgencyContractInMipAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAgencyContractInMipAgencyContractMutation, UpdateAgencyContractInMipAgencyContractMutationVariables>;
export const CreateAgencyContractSignatoryInNewAgencyContractSignatoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyContractSignatoryInNewAgencyContractSignatory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyContractSignatoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgencyContractSignatory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"basedOn"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutation, CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutationVariables>;
export const GetObjectsInNewAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInNewAgencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInNewAgencyContractQuery, GetObjectsInNewAgencyContractQueryVariables>;
export const GetAgencyContractInRealEstateAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractInRealEstateAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractSignatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"basedOn"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"maxDays"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsibleUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractInRealEstateAgencyContractQuery, GetAgencyContractInRealEstateAgencyContractQueryVariables>;
export const CreateAgencyContractInNewAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyContractInNewAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyContractInNewAgencyContractMutation, CreateAgencyContractInNewAgencyContractMutationVariables>;
export const UpdateAgencyContractInNewAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAgencyContractInNewAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAgencyContractInNewAgencyContractMutation, UpdateAgencyContractInNewAgencyContractMutationVariables>;
export const GetAgenciesInAgenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgenciesInAgencies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgenciesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetAgenciesInAgenciesQuery, GetAgenciesInAgenciesQueryVariables>;
export const GetAgenciesInAgencyPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgenciesInAgencyPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgenciesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgenciesInAgencyPickerQuery, GetAgenciesInAgencyPickerQueryVariables>;
export const GetAgencyAndAgencyContractsInAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyAndAgencyContractsInAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agencyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agencyContractsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agencyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getAgencyContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agencyContractsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mipAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyAndAgencyContractsInAgencyQuery, GetAgencyAndAgencyContractsInAgencyQueryVariables>;
export const GetCommonContractorInAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommonContractorInAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCommonContractorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommonContractor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"ogrn"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddress"}},{"kind":"Field","name":{"kind":"Name","value":"actualAddress"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationLink"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"propogatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"bik"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentNumber"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommonContractorInAgencyQuery, GetCommonContractorInAgencyQueryVariables>;
export const GetCommonContractorsInNewAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommonContractorsInNewAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCommonContractorsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommonContractors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"ogrn"}},{"kind":"Field","name":{"kind":"Name","value":"legalAddress"}},{"kind":"Field","name":{"kind":"Name","value":"actualAddress"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliationLink"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"propogatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"bik"}},{"kind":"Field","name":{"kind":"Name","value":"correspondentNumber"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommonContractorsInNewAgencyQuery, GetCommonContractorsInNewAgencyQueryVariables>;
export const CreateAgencyInNewAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyInNewAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyInNewAgencyMutation, CreateAgencyInNewAgencyMutationVariables>;
export const GetBanksInBankPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBanksInBankPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}}]}}]} as unknown as DocumentNode<GetBanksInBankPickerQuery, GetBanksInBankPickerQueryVariables>;
export const CreateAssignmentInAssignmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAssignmentInAssignment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAssignmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAssignment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateAssignmentInAssignmentMutation, CreateAssignmentInAssignmentMutationVariables>;
export const GetObjectsInClientContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInClientContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInClientContractsQuery, GetObjectsInClientContractsQueryVariables>;
export const GetClientContractsInClientContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractsInClientContracts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencyContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetClientContractsInClientContractsQuery, GetClientContractsInClientContractsQueryVariables>;
export const GetClientContractInDduClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractInDduClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mipAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subsidy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"registrationDate"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}},{"kind":"Field","name":{"kind":"Name","value":"share"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pricingProductsId"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dduClientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isEscrowDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"escrowAccountOpeningDate"}},{"kind":"Field","name":{"kind":"Name","value":"escrowPeriod"}},{"kind":"Field","name":{"kind":"Name","value":"escrowAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"dduLink"}},{"kind":"Field","name":{"kind":"Name","value":"returnAccount"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientContractInDduClientContractQuery, GetClientContractInDduClientContractQueryVariables>;
export const CreateClientContractIDduClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientContractIDduClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientContractIDduClientContractMutation, CreateClientContractIDduClientContractMutationVariables>;
export const UpdateClientContractInDduClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientContractInDduClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<UpdateClientContractInDduClientContractMutation, UpdateClientContractInDduClientContractMutationVariables>;
export const GetClientContractInDkpClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractInDkpClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mipAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subsidy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"registrationDate"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isMain"}},{"kind":"Field","name":{"kind":"Name","value":"share"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pricingProductsId"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dkpClientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dkpLink"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientContractInDkpClientContractQuery, GetClientContractInDkpClientContractQueryVariables>;
export const CreateClientContractInDkpClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientContractInDkpClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientContractInDkpClientContractMutation, CreateClientContractInDkpClientContractMutationVariables>;
export const UpdateClientContractInDkpClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientContractInDkpClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<UpdateClientContractInDkpClientContractMutation, UpdateClientContractInDkpClientContractMutationVariables>;
export const GetClientEntityInClientEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientEntityInClientEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientEntityProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kpp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"representatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyNumber"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyDate"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedBy"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedRole"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientEntityInClientEntityQuery, GetClientEntityInClientEntityQueryVariables>;
export const CreateClientEntityInClientEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientEntityInClientEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientEntityInClientEntityMutation, CreateClientEntityInClientEntityMutationVariables>;
export const UpdateClientEntityInClientEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientEntityInClientEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<UpdateClientEntityInClientEntityMutation, UpdateClientEntityInClientEntityMutationVariables>;
export const GetClientIndividualMinorInClientIndividualMinorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientIndividualMinorInClientIndividualMinor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientIndividualMinorProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"birthCertificate"}},{"kind":"Field","name":{"kind":"Name","value":"clientPassport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"issued"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"placeOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"registrationAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"representatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"representatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyNumber"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyDate"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedBy"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedRole"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientIndividualMinorInClientIndividualMinorQuery, GetClientIndividualMinorInClientIndividualMinorQueryVariables>;
export const CreateClientIndividualMinorInClientIndividualMinorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientIndividualMinorInClientIndividualMinor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientIndividualMinorInClientIndividualMinorMutation, CreateClientIndividualMinorInClientIndividualMinorMutationVariables>;
export const UpdateClientIndividualMinorInClientIndividualMinorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientIndividualMinorInClientIndividualMinor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<UpdateClientIndividualMinorInClientIndividualMinorMutation, UpdateClientIndividualMinorInClientIndividualMinorMutationVariables>;
export const GetClientIndividualInClientIndividualDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientIndividualInClientIndividual"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientIndividualProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"clientPassport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"issued"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"placeOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"registrationAddress"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"representatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyNumber"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyDate"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedBy"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedRole"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientIndividualInClientIndividualQuery, GetClientIndividualInClientIndividualQueryVariables>;
export const CreateClientIndividualInClientIndividualDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientIndividualInClientIndividual"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientIndividualInClientIndividualMutation, CreateClientIndividualInClientIndividualMutationVariables>;
export const UpdateClientIndividualInClientIndividualDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientIndividualInClientIndividual"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<UpdateClientIndividualInClientIndividualMutation, UpdateClientIndividualInClientIndividualMutationVariables>;
export const GetClientsInClientPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientsInClientPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientsInClientPickerQuery, GetClientsInClientPickerQueryVariables>;
export const GetClientsInClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientsInClients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"clientCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetClientsInClientsQuery, GetClientsInClientsQueryVariables>;
export const CreateRepresentativeInNewRepresentativeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRepresentativeInNewRepresentative"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRepresentativeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRepresentative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyNumber"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyDate"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedBy"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedRole"}}]}}]}}]} as unknown as DocumentNode<CreateRepresentativeInNewRepresentativeMutation, CreateRepresentativeInNewRepresentativeMutationVariables>;
export const GetRepresentativesByClientIdsInRepresentativePickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRepresentativesByClientIdsInRepresentativePicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRepresentativesByClientIdsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRepresentativesByClientIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"representative"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyNumber"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyDate"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedBy"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedRole"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<GetRepresentativesByClientIdsInRepresentativePickerQuery, GetRepresentativesByClientIdsInRepresentativePickerQueryVariables>;
export const UpdateRepresentativeInNewRepresentativeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRepresentativeInNewRepresentative"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRepresentativeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRepresentative"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyNumber"}},{"kind":"Field","name":{"kind":"Name","value":"attorneyDate"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedBy"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedRole"}}]}}]}}]} as unknown as DocumentNode<UpdateRepresentativeInNewRepresentativeMutation, UpdateRepresentativeInNewRepresentativeMutationVariables>;
export const GetEntitiesInEntityPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEntitiesInEntityPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetEntitiesInEntityPickerQuery, GetEntitiesInEntityPickerQueryVariables>;
export const CreateEscrowAccountsHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEscrowAccountsHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EscrowAccountHistoryInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEscrowAccountsHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateEscrowAccountsHistoryMutation, CreateEscrowAccountsHistoryMutationVariables>;
export const GetEscrowAccountsHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEscrowAccountsHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetEscrowAccountsHistoryInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEscrowAccountsHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"escrowAccountsHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"openingDate"}},{"kind":"Field","name":{"kind":"Name","value":"depositedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"incomingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"transactionAmount"}},{"kind":"Field","name":{"kind":"Name","value":"outgoingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"depositor"}},{"kind":"Field","name":{"kind":"Name","value":"depositorInn"}},{"kind":"Field","name":{"kind":"Name","value":"dduNumber"}},{"kind":"Field","name":{"kind":"Name","value":"dduDate"}},{"kind":"Field","name":{"kind":"Name","value":"loanAgreementNumber"}},{"kind":"Field","name":{"kind":"Name","value":"loanAgreementDate"}},{"kind":"Field","name":{"kind":"Name","value":"closingDate"}},{"kind":"Field","name":{"kind":"Name","value":"builderInn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetEscrowAccountsHistoryQuery, GetEscrowAccountsHistoryQueryVariables>;
export const GetClientContractsByIdsInRightPanelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractsByIdsInRightPanel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractsByIdsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContractsByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientContractsByIdsInRightPanelQuery, GetClientContractsByIdsInRightPanelQueryVariables>;
export const GetObjectsInObjectPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInObjectPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInObjectPickerQuery, GetObjectsInObjectPickerQueryVariables>;
export const CreateActualPaymentsInNewActualPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateActualPaymentsInNewActualPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateActualPaymentInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createActualPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateActualPaymentsInNewActualPaymentsMutation, CreateActualPaymentsInNewActualPaymentsMutationVariables>;
export const CreateScheduledPaymentsInNewScheduledPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateScheduledPaymentsInNewScheduledPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateScheduledPaymentInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScheduledPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateScheduledPaymentsInNewScheduledPaymentsMutation, CreateScheduledPaymentsInNewScheduledPaymentsMutationVariables>;
export const GetPaymentsInPaymentScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPaymentsInPaymentSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getScheduledPaymentsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetScheduledPaymentsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getActualPaymentsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetActualPaymentsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getClientContractInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getScheduledPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getScheduledPaymentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scheduledPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"payment"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledPaymentType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getActualPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getActualPaymentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualPayments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"payment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getClientContractInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<GetPaymentsInPaymentScheduleQuery, GetPaymentsInPaymentScheduleQueryVariables>;
export const GetEscrowAccountsHistoryByDduNumberInPaymentScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEscrowAccountsHistoryByDduNumberInPaymentSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetEscrowAccountsHistoryByDduNumberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEscrowAccountsHistoryByDduNumber"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"openingDate"}},{"kind":"Field","name":{"kind":"Name","value":"depositedAmount"}},{"kind":"Field","name":{"kind":"Name","value":"incomingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfTransaction"}},{"kind":"Field","name":{"kind":"Name","value":"transactionAmount"}},{"kind":"Field","name":{"kind":"Name","value":"outgoingBalance"}},{"kind":"Field","name":{"kind":"Name","value":"expirationDate"}},{"kind":"Field","name":{"kind":"Name","value":"depositor"}},{"kind":"Field","name":{"kind":"Name","value":"depositorInn"}},{"kind":"Field","name":{"kind":"Name","value":"dduNumber"}},{"kind":"Field","name":{"kind":"Name","value":"dduDate"}},{"kind":"Field","name":{"kind":"Name","value":"loanAgreementNumber"}},{"kind":"Field","name":{"kind":"Name","value":"loanAgreementDate"}},{"kind":"Field","name":{"kind":"Name","value":"closingDate"}},{"kind":"Field","name":{"kind":"Name","value":"builderInn"}}]}}]}}]} as unknown as DocumentNode<GetEscrowAccountsHistoryByDduNumberInPaymentScheduleQuery, GetEscrowAccountsHistoryByDduNumberInPaymentScheduleQueryVariables>;
export const DeleteScheduledPaymentInPaymentScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteScheduledPaymentInPaymentSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteScheduledPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteScheduledPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteScheduledPaymentInPaymentScheduleMutation, DeleteScheduledPaymentInPaymentScheduleMutationVariables>;
export const DeleteActualPaymentInPaymentScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteActualPaymentInPaymentSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteActualPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteActualPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteActualPaymentInPaymentScheduleMutation, DeleteActualPaymentInPaymentScheduleMutationVariables>;
export const GetPricingProductInProductInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPricingProductInProductInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPricingProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPricingProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"oneGtId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetPricingProductInProductInfoQuery, GetPricingProductInProductInfoQueryVariables>;
export const GetObjectsInProductPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInProductPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInProductPickerQuery, GetObjectsInProductPickerQueryVariables>;
export const GetPricingProductsInProductPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPricingProductsInProductPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPricingProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPricingProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPricingProductsInProductPickerQuery, GetPricingProductsInProductPickerQueryVariables>;
export const CreateProductInProductPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductInProductPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"pricingProductsId"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProductInProductPickerMutation, CreateProductInProductPickerMutationVariables>;
export const CreateRealEstateAgencyActInNewRealEstateAgencyActDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRealEstateAgencyActInNewRealEstateAgencyAct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRealEstateAgencyActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRealEstateAgencyAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRealEstateAgencyActInNewRealEstateAgencyActMutation, CreateRealEstateAgencyActInNewRealEstateAgencyActMutationVariables>;
export const GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgencyActCandidates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContractId"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractNumber"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractPrice"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractId"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractNumber"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractPercent"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractMaxDays"}},{"kind":"Field","name":{"kind":"Name","value":"agencyId"}},{"kind":"Field","name":{"kind":"Name","value":"agencyName"}},{"kind":"Field","name":{"kind":"Name","value":"transactionAmount"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"payAmount"}},{"kind":"Field","name":{"kind":"Name","value":"mostRecentTransactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"daysElapsed"}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidatesQuery, GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidatesQueryVariables>;
export const CreateRealEstateAgencyActInRealEstateAgencyActCandidatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRealEstateAgencyActInRealEstateAgencyActCandidates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRealEstateAgencyActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRealEstateAgencyAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRealEstateAgencyActInRealEstateAgencyActCandidatesMutation, CreateRealEstateAgencyActInRealEstateAgencyActCandidatesMutationVariables>;
export const GetRealEstateAgencyActInRealEstateAgencyActDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgencyActInRealEstateAgencyAct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgencyActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgencyAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyAct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"retention"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContractCommission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maxDays"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgencyActInRealEstateAgencyActQuery, GetRealEstateAgencyActInRealEstateAgencyActQueryVariables>;
export const UpdateRealEstateAgencyActInRealEstateAgencyActDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRealEstateAgencyActInRealEstateAgencyAct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRealEstateAgencyActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRealEstateAgencyAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateRealEstateAgencyActInRealEstateAgencyActMutation, UpdateRealEstateAgencyActInRealEstateAgencyActMutationVariables>;
export const GetRealEstateAgencyActsInRealEstateAgencyActsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRealEstateAgencyActsInRealEstateAgencyActs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgencyActsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgencyActs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyActs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"realEstateAgencyAct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"retention"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"agencyContractType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgencyActsInRealEstateAgencyActsQuery, GetRealEstateAgencyActsInRealEstateAgencyActsQueryVariables>;
export const GetRealEstateAgentsInRealEstateAgentPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgentsInRealEstateAgentPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"realEstateAgents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"realEstateAgent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgentsInRealEstateAgentPickerQuery, GetRealEstateAgentsInRealEstateAgentPickerQueryVariables>;
export const GetRealEstateAgentInRealEstateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgentInRealEstateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"realEstateAgent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"oneGtId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbContractorsId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}}]}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgentInRealEstateAgentQuery, GetRealEstateAgentInRealEstateAgentQueryVariables>;
export const CreateRealEstateAgentInNewRealEstateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRealEstateAgentInNewRealEstateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRealEstateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRealEstateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRealEstateAgentInNewRealEstateAgentMutation, CreateRealEstateAgentInNewRealEstateAgentMutationVariables>;
export const UpdateRealEstateAgentInRealEstateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRealEstateAgentInRealEstateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRealEstateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRealEstateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]} as unknown as DocumentNode<UpdateRealEstateAgentInRealEstateAgentMutation, UpdateRealEstateAgentInRealEstateAgentMutationVariables>;
export const GetRealEstateAgentsInRealEstateAgentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgentsInRealEstateAgents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgentsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"realEstateAgents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"realEstateAgent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgentsInRealEstateAgentsQuery, GetRealEstateAgentsInRealEstateAgentsQueryVariables>;
export const GetSubsidiesInSubsidyPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubsidiesInSubsidyPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSubsidies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isVisible"}}]}}]}}]} as unknown as DocumentNode<GetSubsidiesInSubsidyPickerQuery, GetSubsidiesInSubsidyPickerQueryVariables>;
export const CreateTransferActInNewTransferActDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTransferActInNewTransferAct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTransferActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransferAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTransferActInNewTransferActMutation, CreateTransferActInNewTransferActMutationVariables>;
export const GetObjectsInTransferActCandidatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInTransferActCandidates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInTransferActCandidatesQuery, GetObjectsInTransferActCandidatesQueryVariables>;
export const GetClientContractsWithoutTransferActInTransferActCandidatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractsWithoutTransferActInTransferActCandidates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContractsWithoutTransferAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContractProperties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetClientContractsWithoutTransferActInTransferActCandidatesQuery, GetClientContractsWithoutTransferActInTransferActCandidatesQueryVariables>;
export const GetTransferActInTransferActDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTransferActInTransferAct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTransferActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransferAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commonDbObjectsId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}},{"kind":"Field","name":{"kind":"Name","value":"pricingProductsId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transferAct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"representatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"representative"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<GetTransferActInTransferActQuery, GetTransferActInTransferActQueryVariables>;
export const UpdateTransferActInTransferActDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTransferActInTransferAct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTransferActInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTransferAct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateTransferActInTransferActMutation, UpdateTransferActInTransferActMutationVariables>;
export const GetTransferActsInTransferActsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTransferActsInTransferActs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTransferActsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransferActs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transferActs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transferAct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"clientContractType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"productCategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetTransferActsInTransferActsQuery, GetTransferActsInTransferActsQueryVariables>;
export const GetUsersInUserPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersInUserPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"isManager"}}]}}]}}]} as unknown as DocumentNode<GetUsersInUserPickerQuery, GetUsersInUserPickerQueryVariables>;