import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  _Any: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
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

export const AgencyContractType = {
  MipAgencyContract: 'MIP_AGENCY_CONTRACT',
  RealEstateAgencyContract: 'REAL_ESTATE_AGENCY_CONTRACT'
} as const;

export type AgencyContractType = typeof AgencyContractType[keyof typeof AgencyContractType];
export type AgencyContractWithRealEstateAgencyProperties = {
  __typename?: 'AgencyContractWithRealEstateAgencyProperties';
  agencyContract: BasicAgencyContract;
  realEstateAgencyContractProperties?: Maybe<BasicRealEstateAgencyContractProperties>;
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

export const ClientCategory = {
  Entity: 'ENTITY',
  Individual: 'INDIVIDUAL',
  IndividualMinor: 'INDIVIDUAL_MINOR'
} as const;

export type ClientCategory = typeof ClientCategory[keyof typeof ClientCategory];
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

export const ClientContractType = {
  Ddu: 'DDU',
  Dkp: 'DKP'
} as const;

export type ClientContractType = typeof ClientContractType[keyof typeof ClientContractType];
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

export const EscrowAccountStatus = {
  Closed: 'CLOSED',
  Opened: 'OPENED'
} as const;

export type EscrowAccountStatus = typeof EscrowAccountStatus[keyof typeof EscrowAccountStatus];
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

export type GetEscrowAccountsHistoryByDduNumberInput = {
  dduNumber: Scalars['NonEmptyString']['input'];
};

export type GetEscrowAccountsHistoryInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetObjectInput = {
  id: Scalars['PositiveInt']['input'];
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

export type Product = {
  __typename?: 'Product';
  object: BasicObject;
  product: BasicProduct;
};

export const ProductCategory = {
  Apartment: 'APARTMENT',
  Flat: 'FLAT',
  Office: 'OFFICE',
  ParkingSpace: 'PARKING_SPACE',
  StorageRoom: 'STORAGE_ROOM'
} as const;

export type ProductCategory = typeof ProductCategory[keyof typeof ProductCategory];
export type Query = {
  __typename?: 'Query';
  _service: _Service;
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
  getEntities: Array<Entity>;
  getEscrowAccountsHistory: EscrowAccountsHistory;
  getEscrowAccountsHistoryByDduNumber: Array<BasicEscrowAccountHistory>;
  getObject: BasicObject;
  getObjects: Array<BasicObject>;
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


export type QueryGetEscrowAccountsHistoryArgs = {
  input?: InputMaybe<GetEscrowAccountsHistoryInput>;
};


export type QueryGetEscrowAccountsHistoryByDduNumberArgs = {
  input: GetEscrowAccountsHistoryByDduNumberInput;
};


export type QueryGetObjectArgs = {
  input: GetObjectInput;
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

export const ScheduledPaymentType = {
  Exchange: 'EXCHANGE',
  MaternityCapital: 'MATERNITY_CAPITAL',
  Mortgage: 'MORTGAGE',
  Own: 'OWN'
} as const;

export type ScheduledPaymentType = typeof ScheduledPaymentType[keyof typeof ScheduledPaymentType];
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

export const UserRole = {
  Administrator: 'ADMINISTRATOR',
  Director: 'DIRECTOR',
  SalesEmployee: 'SALES_EMPLOYEE'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];
export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActualPayments: ResolverTypeWrapper<ActualPayments>;
  Agencies: ResolverTypeWrapper<Agencies>;
  Agency: ResolverTypeWrapper<Agency>;
  AgencyContract: ResolverTypeWrapper<AgencyContract>;
  AgencyContractClientContract: ResolverTypeWrapper<AgencyContractClientContract>;
  AgencyContractCommissionInput: AgencyContractCommissionInput;
  AgencyContractType: AgencyContractType;
  AgencyContractWithRealEstateAgencyProperties: ResolverTypeWrapper<AgencyContractWithRealEstateAgencyProperties>;
  BasicActualPayment: ResolverTypeWrapper<BasicActualPayment>;
  BasicAgency: ResolverTypeWrapper<BasicAgency>;
  BasicAgencyContract: ResolverTypeWrapper<BasicAgencyContract>;
  BasicAgencyContractCommission: ResolverTypeWrapper<BasicAgencyContractCommission>;
  BasicAgencyContractSignatory: ResolverTypeWrapper<BasicAgencyContractSignatory>;
  BasicBank: ResolverTypeWrapper<BasicBank>;
  BasicClient: ResolverTypeWrapper<BasicClient>;
  BasicClientContract: ResolverTypeWrapper<BasicClientContract>;
  BasicClientContractToClient: ResolverTypeWrapper<BasicClientContractToClient>;
  BasicClientEntityProperties: ResolverTypeWrapper<BasicClientEntityProperties>;
  BasicClientIndividualMinorProperties: ResolverTypeWrapper<BasicClientIndividualMinorProperties>;
  BasicClientIndividualProperties: ResolverTypeWrapper<BasicClientIndividualProperties>;
  BasicClientPassport: ResolverTypeWrapper<BasicClientPassport>;
  BasicDduClientContractProperties: ResolverTypeWrapper<BasicDduClientContractProperties>;
  BasicDkpClientContractProperties: ResolverTypeWrapper<BasicDkpClientContractProperties>;
  BasicEntity: ResolverTypeWrapper<BasicEntity>;
  BasicEscrowAccountHistory: ResolverTypeWrapper<BasicEscrowAccountHistory>;
  BasicMipAgencyContractProperties: ResolverTypeWrapper<BasicMipAgencyContractProperties>;
  BasicObject: ResolverTypeWrapper<BasicObject>;
  BasicOptionsInput: BasicOptionsInput;
  BasicProduct: ResolverTypeWrapper<BasicProduct>;
  BasicRealEstateAgencyAct: ResolverTypeWrapper<BasicRealEstateAgencyAct>;
  BasicRealEstateAgencyContractProperties: ResolverTypeWrapper<BasicRealEstateAgencyContractProperties>;
  BasicRealEstateAgent: ResolverTypeWrapper<BasicRealEstateAgent>;
  BasicRepresentative: ResolverTypeWrapper<BasicRepresentative>;
  BasicScheduledPayment: ResolverTypeWrapper<BasicScheduledPayment>;
  BasicSubsidy: ResolverTypeWrapper<BasicSubsidy>;
  BasicTransferAct: ResolverTypeWrapper<BasicTransferAct>;
  BasicUser: ResolverTypeWrapper<BasicUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CandidateType: ResolverTypeWrapper<CandidateType>;
  Client: ResolverTypeWrapper<Client>;
  ClientCategory: ClientCategory;
  ClientContract: ResolverTypeWrapper<ClientContract>;
  ClientContractToClientInput: ClientContractToClientInput;
  ClientContractType: ClientContractType;
  ClientContractWithObject: ResolverTypeWrapper<ClientContractWithObject>;
  ClientContracts: ResolverTypeWrapper<ClientContracts>;
  ClientContractsWithTransactionAmount: ResolverTypeWrapper<ClientContractsWithTransactionAmount>;
  ClientEntityPropertiesInput: ClientEntityPropertiesInput;
  ClientIndividualMinorPropertiesInput: ClientIndividualMinorPropertiesInput;
  ClientIndividualPropertiesInput: ClientIndividualPropertiesInput;
  ClientPassportPropertiesInput: ClientPassportPropertiesInput;
  Clients: ResolverTypeWrapper<Clients>;
  CreateActualPaymentInput: CreateActualPaymentInput;
  CreateAgencyContractInput: CreateAgencyContractInput;
  CreateAgencyContractPropertiesInput: CreateAgencyContractPropertiesInput;
  CreateAgencyContractSignatoryInput: CreateAgencyContractSignatoryInput;
  CreateAgencyInput: CreateAgencyInput;
  CreateAssignmentInput: CreateAssignmentInput;
  CreateBankInput: CreateBankInput;
  CreateClientContractInput: CreateClientContractInput;
  CreateClientContractPropertiesInput: CreateClientContractPropertiesInput;
  CreateClientInput: CreateClientInput;
  CreateClientPropertiesInput: CreateClientPropertiesInput;
  CreateProductInput: CreateProductInput;
  CreateRealEstateAgencyActInput: CreateRealEstateAgencyActInput;
  CreateRealEstateAgentInput: CreateRealEstateAgentInput;
  CreateRepresentativeInput: CreateRepresentativeInput;
  CreateScheduledPaymentInput: CreateScheduledPaymentInput;
  CreateSubsidyInput: CreateSubsidyInput;
  CreateTransferActInput: CreateTransferActInput;
  CreateUserInput: CreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DduClientContractPropertiesInput: DduClientContractPropertiesInput;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DeleteActualPaymentInput: DeleteActualPaymentInput;
  DeleteBankInput: DeleteBankInput;
  DeleteScheduledPaymentInput: DeleteScheduledPaymentInput;
  DeleteSubsidyInput: DeleteSubsidyInput;
  DeleteUserInput: DeleteUserInput;
  DkpClientContractPropertiesInput: DkpClientContractPropertiesInput;
  Entity: ResolverTypeWrapper<Entity>;
  EscrowAccountHistoryInput: EscrowAccountHistoryInput;
  EscrowAccountStatus: EscrowAccountStatus;
  EscrowAccountsHistory: ResolverTypeWrapper<EscrowAccountsHistory>;
  GetActualPaymentsInput: GetActualPaymentsInput;
  GetAgenciesInput: GetAgenciesInput;
  GetAgencyContractInput: GetAgencyContractInput;
  GetAgencyContractSignatoriesInput: GetAgencyContractSignatoriesInput;
  GetAgencyContractsInput: GetAgencyContractsInput;
  GetAgencyInput: GetAgencyInput;
  GetClientContractInput: GetClientContractInput;
  GetClientContractsByIdsInput: GetClientContractsByIdsInput;
  GetClientContractsInput: GetClientContractsInput;
  GetClientInput: GetClientInput;
  GetClientsInput: GetClientsInput;
  GetEscrowAccountsHistoryByDduNumberInput: GetEscrowAccountsHistoryByDduNumberInput;
  GetEscrowAccountsHistoryInput: GetEscrowAccountsHistoryInput;
  GetObjectInput: GetObjectInput;
  GetRealEstateAgencyActInput: GetRealEstateAgencyActInput;
  GetRealEstateAgencyActsInput: GetRealEstateAgencyActsInput;
  GetRealEstateAgentInput: GetRealEstateAgentInput;
  GetRealEstateAgentsInput: GetRealEstateAgentsInput;
  GetRepresentativesByClientIdsInput: GetRepresentativesByClientIdsInput;
  GetScheduledPaymentsInput: GetScheduledPaymentsInput;
  GetTransferActInput: GetTransferActInput;
  GetTransferActsInput: GetTransferActsInput;
  IsDeleted: ResolverTypeWrapper<IsDeleted>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  MipAgencyContractPropertiesInput: MipAgencyContractPropertiesInput;
  Mutation: ResolverTypeWrapper<{}>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeDecimal: ResolverTypeWrapper<Scalars['NonNegativeDecimal']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  PositiveDecimal: ResolverTypeWrapper<Scalars['PositiveDecimal']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  Product: ResolverTypeWrapper<Product>;
  ProductCategory: ProductCategory;
  Query: ResolverTypeWrapper<{}>;
  RealEstateAgencyAct: ResolverTypeWrapper<RealEstateAgencyAct>;
  RealEstateAgencyActs: ResolverTypeWrapper<RealEstateAgencyActs>;
  RealEstateAgencyContractPropertiesInput: RealEstateAgencyContractPropertiesInput;
  RealEstateAgent: ResolverTypeWrapper<RealEstateAgent>;
  RealEstateAgents: ResolverTypeWrapper<RealEstateAgents>;
  Representative: ResolverTypeWrapper<Representative>;
  ScheduledPaymentType: ScheduledPaymentType;
  ScheduledPayments: ResolverTypeWrapper<ScheduledPayments>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TransferAct: ResolverTypeWrapper<TransferAct>;
  TransferActs: ResolverTypeWrapper<TransferActs>;
  UpdateAgencyContractInput: UpdateAgencyContractInput;
  UpdateAgencyContractPropertiesInput: UpdateAgencyContractPropertiesInput;
  UpdateBankInput: UpdateBankInput;
  UpdateClientContractInput: UpdateClientContractInput;
  UpdateClientContractPropertiesInput: UpdateClientContractPropertiesInput;
  UpdateClientInput: UpdateClientInput;
  UpdateClientPropertiesInput: UpdateClientPropertiesInput;
  UpdateRealEstateAgencyActInput: UpdateRealEstateAgencyActInput;
  UpdateRealEstateAgentInput: UpdateRealEstateAgentInput;
  UpdateRepresentativeInput: UpdateRepresentativeInput;
  UpdateSubsidyInput: UpdateSubsidyInput;
  UpdateTransferActInput: UpdateTransferActInput;
  UpdateUserInput: UpdateUserInput;
  UserRole: UserRole;
  _Any: ResolverTypeWrapper<Scalars['_Any']['output']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']['output']>;
  _Service: ResolverTypeWrapper<_Service>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActualPayments: ActualPayments;
  Agencies: Agencies;
  Agency: Agency;
  AgencyContract: AgencyContract;
  AgencyContractClientContract: AgencyContractClientContract;
  AgencyContractCommissionInput: AgencyContractCommissionInput;
  AgencyContractWithRealEstateAgencyProperties: AgencyContractWithRealEstateAgencyProperties;
  BasicActualPayment: BasicActualPayment;
  BasicAgency: BasicAgency;
  BasicAgencyContract: BasicAgencyContract;
  BasicAgencyContractCommission: BasicAgencyContractCommission;
  BasicAgencyContractSignatory: BasicAgencyContractSignatory;
  BasicBank: BasicBank;
  BasicClient: BasicClient;
  BasicClientContract: BasicClientContract;
  BasicClientContractToClient: BasicClientContractToClient;
  BasicClientEntityProperties: BasicClientEntityProperties;
  BasicClientIndividualMinorProperties: BasicClientIndividualMinorProperties;
  BasicClientIndividualProperties: BasicClientIndividualProperties;
  BasicClientPassport: BasicClientPassport;
  BasicDduClientContractProperties: BasicDduClientContractProperties;
  BasicDkpClientContractProperties: BasicDkpClientContractProperties;
  BasicEntity: BasicEntity;
  BasicEscrowAccountHistory: BasicEscrowAccountHistory;
  BasicMipAgencyContractProperties: BasicMipAgencyContractProperties;
  BasicObject: BasicObject;
  BasicOptionsInput: BasicOptionsInput;
  BasicProduct: BasicProduct;
  BasicRealEstateAgencyAct: BasicRealEstateAgencyAct;
  BasicRealEstateAgencyContractProperties: BasicRealEstateAgencyContractProperties;
  BasicRealEstateAgent: BasicRealEstateAgent;
  BasicRepresentative: BasicRepresentative;
  BasicScheduledPayment: BasicScheduledPayment;
  BasicSubsidy: BasicSubsidy;
  BasicTransferAct: BasicTransferAct;
  BasicUser: BasicUser;
  Boolean: Scalars['Boolean']['output'];
  CandidateType: CandidateType;
  Client: Client;
  ClientContract: ClientContract;
  ClientContractToClientInput: ClientContractToClientInput;
  ClientContractWithObject: ClientContractWithObject;
  ClientContracts: ClientContracts;
  ClientContractsWithTransactionAmount: ClientContractsWithTransactionAmount;
  ClientEntityPropertiesInput: ClientEntityPropertiesInput;
  ClientIndividualMinorPropertiesInput: ClientIndividualMinorPropertiesInput;
  ClientIndividualPropertiesInput: ClientIndividualPropertiesInput;
  ClientPassportPropertiesInput: ClientPassportPropertiesInput;
  Clients: Clients;
  CreateActualPaymentInput: CreateActualPaymentInput;
  CreateAgencyContractInput: CreateAgencyContractInput;
  CreateAgencyContractPropertiesInput: CreateAgencyContractPropertiesInput;
  CreateAgencyContractSignatoryInput: CreateAgencyContractSignatoryInput;
  CreateAgencyInput: CreateAgencyInput;
  CreateAssignmentInput: CreateAssignmentInput;
  CreateBankInput: CreateBankInput;
  CreateClientContractInput: CreateClientContractInput;
  CreateClientContractPropertiesInput: CreateClientContractPropertiesInput;
  CreateClientInput: CreateClientInput;
  CreateClientPropertiesInput: CreateClientPropertiesInput;
  CreateProductInput: CreateProductInput;
  CreateRealEstateAgencyActInput: CreateRealEstateAgencyActInput;
  CreateRealEstateAgentInput: CreateRealEstateAgentInput;
  CreateRepresentativeInput: CreateRepresentativeInput;
  CreateScheduledPaymentInput: CreateScheduledPaymentInput;
  CreateSubsidyInput: CreateSubsidyInput;
  CreateTransferActInput: CreateTransferActInput;
  CreateUserInput: CreateUserInput;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  DduClientContractPropertiesInput: DduClientContractPropertiesInput;
  Decimal: Scalars['Decimal']['output'];
  DeleteActualPaymentInput: DeleteActualPaymentInput;
  DeleteBankInput: DeleteBankInput;
  DeleteScheduledPaymentInput: DeleteScheduledPaymentInput;
  DeleteSubsidyInput: DeleteSubsidyInput;
  DeleteUserInput: DeleteUserInput;
  DkpClientContractPropertiesInput: DkpClientContractPropertiesInput;
  Entity: Entity;
  EscrowAccountHistoryInput: EscrowAccountHistoryInput;
  EscrowAccountsHistory: EscrowAccountsHistory;
  GetActualPaymentsInput: GetActualPaymentsInput;
  GetAgenciesInput: GetAgenciesInput;
  GetAgencyContractInput: GetAgencyContractInput;
  GetAgencyContractSignatoriesInput: GetAgencyContractSignatoriesInput;
  GetAgencyContractsInput: GetAgencyContractsInput;
  GetAgencyInput: GetAgencyInput;
  GetClientContractInput: GetClientContractInput;
  GetClientContractsByIdsInput: GetClientContractsByIdsInput;
  GetClientContractsInput: GetClientContractsInput;
  GetClientInput: GetClientInput;
  GetClientsInput: GetClientsInput;
  GetEscrowAccountsHistoryByDduNumberInput: GetEscrowAccountsHistoryByDduNumberInput;
  GetEscrowAccountsHistoryInput: GetEscrowAccountsHistoryInput;
  GetObjectInput: GetObjectInput;
  GetRealEstateAgencyActInput: GetRealEstateAgencyActInput;
  GetRealEstateAgencyActsInput: GetRealEstateAgencyActsInput;
  GetRealEstateAgentInput: GetRealEstateAgentInput;
  GetRealEstateAgentsInput: GetRealEstateAgentsInput;
  GetRepresentativesByClientIdsInput: GetRepresentativesByClientIdsInput;
  GetScheduledPaymentsInput: GetScheduledPaymentsInput;
  GetTransferActInput: GetTransferActInput;
  GetTransferActsInput: GetTransferActsInput;
  IsDeleted: IsDeleted;
  JSON: Scalars['JSON']['output'];
  MipAgencyContractPropertiesInput: MipAgencyContractPropertiesInput;
  Mutation: {};
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeDecimal: Scalars['NonNegativeDecimal']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  PositiveDecimal: Scalars['PositiveDecimal']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
  Product: Product;
  Query: {};
  RealEstateAgencyAct: RealEstateAgencyAct;
  RealEstateAgencyActs: RealEstateAgencyActs;
  RealEstateAgencyContractPropertiesInput: RealEstateAgencyContractPropertiesInput;
  RealEstateAgent: RealEstateAgent;
  RealEstateAgents: RealEstateAgents;
  Representative: Representative;
  ScheduledPayments: ScheduledPayments;
  String: Scalars['String']['output'];
  TransferAct: TransferAct;
  TransferActs: TransferActs;
  UpdateAgencyContractInput: UpdateAgencyContractInput;
  UpdateAgencyContractPropertiesInput: UpdateAgencyContractPropertiesInput;
  UpdateBankInput: UpdateBankInput;
  UpdateClientContractInput: UpdateClientContractInput;
  UpdateClientContractPropertiesInput: UpdateClientContractPropertiesInput;
  UpdateClientInput: UpdateClientInput;
  UpdateClientPropertiesInput: UpdateClientPropertiesInput;
  UpdateRealEstateAgencyActInput: UpdateRealEstateAgencyActInput;
  UpdateRealEstateAgentInput: UpdateRealEstateAgentInput;
  UpdateRepresentativeInput: UpdateRepresentativeInput;
  UpdateSubsidyInput: UpdateSubsidyInput;
  UpdateTransferActInput: UpdateTransferActInput;
  UpdateUserInput: UpdateUserInput;
  _Any: Scalars['_Any']['output'];
  _FieldSet: Scalars['_FieldSet']['output'];
  _Service: _Service;
};

export type ExtendsDirectiveArgs = { };

export type ExtendsDirectiveResolver<Result, Parent, ContextType = any, Args = ExtendsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExternalDirectiveArgs = {
  reason?: Maybe<Scalars['String']['input']>;
};

export type ExternalDirectiveResolver<Result, Parent, ContextType = any, Args = ExternalDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type KeyDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
  resolvable?: Maybe<Scalars['Boolean']['input']>;
};

export type KeyDirectiveResolver<Result, Parent, ContextType = any, Args = KeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProvidesDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type ProvidesDirectiveResolver<Result, Parent, ContextType = any, Args = ProvidesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RequiresDirectiveArgs = {
  fields: Scalars['_FieldSet']['input'];
};

export type RequiresDirectiveResolver<Result, Parent, ContextType = any, Args = RequiresDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TagDirectiveArgs = {
  name: Scalars['String']['input'];
};

export type TagDirectiveResolver<Result, Parent, ContextType = any, Args = TagDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ActualPaymentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActualPayments'] = ResolversParentTypes['ActualPayments']> = {
  actualPayments?: Resolver<Array<ResolversTypes['BasicActualPayment']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agencies'] = ResolversParentTypes['Agencies']> = {
  agencies?: Resolver<Array<ResolversTypes['BasicAgency']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agency'] = ResolversParentTypes['Agency']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agencyContracts?: Resolver<Maybe<Array<ResolversTypes['BasicAgencyContract']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgencyContract'] = ResolversParentTypes['AgencyContract']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agencyContractProperties?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType>;
  agencyContractSignatory?: Resolver<Maybe<ResolversTypes['BasicAgencyContractSignatory']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['BasicEntity'], ParentType, ContextType>;
  mipAgencyContractProperties?: Resolver<Maybe<ResolversTypes['BasicMipAgencyContractProperties']>, ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  realEstateAgencyContractProperties?: Resolver<Maybe<ResolversTypes['BasicRealEstateAgencyContractProperties']>, ParentType, ContextType>;
  responsibleUser?: Resolver<Maybe<ResolversTypes['BasicUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyContractClientContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgencyContractClientContract'] = ResolversParentTypes['AgencyContractClientContract']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agencyContract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType>;
  mipAgencyContractProperties?: Resolver<Maybe<ResolversTypes['BasicMipAgencyContractProperties']>, ParentType, ContextType>;
  realEstateAgencyContractProperties?: Resolver<Maybe<ResolversTypes['BasicRealEstateAgencyContractProperties']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyContractWithRealEstateAgencyPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgencyContractWithRealEstateAgencyProperties'] = ResolversParentTypes['AgencyContractWithRealEstateAgencyProperties']> = {
  agencyContract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType>;
  realEstateAgencyContractProperties?: Resolver<Maybe<ResolversTypes['BasicRealEstateAgencyContractProperties']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicActualPaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicActualPayment'] = ResolversParentTypes['BasicActualPayment']> = {
  clientContractId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgency'] = ResolversParentTypes['BasicAgency']> = {
  commonDbContractorsId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  inn?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgencyContract'] = ResolversParentTypes['BasicAgencyContract']> = {
  agencyContractType?: Resolver<ResolversTypes['AgencyContractType'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyContractCommissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgencyContractCommission'] = ResolversParentTypes['BasicAgencyContractCommission']> = {
  maxDays?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyContractSignatoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgencyContractSignatory'] = ResolversParentTypes['BasicAgencyContractSignatory']> = {
  basedOn?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicBankResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicBank'] = ResolversParentTypes['BasicBank']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClient'] = ResolversParentTypes['BasicClient']> = {
  address?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  clientCategory?: Resolver<ResolversTypes['ClientCategory'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  inn?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientContract'] = ResolversParentTypes['BasicClientContract']> = {
  clientContractType?: Resolver<ResolversTypes['ClientContractType'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  isRealEstateAgencyActDisabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['PositiveDecimal'], ParentType, ContextType>;
  registrationDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientContractToClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientContractToClient'] = ResolversParentTypes['BasicClientContractToClient']> = {
  client?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType>;
  isMain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  share?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientEntityPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientEntityProperties'] = ResolversParentTypes['BasicClientEntityProperties']> = {
  kpp?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientIndividualMinorPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientIndividualMinorProperties'] = ResolversParentTypes['BasicClientIndividualMinorProperties']> = {
  birthCertificate?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  clientPassport?: Resolver<Maybe<ResolversTypes['BasicClientPassport']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  representatives?: Resolver<Maybe<Array<ResolversTypes['BasicClient']>>, ParentType, ContextType>;
  snils?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientIndividualPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientIndividualProperties'] = ResolversParentTypes['BasicClientIndividualProperties']> = {
  clientPassport?: Resolver<Maybe<ResolversTypes['BasicClientPassport']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  snils?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientPassportResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientPassport'] = ResolversParentTypes['BasicClientPassport']> = {
  code?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  issued?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  registrationAddress?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicDduClientContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicDduClientContractProperties'] = ResolversParentTypes['BasicDduClientContractProperties']> = {
  dduLink?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  escrowAccountNumber?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  escrowAccountOpeningDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  escrowPeriod?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  isEscrowDiscount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  returnAccount?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicDkpClientContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicDkpClientContractProperties'] = ResolversParentTypes['BasicDkpClientContractProperties']> = {
  dkpLink?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicEntity'] = ResolversParentTypes['BasicEntity']> = {
  commonDbEntitiesId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicEscrowAccountHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicEscrowAccountHistory'] = ResolversParentTypes['BasicEscrowAccountHistory']> = {
  builderInn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  closingDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  dateOfTransaction?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  dduDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  dduNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  depositedAmount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  depositor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  depositorInn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expirationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  incomingBalance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  loanAgreementDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  loanAgreementNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openingDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  outgoingBalance?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['EscrowAccountStatus'], ParentType, ContextType>;
  transactionAmount?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicMipAgencyContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicMipAgencyContractProperties'] = ResolversParentTypes['BasicMipAgencyContractProperties']> = {
  agencyContractCommission?: Resolver<ResolversTypes['BasicAgencyContractCommission'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicObject'] = ResolversParentTypes['BasicObject']> = {
  commonDbObjectsId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicProduct'] = ResolversParentTypes['BasicProduct']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  pricingProductsId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  productCategory?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicRealEstateAgencyActResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicRealEstateAgencyAct'] = ResolversParentTypes['BasicRealEstateAgencyAct']> = {
  amount?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  retention?: Resolver<Maybe<ResolversTypes['NonNegativeDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicRealEstateAgencyContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicRealEstateAgencyContractProperties'] = ResolversParentTypes['BasicRealEstateAgencyContractProperties']> = {
  agencyContractCommission?: Resolver<ResolversTypes['BasicAgencyContractCommission'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicRealEstateAgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicRealEstateAgent'] = ResolversParentTypes['BasicRealEstateAgent']> = {
  fullName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  oneGtId?: Resolver<Maybe<ResolversTypes['PositiveInt']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicRepresentativeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicRepresentative'] = ResolversParentTypes['BasicRepresentative']> = {
  attorneyDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  attorneyNumber?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  authorizedBy?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  authorizedRole?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicScheduledPaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicScheduledPayment'] = ResolversParentTypes['BasicScheduledPayment']> = {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['PositiveDecimal'], ParentType, ContextType>;
  scheduledPaymentType?: Resolver<ResolversTypes['ScheduledPaymentType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicSubsidyResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicSubsidy'] = ResolversParentTypes['BasicSubsidy']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  isVisible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicTransferActResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicTransferAct'] = ResolversParentTypes['BasicTransferAct']> = {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicUser'] = ResolversParentTypes['BasicUser']> = {
  email?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  isManager?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isStaff?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  userRole?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CandidateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CandidateType'] = ResolversParentTypes['CandidateType']> = {
  agencyContractId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  agencyContractMaxDays?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  agencyContractNumber?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  agencyContractPercent?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  agencyContractThreshold?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  agencyId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  agencyName?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  clientContractId?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  clientContractNumber?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  clientContractPrice?: Resolver<ResolversTypes['PositiveDecimal'], ParentType, ContextType>;
  clientContractType?: Resolver<ResolversTypes['ClientContractType'], ParentType, ContextType>;
  daysElapsed?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  mostRecentTransactionDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  payAmount?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  paymentPercentage?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  transactionAmount?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  clientEntityProperties?: Resolver<Maybe<ResolversTypes['BasicClientEntityProperties']>, ParentType, ContextType>;
  clientIndividualMinorProperties?: Resolver<Maybe<ResolversTypes['BasicClientIndividualMinorProperties']>, ParentType, ContextType>;
  clientIndividualProperties?: Resolver<Maybe<ResolversTypes['BasicClientIndividualProperties']>, ParentType, ContextType>;
  clientProperties?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType>;
  representatives?: Resolver<Maybe<Array<ResolversTypes['BasicRepresentative']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContract'] = ResolversParentTypes['ClientContract']> = {
  agencyContracts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AgencyContractClientContract']>>>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['BasicBank']>, ParentType, ContextType>;
  clientContractProperties?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType>;
  clients?: Resolver<Array<ResolversTypes['BasicClientContractToClient']>, ParentType, ContextType>;
  dduClientContractProperties?: Resolver<Maybe<ResolversTypes['BasicDduClientContractProperties']>, ParentType, ContextType>;
  dkpClientContractProperties?: Resolver<Maybe<ResolversTypes['BasicDkpClientContractProperties']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['BasicUser']>, ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  realEstateAgent?: Resolver<Maybe<ResolversTypes['BasicRealEstateAgent']>, ParentType, ContextType>;
  subsidy?: Resolver<Maybe<ResolversTypes['BasicSubsidy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContractWithObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContractWithObject'] = ResolversParentTypes['ClientContractWithObject']> = {
  clientContract?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContractsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContracts'] = ResolversParentTypes['ClientContracts']> = {
  clientContracts?: Resolver<Array<ResolversTypes['ClientContract']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContractsWithTransactionAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContractsWithTransactionAmount'] = ResolversParentTypes['ClientContractsWithTransactionAmount']> = {
  clientContract?: Resolver<ResolversTypes['ClientContract'], ParentType, ContextType>;
  transactionAmount?: Resolver<ResolversTypes['PositiveDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clients'] = ResolversParentTypes['Clients']> = {
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type EntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = {
  entity?: Resolver<ResolversTypes['BasicEntity'], ParentType, ContextType>;
  objects?: Resolver<Array<ResolversTypes['BasicObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EscrowAccountsHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['EscrowAccountsHistory'] = ResolversParentTypes['EscrowAccountsHistory']> = {
  escrowAccountsHistory?: Resolver<Array<ResolversTypes['BasicEscrowAccountHistory']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IsDeletedResolvers<ContextType = any, ParentType extends ResolversParentTypes['IsDeleted'] = ResolversParentTypes['IsDeleted']> = {
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActualPayment?: Resolver<ResolversTypes['BasicActualPayment'], ParentType, ContextType, RequireFields<MutationCreateActualPaymentArgs, 'input'>>;
  createActualPayments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateActualPaymentsArgs, 'input'>>;
  createAgency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType, RequireFields<MutationCreateAgencyArgs, 'input'>>;
  createAgencyContract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType, RequireFields<MutationCreateAgencyContractArgs, 'input'>>;
  createAgencyContractSignatory?: Resolver<ResolversTypes['BasicAgencyContractSignatory'], ParentType, ContextType, RequireFields<MutationCreateAgencyContractSignatoryArgs, 'input'>>;
  createAssignment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateAssignmentArgs, 'input'>>;
  createBank?: Resolver<ResolversTypes['BasicBank'], ParentType, ContextType, RequireFields<MutationCreateBankArgs, 'input'>>;
  createClient?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  createClientContract?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType, RequireFields<MutationCreateClientContractArgs, 'input'>>;
  createEscrowAccountsHistory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateEscrowAccountsHistoryArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createRealEstateAgencyAct?: Resolver<ResolversTypes['BasicRealEstateAgencyAct'], ParentType, ContextType, RequireFields<MutationCreateRealEstateAgencyActArgs, 'input'>>;
  createRealEstateAgent?: Resolver<ResolversTypes['BasicRealEstateAgent'], ParentType, ContextType, RequireFields<MutationCreateRealEstateAgentArgs, 'input'>>;
  createRepresentative?: Resolver<ResolversTypes['BasicRepresentative'], ParentType, ContextType, RequireFields<MutationCreateRepresentativeArgs, 'input'>>;
  createScheduledPayment?: Resolver<ResolversTypes['BasicScheduledPayment'], ParentType, ContextType, RequireFields<MutationCreateScheduledPaymentArgs, 'input'>>;
  createScheduledPayments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateScheduledPaymentsArgs, 'input'>>;
  createStaff?: Resolver<ResolversTypes['BasicUser'], ParentType, ContextType, RequireFields<MutationCreateStaffArgs, 'input'>>;
  createSubsidy?: Resolver<ResolversTypes['BasicSubsidy'], ParentType, ContextType, RequireFields<MutationCreateSubsidyArgs, 'input'>>;
  createTransferAct?: Resolver<ResolversTypes['BasicTransferAct'], ParentType, ContextType, RequireFields<MutationCreateTransferActArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['BasicUser'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteActualPayment?: Resolver<ResolversTypes['IsDeleted'], ParentType, ContextType, RequireFields<MutationDeleteActualPaymentArgs, 'input'>>;
  deleteBank?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBankArgs, 'input'>>;
  deleteScheduledPayment?: Resolver<ResolversTypes['IsDeleted'], ParentType, ContextType, RequireFields<MutationDeleteScheduledPaymentArgs, 'input'>>;
  deleteSubsidy?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteSubsidyArgs, 'input'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  updateAgencyContract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType, RequireFields<MutationUpdateAgencyContractArgs, 'input'>>;
  updateBank?: Resolver<ResolversTypes['BasicBank'], ParentType, ContextType, RequireFields<MutationUpdateBankArgs, 'input'>>;
  updateClient?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType, RequireFields<MutationUpdateClientArgs, 'input'>>;
  updateClientContract?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType, RequireFields<MutationUpdateClientContractArgs, 'input'>>;
  updateRealEstateAgencyAct?: Resolver<ResolversTypes['BasicRealEstateAgencyAct'], ParentType, ContextType, RequireFields<MutationUpdateRealEstateAgencyActArgs, 'input'>>;
  updateRealEstateAgent?: Resolver<ResolversTypes['BasicRealEstateAgent'], ParentType, ContextType, RequireFields<MutationUpdateRealEstateAgentArgs, 'input'>>;
  updateRepresentative?: Resolver<ResolversTypes['BasicRepresentative'], ParentType, ContextType, RequireFields<MutationUpdateRepresentativeArgs, 'input'>>;
  updateSubsidy?: Resolver<ResolversTypes['BasicSubsidy'], ParentType, ContextType, RequireFields<MutationUpdateSubsidyArgs, 'input'>>;
  updateTransferAct?: Resolver<ResolversTypes['BasicTransferAct'], ParentType, ContextType, RequireFields<MutationUpdateTransferActArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['BasicUser'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
};

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeDecimal'], any> {
  name: 'NonNegativeDecimal';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface PositiveDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveDecimal'], any> {
  name: 'PositiveDecimal';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['BasicProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  getActualPayments?: Resolver<ResolversTypes['ActualPayments'], ParentType, ContextType, RequireFields<QueryGetActualPaymentsArgs, 'input'>>;
  getAgencies?: Resolver<ResolversTypes['Agencies'], ParentType, ContextType, Partial<QueryGetAgenciesArgs>>;
  getAgency?: Resolver<ResolversTypes['Agency'], ParentType, ContextType, RequireFields<QueryGetAgencyArgs, 'input'>>;
  getAgencyContract?: Resolver<ResolversTypes['AgencyContract'], ParentType, ContextType, RequireFields<QueryGetAgencyContractArgs, 'input'>>;
  getAgencyContractSignatories?: Resolver<Array<ResolversTypes['BasicAgencyContractSignatory']>, ParentType, ContextType, RequireFields<QueryGetAgencyContractSignatoriesArgs, 'input'>>;
  getAgencyContracts?: Resolver<Array<ResolversTypes['AgencyContract']>, ParentType, ContextType, RequireFields<QueryGetAgencyContractsArgs, 'input'>>;
  getBanks?: Resolver<Array<ResolversTypes['BasicBank']>, ParentType, ContextType>;
  getClient?: Resolver<ResolversTypes['Client'], ParentType, ContextType, RequireFields<QueryGetClientArgs, 'input'>>;
  getClientContract?: Resolver<ResolversTypes['ClientContract'], ParentType, ContextType, RequireFields<QueryGetClientContractArgs, 'input'>>;
  getClientContracts?: Resolver<ResolversTypes['ClientContracts'], ParentType, ContextType, Partial<QueryGetClientContractsArgs>>;
  getClientContractsByIds?: Resolver<ResolversTypes['ClientContracts'], ParentType, ContextType, RequireFields<QueryGetClientContractsByIdsArgs, 'input'>>;
  getClientContractsWithoutTransferAct?: Resolver<ResolversTypes['ClientContracts'], ParentType, ContextType, Partial<QueryGetClientContractsWithoutTransferActArgs>>;
  getClients?: Resolver<ResolversTypes['Clients'], ParentType, ContextType, Partial<QueryGetClientsArgs>>;
  getEntities?: Resolver<Array<ResolversTypes['Entity']>, ParentType, ContextType>;
  getEscrowAccountsHistory?: Resolver<ResolversTypes['EscrowAccountsHistory'], ParentType, ContextType, Partial<QueryGetEscrowAccountsHistoryArgs>>;
  getEscrowAccountsHistoryByDduNumber?: Resolver<Array<ResolversTypes['BasicEscrowAccountHistory']>, ParentType, ContextType, RequireFields<QueryGetEscrowAccountsHistoryByDduNumberArgs, 'input'>>;
  getObject?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType, RequireFields<QueryGetObjectArgs, 'input'>>;
  getObjects?: Resolver<Array<ResolversTypes['BasicObject']>, ParentType, ContextType>;
  getRealEstateAgencyAct?: Resolver<ResolversTypes['RealEstateAgencyAct'], ParentType, ContextType, RequireFields<QueryGetRealEstateAgencyActArgs, 'input'>>;
  getRealEstateAgencyActCandidates?: Resolver<Array<ResolversTypes['CandidateType']>, ParentType, ContextType>;
  getRealEstateAgencyActs?: Resolver<ResolversTypes['RealEstateAgencyActs'], ParentType, ContextType, Partial<QueryGetRealEstateAgencyActsArgs>>;
  getRealEstateAgent?: Resolver<ResolversTypes['RealEstateAgent'], ParentType, ContextType, RequireFields<QueryGetRealEstateAgentArgs, 'input'>>;
  getRealEstateAgents?: Resolver<ResolversTypes['RealEstateAgents'], ParentType, ContextType, Partial<QueryGetRealEstateAgentsArgs>>;
  getRepresentativesByClientIds?: Resolver<Array<ResolversTypes['Representative']>, ParentType, ContextType, RequireFields<QueryGetRepresentativesByClientIdsArgs, 'input'>>;
  getScheduledPayments?: Resolver<ResolversTypes['ScheduledPayments'], ParentType, ContextType, RequireFields<QueryGetScheduledPaymentsArgs, 'input'>>;
  getSubsidies?: Resolver<Array<ResolversTypes['BasicSubsidy']>, ParentType, ContextType>;
  getTransferAct?: Resolver<ResolversTypes['TransferAct'], ParentType, ContextType, RequireFields<QueryGetTransferActArgs, 'input'>>;
  getTransferActs?: Resolver<ResolversTypes['TransferActs'], ParentType, ContextType, RequireFields<QueryGetTransferActsArgs, 'input'>>;
  getUsers?: Resolver<Array<ResolversTypes['BasicUser']>, ParentType, ContextType>;
};

export type RealEstateAgencyActResolvers<ContextType = any, ParentType extends ResolversParentTypes['RealEstateAgencyAct'] = ResolversParentTypes['RealEstateAgencyAct']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agencyContract?: Resolver<ResolversTypes['AgencyContractWithRealEstateAgencyProperties'], ParentType, ContextType>;
  clientContract?: Resolver<ResolversTypes['ClientContractWithObject'], ParentType, ContextType>;
  realEstateAgencyAct?: Resolver<ResolversTypes['BasicRealEstateAgencyAct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RealEstateAgencyActsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RealEstateAgencyActs'] = ResolversParentTypes['RealEstateAgencyActs']> = {
  realEstateAgencyActs?: Resolver<Array<ResolversTypes['RealEstateAgencyAct']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RealEstateAgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['RealEstateAgent'] = ResolversParentTypes['RealEstateAgent']> = {
  agencies?: Resolver<Array<ResolversTypes['BasicAgency']>, ParentType, ContextType>;
  realEstateAgent?: Resolver<ResolversTypes['BasicRealEstateAgent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RealEstateAgentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RealEstateAgents'] = ResolversParentTypes['RealEstateAgents']> = {
  realEstateAgents?: Resolver<Array<ResolversTypes['RealEstateAgent']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepresentativeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Representative'] = ResolversParentTypes['Representative']> = {
  client?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType>;
  representative?: Resolver<ResolversTypes['BasicRepresentative'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledPaymentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledPayments'] = ResolversParentTypes['ScheduledPayments']> = {
  scheduledPayments?: Resolver<Array<ResolversTypes['BasicScheduledPayment']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferActResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferAct'] = ResolversParentTypes['TransferAct']> = {
  clientContract?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType>;
  clients?: Resolver<Maybe<Array<ResolversTypes['BasicClient']>>, ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['BasicProduct'], ParentType, ContextType>;
  representatives?: Resolver<Maybe<Array<ResolversTypes['Representative']>>, ParentType, ContextType>;
  transferAct?: Resolver<ResolversTypes['BasicTransferAct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferActsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferActs'] = ResolversParentTypes['TransferActs']> = {
  totalCount?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  transferActs?: Resolver<Array<ResolversTypes['TransferAct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface _AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_Any'], any> {
  name: '_Any';
}

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export type _ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Service'] = ResolversParentTypes['_Service']> = {
  sdl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ActualPayments?: ActualPaymentsResolvers<ContextType>;
  Agencies?: AgenciesResolvers<ContextType>;
  Agency?: AgencyResolvers<ContextType>;
  AgencyContract?: AgencyContractResolvers<ContextType>;
  AgencyContractClientContract?: AgencyContractClientContractResolvers<ContextType>;
  AgencyContractWithRealEstateAgencyProperties?: AgencyContractWithRealEstateAgencyPropertiesResolvers<ContextType>;
  BasicActualPayment?: BasicActualPaymentResolvers<ContextType>;
  BasicAgency?: BasicAgencyResolvers<ContextType>;
  BasicAgencyContract?: BasicAgencyContractResolvers<ContextType>;
  BasicAgencyContractCommission?: BasicAgencyContractCommissionResolvers<ContextType>;
  BasicAgencyContractSignatory?: BasicAgencyContractSignatoryResolvers<ContextType>;
  BasicBank?: BasicBankResolvers<ContextType>;
  BasicClient?: BasicClientResolvers<ContextType>;
  BasicClientContract?: BasicClientContractResolvers<ContextType>;
  BasicClientContractToClient?: BasicClientContractToClientResolvers<ContextType>;
  BasicClientEntityProperties?: BasicClientEntityPropertiesResolvers<ContextType>;
  BasicClientIndividualMinorProperties?: BasicClientIndividualMinorPropertiesResolvers<ContextType>;
  BasicClientIndividualProperties?: BasicClientIndividualPropertiesResolvers<ContextType>;
  BasicClientPassport?: BasicClientPassportResolvers<ContextType>;
  BasicDduClientContractProperties?: BasicDduClientContractPropertiesResolvers<ContextType>;
  BasicDkpClientContractProperties?: BasicDkpClientContractPropertiesResolvers<ContextType>;
  BasicEntity?: BasicEntityResolvers<ContextType>;
  BasicEscrowAccountHistory?: BasicEscrowAccountHistoryResolvers<ContextType>;
  BasicMipAgencyContractProperties?: BasicMipAgencyContractPropertiesResolvers<ContextType>;
  BasicObject?: BasicObjectResolvers<ContextType>;
  BasicProduct?: BasicProductResolvers<ContextType>;
  BasicRealEstateAgencyAct?: BasicRealEstateAgencyActResolvers<ContextType>;
  BasicRealEstateAgencyContractProperties?: BasicRealEstateAgencyContractPropertiesResolvers<ContextType>;
  BasicRealEstateAgent?: BasicRealEstateAgentResolvers<ContextType>;
  BasicRepresentative?: BasicRepresentativeResolvers<ContextType>;
  BasicScheduledPayment?: BasicScheduledPaymentResolvers<ContextType>;
  BasicSubsidy?: BasicSubsidyResolvers<ContextType>;
  BasicTransferAct?: BasicTransferActResolvers<ContextType>;
  BasicUser?: BasicUserResolvers<ContextType>;
  CandidateType?: CandidateTypeResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientContract?: ClientContractResolvers<ContextType>;
  ClientContractWithObject?: ClientContractWithObjectResolvers<ContextType>;
  ClientContracts?: ClientContractsResolvers<ContextType>;
  ClientContractsWithTransactionAmount?: ClientContractsWithTransactionAmountResolvers<ContextType>;
  Clients?: ClientsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Entity?: EntityResolvers<ContextType>;
  EscrowAccountsHistory?: EscrowAccountsHistoryResolvers<ContextType>;
  IsDeleted?: IsDeletedResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeDecimal?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  PositiveDecimal?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RealEstateAgencyAct?: RealEstateAgencyActResolvers<ContextType>;
  RealEstateAgencyActs?: RealEstateAgencyActsResolvers<ContextType>;
  RealEstateAgent?: RealEstateAgentResolvers<ContextType>;
  RealEstateAgents?: RealEstateAgentsResolvers<ContextType>;
  Representative?: RepresentativeResolvers<ContextType>;
  ScheduledPayments?: ScheduledPaymentsResolvers<ContextType>;
  TransferAct?: TransferActResolvers<ContextType>;
  TransferActs?: TransferActsResolvers<ContextType>;
  _Any?: GraphQLScalarType;
  _FieldSet?: GraphQLScalarType;
  _Service?: _ServiceResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  extends?: ExtendsDirectiveResolver<any, any, ContextType>;
  external?: ExternalDirectiveResolver<any, any, ContextType>;
  key?: KeyDirectiveResolver<any, any, ContextType>;
  provides?: ProvidesDirectiveResolver<any, any, ContextType>;
  requires?: RequiresDirectiveResolver<any, any, ContextType>;
  tag?: TagDirectiveResolver<any, any, ContextType>;
};
