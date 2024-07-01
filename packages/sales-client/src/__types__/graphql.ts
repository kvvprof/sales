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
  actual_payments: Array<BasicActualPayment>;
  total_count: Scalars['NonNegativeInt']['output'];
};

export type Agencies = {
  __typename?: 'Agencies';
  agencies: Array<BasicAgency>;
  total_count: Scalars['NonNegativeInt']['output'];
};

export type Agency = {
  __typename?: 'Agency';
  agency: BasicAgency;
  agency_contracts?: Maybe<Array<BasicAgencyContract>>;
};

export type AgencyContract = {
  __typename?: 'AgencyContract';
  agency: BasicAgency;
  agency_contract_properties: BasicAgencyContract;
  agency_contract_signatory?: Maybe<BasicAgencyContractSignatory>;
  entity: BasicEntity;
  mip_agency_contract_properties?: Maybe<BasicMipAgencyContractProperties>;
  object: BasicObject;
  real_estate_agency_contract_properties?: Maybe<BasicRealEstateAgencyContractProperties>;
  responsible_user?: Maybe<BasicUser>;
};

export type AgencyContractClientContract = {
  __typename?: 'AgencyContractClientContract';
  agency: BasicAgency;
  agency_contract: BasicAgencyContract;
};

export type AgencyContractCommissionInput = {
  max_days: Scalars['NonNegativeInt']['input'];
  percent: Scalars['NonNegativeDecimal']['input'];
  threshold: Scalars['NonNegativeDecimal']['input'];
};

export enum AgencyContractType {
  MipAgencyContract = 'MIP_AGENCY_CONTRACT',
  RealEstateAgencyContract = 'REAL_ESTATE_AGENCY_CONTRACT'
}

export type BaseOptionsInput = {
  limit?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  prefix?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type BasicActualPayment = {
  __typename?: 'BasicActualPayment';
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  payment: Scalars['Decimal']['output'];
};

export type BasicAgency = {
  __typename?: 'BasicAgency';
  common_db_contractors_id: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['NonEmptyString']['output']>;
  name: Scalars['NonEmptyString']['output'];
};

export type BasicAgencyContract = {
  __typename?: 'BasicAgencyContract';
  agency_contract_type: AgencyContractType;
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  number: Scalars['NonEmptyString']['output'];
};

export type BasicAgencyContractCommission = {
  __typename?: 'BasicAgencyContractCommission';
  max_days: Scalars['NonNegativeInt']['output'];
  percent: Scalars['NonNegativeDecimal']['output'];
  threshold: Scalars['NonNegativeDecimal']['output'];
};

export type BasicAgencyContractSignatory = {
  __typename?: 'BasicAgencyContractSignatory';
  based_on: Scalars['NonEmptyString']['output'];
  email: Scalars['NonEmptyString']['output'];
  full_name: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  phone: Scalars['NonEmptyString']['output'];
  title: Scalars['NonEmptyString']['output'];
};

export type BasicBank = {
  __typename?: 'BasicBank';
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
};

export type BasicClient = {
  __typename?: 'BasicClient';
  address?: Maybe<Scalars['NonEmptyString']['output']>;
  client_category: ClientCategory;
  email?: Maybe<Scalars['NonEmptyString']['output']>;
  full_name: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['NonEmptyString']['output']>;
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientContract = {
  __typename?: 'BasicClientContract';
  client_contract_type: ClientContractType;
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  number: Scalars['NonEmptyString']['output'];
  price: Scalars['PositiveDecimal']['output'];
  registration_date?: Maybe<Scalars['Date']['output']>;
};

export type BasicClientContractToClient = {
  __typename?: 'BasicClientContractToClient';
  client: BasicClient;
  is_main: Scalars['Boolean']['output'];
  share: Scalars['NonNegativeInt']['output'];
};

export type BasicClientEntityProperties = {
  __typename?: 'BasicClientEntityProperties';
  kpp?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientIndividualMinorProperties = {
  __typename?: 'BasicClientIndividualMinorProperties';
  birth_certificate?: Maybe<Scalars['NonEmptyString']['output']>;
  client_passport?: Maybe<BasicClientPassport>;
  dob?: Maybe<Scalars['Date']['output']>;
  representatives?: Maybe<Array<BasicClient>>;
  snils?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientIndividualProperties = {
  __typename?: 'BasicClientIndividualProperties';
  client_passport?: Maybe<BasicClientPassport>;
  dob?: Maybe<Scalars['Date']['output']>;
  snils?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicClientPassport = {
  __typename?: 'BasicClientPassport';
  code?: Maybe<Scalars['NonEmptyString']['output']>;
  issued?: Maybe<Scalars['NonEmptyString']['output']>;
  number?: Maybe<Scalars['NonEmptyString']['output']>;
  place_of_birth?: Maybe<Scalars['NonEmptyString']['output']>;
  registration_address?: Maybe<Scalars['NonEmptyString']['output']>;
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
  correspondent_number?: Maybe<Scalars['String']['output']>;
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
};

export type BasicCommonContractor = {
  __typename?: 'BasicCommonContractor';
  actual_address?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Scalars['String']['output']>;
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  kpp?: Maybe<Scalars['String']['output']>;
  legal_address?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ogrn?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  propogated_at?: Maybe<Scalars['DateTime']['output']>;
  reconciliation_link?: Maybe<Scalars['String']['output']>;
  short_name?: Maybe<Scalars['String']['output']>;
};

export type BasicCommonEntity = {
  __typename?: 'BasicCommonEntity';
  db_name: Scalars['String']['output'];
  display_name: Scalars['String']['output'];
  id: Scalars['PositiveInt']['output'];
  inn: Scalars['String']['output'];
  kpp: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ogrn: Scalars['String']['output'];
  short_name: Scalars['String']['output'];
  str_id: Scalars['String']['output'];
};

export type BasicDduClientContractProperties = {
  __typename?: 'BasicDDUClientContractProperties';
  ddu_link?: Maybe<Scalars['NonEmptyString']['output']>;
  escrow_account_number?: Maybe<Scalars['NonEmptyString']['output']>;
  escrow_account_opening_date?: Maybe<Scalars['Date']['output']>;
  escrow_period?: Maybe<Scalars['Date']['output']>;
  id: Scalars['PositiveInt']['output'];
  is_escrow_discount?: Maybe<Scalars['Boolean']['output']>;
  return_account?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicEntity = {
  __typename?: 'BasicEntity';
  common_db_entities_id: Scalars['PositiveInt']['output'];
  id: Scalars['PositiveInt']['output'];
  name: Scalars['NonEmptyString']['output'];
  website?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicMipAgencyContractProperties = {
  __typename?: 'BasicMIPAgencyContractProperties';
  agency_contract_commission: BasicAgencyContractCommission;
};

export type BasicObject = {
  __typename?: 'BasicObject';
  common_db_objects_id: Scalars['PositiveInt']['output'];
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
  one_gt_id?: Maybe<Scalars['PositiveInt']['output']>;
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
  pricing_products_id: Scalars['PositiveInt']['output'];
  product_category: ProductCategory;
};

export type BasicRealEstateAgencyContractProperties = {
  __typename?: 'BasicRealEstateAgencyContractProperties';
  agency_contract_commission: BasicAgencyContractCommission;
};

export type BasicRealEstateAgent = {
  __typename?: 'BasicRealEstateAgent';
  full_name: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
};

export type BasicScheduledPayment = {
  __typename?: 'BasicScheduledPayment';
  date: Scalars['Date']['output'];
  id: Scalars['PositiveInt']['output'];
  payment: Scalars['PositiveDecimal']['output'];
  scheduled_payment_type: ScheduledPaymentType;
};

export type BasicUser = {
  __typename?: 'BasicUser';
  email: Scalars['NonEmptyString']['output'];
  full_name: Scalars['NonEmptyString']['output'];
  id: Scalars['PositiveInt']['output'];
  is_manager: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['NonEmptyString']['output']>;
  user_role: UserRole;
};

export type Client = {
  __typename?: 'Client';
  client_entity_properties?: Maybe<BasicClientEntityProperties>;
  client_individual_minor_properties?: Maybe<BasicClientIndividualMinorProperties>;
  client_individual_properties?: Maybe<BasicClientIndividualProperties>;
  client_properties: BasicClient;
};

export enum ClientCategory {
  Entity = 'ENTITY',
  Individual = 'INDIVIDUAL',
  IndividualMinor = 'INDIVIDUAL_MINOR'
}

export type ClientContract = {
  __typename?: 'ClientContract';
  agency_contracts?: Maybe<Array<Maybe<AgencyContractClientContract>>>;
  bank?: Maybe<BasicBank>;
  client_contract_properties: BasicClientContract;
  clients: Array<BasicClientContractToClient>;
  ddu_client_contract_properties?: Maybe<BasicDduClientContractProperties>;
  manager?: Maybe<BasicUser>;
  object: BasicObject;
  product: Product;
  real_estate_agent?: Maybe<BasicRealEstateAgent>;
};

export type ClientContractToClientInput = {
  client_id: Scalars['PositiveInt']['input'];
  is_main: Scalars['Boolean']['input'];
  share: Scalars['NonNegativeInt']['input'];
};

export enum ClientContractType {
  Ddu = 'DDU',
  Dkp = 'DKP'
}

export type ClientContracts = {
  __typename?: 'ClientContracts';
  client_contracts: Array<ClientContract>;
  total_count: Scalars['NonNegativeInt']['output'];
};

export type ClientEntityPropertiesInput = {
  kpp?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ClientIndividualMinorPropertiesInput = {
  birth_certificate?: InputMaybe<Scalars['NonEmptyString']['input']>;
  client_passport?: InputMaybe<ClientPassportPropertiesInput>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  representative_ids?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  snils?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ClientIndividualPropertiesInput = {
  client_passport?: InputMaybe<ClientPassportPropertiesInput>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  snils?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type ClientPassportPropertiesInput = {
  code?: InputMaybe<Scalars['NonEmptyString']['input']>;
  issued?: InputMaybe<Scalars['NonEmptyString']['input']>;
  number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  place_of_birth?: InputMaybe<Scalars['NonEmptyString']['input']>;
  registration_address?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type Clients = {
  __typename?: 'Clients';
  clients: Array<Client>;
  total_count: Scalars['NonNegativeInt']['output'];
};

export type CommonContractor = {
  __typename?: 'CommonContractor';
  accounts?: Maybe<Array<BasicCommonAccount>>;
  contractor: BasicCommonContractor;
};

export type CommonContractors = {
  __typename?: 'CommonContractors';
  contractors: Array<CommonContractor>;
  total_count: Scalars['PositiveInt']['output'];
};

export type CommonEntities = {
  __typename?: 'CommonEntities';
  entities: Array<BasicCommonEntity>;
  total_count: Scalars['PositiveInt']['output'];
};

export type CreateActualPaymentInput = {
  client_contract_id: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  payment: Scalars['Decimal']['input'];
};

export type CreateAgencyContractInput = {
  agency_contract_properties: CreateAgencyContractPropertiesInput;
  mip_agency_contract_properties?: InputMaybe<MipAgencyContractPropertiesInput>;
  real_estate_agency_contract_properties?: InputMaybe<RealEstateAgencyContractPropertiesInput>;
};

export type CreateAgencyContractPropertiesInput = {
  agency_contract_signatory_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  agency_contract_type: AgencyContractType;
  agency_id: Scalars['PositiveInt']['input'];
  entity_id: Scalars['PositiveInt']['input'];
  object_id: Scalars['PositiveInt']['input'];
  responsible_user_id: Scalars['PositiveInt']['input'];
};

export type CreateAgencyContractSignatoryInput = {
  agency_id: Scalars['PositiveInt']['input'];
  based_on: Scalars['NonEmptyString']['input'];
  email: Scalars['NonEmptyString']['input'];
  full_name: Scalars['NonEmptyString']['input'];
  phone: Scalars['NonEmptyString']['input'];
  title: Scalars['NonEmptyString']['input'];
};

export type CreateAgencyInput = {
  common_db_contractors_id: Scalars['PositiveInt']['input'];
  inn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  name: Scalars['NonEmptyString']['input'];
};

export type CreateClientContractInput = {
  client_contract_properties: CreateClientContractPropertiesInput;
  ddu_client_contract_properties?: InputMaybe<DduClientContractPropertiesInput>;
};

export type CreateClientContractPropertiesInput = {
  agency_contract_ids?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  bank_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  client_contract_type: ClientContractType;
  clients: Array<ClientContractToClientInput>;
  date: Scalars['Date']['input'];
  manager_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  number: Scalars['NonEmptyString']['input'];
  price: Scalars['PositiveDecimal']['input'];
  product_id: Scalars['PositiveInt']['input'];
  real_estate_agent_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  registration_date?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateClientInput = {
  client_entity_properties?: InputMaybe<ClientEntityPropertiesInput>;
  client_individual_minor_properties?: InputMaybe<ClientIndividualMinorPropertiesInput>;
  client_individual_properties?: InputMaybe<ClientIndividualPropertiesInput>;
  client_properties: CreateClientPropertiesInput;
};

export type CreateClientPropertiesInput = {
  address?: InputMaybe<Scalars['NonEmptyString']['input']>;
  client_category: ClientCategory;
  email?: InputMaybe<Scalars['NonEmptyString']['input']>;
  full_name: Scalars['NonEmptyString']['input'];
  inn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type CreateProductInput = {
  number: Scalars['NonEmptyString']['input'];
  object_id: Scalars['PositiveInt']['input'];
  pricing_products_id: Scalars['PositiveInt']['input'];
  product_category: ProductCategory;
};

export type CreateRealEstateAgentInput = {
  agency_ids: Array<Scalars['PositiveInt']['input']>;
  full_name: Scalars['NonEmptyString']['input'];
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type CreateScheduledPaymentInput = {
  client_contract_id: Scalars['PositiveInt']['input'];
  date: Scalars['Date']['input'];
  payment: Scalars['PositiveDecimal']['input'];
  scheduled_payment_type: ScheduledPaymentType;
};

export type CreateUserInput = {
  email: Scalars['NonEmptyString']['input'];
  full_name: Scalars['NonEmptyString']['input'];
  is_manager: Scalars['Boolean']['input'];
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
  user_role: UserRole;
};

export type DduClientContractPropertiesInput = {
  ddu_link?: InputMaybe<Scalars['NonEmptyString']['input']>;
  escrow_account_number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  escrow_account_opening_date?: InputMaybe<Scalars['Date']['input']>;
  escrow_period?: InputMaybe<Scalars['Date']['input']>;
  is_escrow_discount?: InputMaybe<Scalars['Boolean']['input']>;
  return_account?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type Entity = {
  __typename?: 'Entity';
  entity: BasicEntity;
  objects: Array<BasicObject>;
};

export type GetActualPaymentsInput = {
  client_contract_id: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetAgenciesInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetAgencyContractInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetAgencyContractSignatoriesInput = {
  agency_id: Scalars['PositiveInt']['input'];
};

export type GetAgencyContractsInput = {
  agency_id: Scalars['PositiveInt']['input'];
  object_id?: InputMaybe<Scalars['PositiveInt']['input']>;
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
  object_id?: InputMaybe<Scalars['PositiveInt']['input']>;
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

export type GetObjectInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetPricingProductInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetPricingProductsInput = {
  object_id: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BaseOptionsInput>;
};

export type GetRealEstateAgentInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetRealEstateAgentsInput = {
  options?: InputMaybe<BasicOptionsInput>;
};

export type GetScheduledPaymentsInput = {
  client_contract_id: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BasicOptionsInput>;
};

export type MipAgencyContractPropertiesInput = {
  agency_contract_commission: AgencyContractCommissionInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createActualPayment: BasicActualPayment;
  createAgency: BasicAgency;
  createAgencyContract: BasicAgencyContract;
  createAgencyContractSignatory: BasicAgencyContractSignatory;
  createClient: BasicClient;
  createClientContract: BasicClientContract;
  createProduct: Product;
  createRealEstateAgent: BasicRealEstateAgent;
  createScheduledPayment: BasicScheduledPayment;
  createUser: BasicUser;
  updateAgencyContract: BasicAgencyContract;
  updateClient: BasicClient;
  updateClientContract: BasicClientContract;
  updateRealEstateAgent: BasicRealEstateAgent;
};


export type MutationCreateActualPaymentArgs = {
  input: CreateActualPaymentInput;
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


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreateClientContractArgs = {
  input: CreateClientContractInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateRealEstateAgentArgs = {
  input: CreateRealEstateAgentInput;
};


export type MutationCreateScheduledPaymentArgs = {
  input: CreateScheduledPaymentInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateAgencyContractArgs = {
  input: UpdateAgencyContractInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationUpdateClientContractArgs = {
  input: UpdateClientContractInput;
};


export type MutationUpdateRealEstateAgentArgs = {
  input: UpdateRealEstateAgentInput;
};

export type PricingProduct = {
  __typename?: 'PricingProduct';
  category: BasicPricingProductCategory;
  object: BasicPricingObject;
  product: BasicPricingProduct;
  product_type?: Maybe<BasicPricingProductType>;
};

export type PricingProducts = {
  __typename?: 'PricingProducts';
  products: Array<PricingProduct>;
  total_count: Scalars['PositiveInt']['output'];
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
  getObject: BasicObject;
  getObjects: Array<BasicObject>;
  getPricingProduct: PricingProduct;
  getPricingProducts: PricingProducts;
  getRealEstateAgent: RealEstateAgent;
  getRealEstateAgents: RealEstateAgents;
  getScheduledPayments: ScheduledPayments;
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


export type QueryGetObjectArgs = {
  input: GetObjectInput;
};


export type QueryGetPricingProductArgs = {
  input: GetPricingProductInput;
};


export type QueryGetPricingProductsArgs = {
  input: GetPricingProductsInput;
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

export type RealEstateAgencyContractPropertiesInput = {
  agency_contract_commission: AgencyContractCommissionInput;
};

export type RealEstateAgent = {
  __typename?: 'RealEstateAgent';
  agencies: Array<BasicAgency>;
  real_estate_agent: BasicRealEstateAgent;
};

export type RealEstateAgents = {
  __typename?: 'RealEstateAgents';
  real_estate_agents: Array<RealEstateAgent>;
  total_count: Scalars['NonNegativeInt']['output'];
};

export enum ScheduledPaymentType {
  Exchange = 'EXCHANGE',
  MaternityCapital = 'MATERNITY_CAPITAL',
  Mortgage = 'MORTGAGE',
  Own = 'OWN'
}

export type ScheduledPayments = {
  __typename?: 'ScheduledPayments';
  scheduled_payments: Array<BasicScheduledPayment>;
  total_count: Scalars['NonNegativeInt']['output'];
};

export type UpdateAgencyContractInput = {
  agency_contract_properties: UpdateAgencyContractPropertiesInput;
  mip_agency_contract_properties?: InputMaybe<MipAgencyContractPropertiesInput>;
  real_estate_agency_contract_properties?: InputMaybe<RealEstateAgencyContractPropertiesInput>;
};

export type UpdateAgencyContractPropertiesInput = {
  agency_contract_signatory_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  agency_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  entity_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  id: Scalars['PositiveInt']['input'];
  object_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  responsible_user_id?: InputMaybe<Scalars['PositiveInt']['input']>;
};

export type UpdateClientContractInput = {
  client_contract_properties: UpdateClientContractPropertiesInput;
  ddu_client_contract_properties?: InputMaybe<DduClientContractPropertiesInput>;
};

export type UpdateClientContractPropertiesInput = {
  agency_contract_ids?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  bank_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  clients?: InputMaybe<Array<ClientContractToClientInput>>;
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['PositiveInt']['input'];
  manager_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  number?: InputMaybe<Scalars['NonEmptyString']['input']>;
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  product_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  real_estate_agent_id?: InputMaybe<Scalars['PositiveInt']['input']>;
  registration_date?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateClientInput = {
  client_entity_properties?: InputMaybe<ClientEntityPropertiesInput>;
  client_individual_minor_properties?: InputMaybe<ClientIndividualMinorPropertiesInput>;
  client_individual_properties?: InputMaybe<ClientIndividualPropertiesInput>;
  client_properties: UpdateClientPropertiesInput;
};

export type UpdateClientPropertiesInput = {
  address?: InputMaybe<Scalars['NonEmptyString']['input']>;
  email?: InputMaybe<Scalars['NonEmptyString']['input']>;
  full_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
  inn?: InputMaybe<Scalars['NonEmptyString']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateRealEstateAgentInput = {
  agency_ids?: InputMaybe<Array<Scalars['PositiveInt']['input']>>;
  full_name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  id: Scalars['PositiveInt']['input'];
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export enum UserRole {
  Administrator = 'ADMINISTRATOR',
  Director = 'DIRECTOR',
  SalesEmployee = 'SALES_EMPLOYEE'
}

export type GetAgenciesInAgencyContractPickerQueryVariables = Exact<{
  input: GetAgenciesInput;
}>;


export type GetAgenciesInAgencyContractPickerQuery = { __typename?: 'Query', getAgencies: { __typename?: 'Agencies', agencies: Array<{ __typename?: 'BasicAgency', id: any, name: any, common_db_contractors_id: any }> } };

export type GetAgencyContractsInAgencyContractPickerQueryVariables = Exact<{
  input: GetAgencyContractsInput;
}>;


export type GetAgencyContractsInAgencyContractPickerQuery = { __typename?: 'Query', getAgencyContracts: Array<{ __typename?: 'AgencyContract', agency_contract_properties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agency_contract_type: AgencyContractType }, object: { __typename?: 'BasicObject', id: any, name: any, common_db_objects_id: any }, agency: { __typename?: 'BasicAgency', id: any, name: any, common_db_contractors_id: any } }> };

export type GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQueryVariables = Exact<{
  input: GetAgencyContractSignatoriesInput;
}>;


export type GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQuery = { __typename?: 'Query', getAgencyContractSignatories: Array<{ __typename?: 'BasicAgencyContractSignatory', id: any, full_name: any, email: any, phone: any, title: any, based_on: any }> };

export type GetAgenciesInAgencyPickerQueryVariables = Exact<{
  input: GetAgenciesInput;
}>;


export type GetAgenciesInAgencyPickerQuery = { __typename?: 'Query', getAgencies: { __typename?: 'Agencies', agencies: Array<{ __typename?: 'BasicAgency', id: any, name: any }> } };

export type GetBanksInBankPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksInBankPickerQuery = { __typename?: 'Query', getBanks: Array<{ __typename?: 'BasicBank', id: any, name: any }> };

export type GetClientsInClientPickerQueryVariables = Exact<{
  input: GetClientsInput;
}>;


export type GetClientsInClientPickerQuery = { __typename?: 'Query', getClients: { __typename?: 'Clients', clients: Array<{ __typename?: 'Client', client_properties: { __typename?: 'BasicClient', id: any, full_name: any, client_category: ClientCategory } }> } };

export type GetEntitiesInEntityPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesInEntityPickerQuery = { __typename?: 'Query', getEntities: Array<{ __typename?: 'Entity', entity: { __typename?: 'BasicEntity', id: any, name: any }, objects: Array<{ __typename?: 'BasicObject', id: any, name: any }> }> };

export type CreateActualPaymentInNewActualPaymentMutationVariables = Exact<{
  input: CreateActualPaymentInput;
}>;


export type CreateActualPaymentInNewActualPaymentMutation = { __typename?: 'Mutation', createActualPayment: { __typename?: 'BasicActualPayment', id: any } };

export type CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutationVariables = Exact<{
  input: CreateAgencyContractSignatoryInput;
}>;


export type CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutation = { __typename?: 'Mutation', createAgencyContractSignatory: { __typename?: 'BasicAgencyContractSignatory', id: any, full_name: any, email: any, based_on: any, phone: any, title: any } };

export type CreateScheduledPaymentInNewPaymentScheduleMutationVariables = Exact<{
  input: CreateScheduledPaymentInput;
}>;


export type CreateScheduledPaymentInNewPaymentScheduleMutation = { __typename?: 'Mutation', createScheduledPayment: { __typename?: 'BasicScheduledPayment', id: any } };

export type GetObjectsInObjectPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInObjectPickerQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any }> };

export type GetPricingProductInProductInfoQueryVariables = Exact<{
  input: GetPricingProductInput;
}>;


export type GetPricingProductInProductInfoQuery = { __typename?: 'Query', getPricingProduct: { __typename?: 'PricingProduct', object: { __typename?: 'BasicPricingObject', name: any }, category: { __typename?: 'BasicPricingProductCategory', name: any }, product: { __typename?: 'BasicPricingProduct', id: any, number: any, area: any, price: any, one_gt_id?: any | null }, product_type?: { __typename?: 'BasicPricingProductType', name: any } | null } };

export type GetObjectsInProductPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInProductPickerQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any, common_db_objects_id: any }> };

export type GetPricingProductsInProductPickerQueryVariables = Exact<{
  input: GetPricingProductsInput;
}>;


export type GetPricingProductsInProductPickerQuery = { __typename?: 'Query', getPricingProducts: { __typename?: 'PricingProducts', products: Array<{ __typename?: 'PricingProduct', product: { __typename?: 'BasicPricingProduct', id: any, number: any, area: any, price: any }, category: { __typename?: 'BasicPricingProductCategory', id: any, name: any }, object: { __typename?: 'BasicPricingObject', id: any, name: any } }> } };

export type CreateProductInProductPickerMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductInProductPickerMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', product: { __typename?: 'BasicProduct', id: any, number: any, pricing_products_id: any, product_category: ProductCategory }, object: { __typename?: 'BasicObject', id: any, name: any, common_db_objects_id: any } } };

export type GetRealEstateAgentsInRealEstateAgentPickerQueryVariables = Exact<{
  input?: InputMaybe<GetRealEstateAgentsInput>;
}>;


export type GetRealEstateAgentsInRealEstateAgentPickerQuery = { __typename?: 'Query', getRealEstateAgents: { __typename?: 'RealEstateAgents', real_estate_agents: Array<{ __typename?: 'RealEstateAgent', real_estate_agent: { __typename?: 'BasicRealEstateAgent', id: any, full_name: any } }> } };

export type GetClientContractsByIdsInRightPanelQueryVariables = Exact<{
  input: GetClientContractsByIdsInput;
}>;


export type GetClientContractsByIdsInRightPanelQuery = { __typename?: 'Query', getClientContractsByIds: { __typename?: 'ClientContracts', client_contracts: Array<{ __typename?: 'ClientContract', client_contract_properties: { __typename?: 'BasicClientContract', id: any, date: any, number: any, price: any, client_contract_type: ClientContractType }, product: { __typename?: 'Product', product: { __typename?: 'BasicProduct', number: any, product_category: ProductCategory }, object: { __typename?: 'BasicObject', name: any } } }> } };

export type GetUsersInUserPickerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersInUserPickerQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'BasicUser', id: any, full_name: any }> };

export type GetAgenciesInAgenciesQueryVariables = Exact<{
  input: GetAgenciesInput;
}>;


export type GetAgenciesInAgenciesQuery = { __typename?: 'Query', getAgencies: { __typename?: 'Agencies', total_count: any, agencies: Array<{ __typename?: 'BasicAgency', id: any, name: any }> } };

export type GetAgencyAndAgencyContractsInAgencyQueryVariables = Exact<{
  agencyInput: GetAgencyInput;
  agencyContractsInput: GetAgencyContractsInput;
}>;


export type GetAgencyAndAgencyContractsInAgencyQuery = { __typename?: 'Query', getAgency: { __typename?: 'Agency', agency: { __typename?: 'BasicAgency', id: any, name: any, inn?: any | null, common_db_contractors_id: any } }, getAgencyContracts: Array<{ __typename?: 'AgencyContract', agency_contract_properties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agency_contract_type: AgencyContractType }, object: { __typename?: 'BasicObject', id: any, common_db_objects_id: any, name: any } }> };

export type GetCommonContractorInAgencyQueryVariables = Exact<{
  input: GetCommonContractorInput;
}>;


export type GetCommonContractorInAgencyQuery = { __typename?: 'Query', getCommonContractor: { __typename?: 'CommonContractor', contractor: { __typename?: 'BasicCommonContractor', id: any, name: string, short_name?: string | null, inn?: string | null, kpp?: string | null, ogrn?: string | null, legal_address?: string | null, actual_address?: string | null, contacts?: string | null, reconciliation_link?: string | null, is_active?: boolean | null, propogated_at?: any | null, phone?: string | null }, accounts?: Array<{ __typename?: 'BasicCommonAccount', id: any, number?: string | null, bank?: { __typename?: 'BasicCommonBank', id: any, name: string, city?: string | null, bik?: string | null, correspondent_number?: string | null } | null }> | null } };

export type GetObjectsInClientContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInClientContractsQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any, common_db_objects_id: any }> };

export type GetClientContractsInClientContractsQueryVariables = Exact<{
  input: GetClientContractsInput;
}>;


export type GetClientContractsInClientContractsQuery = { __typename?: 'Query', getClientContracts: { __typename?: 'ClientContracts', total_count: any, client_contracts: Array<{ __typename?: 'ClientContract', client_contract_properties: { __typename?: 'BasicClientContract', id: any, number: any, price: any, date: any, client_contract_type: ClientContractType }, clients: Array<{ __typename?: 'BasicClientContractToClient', client: { __typename?: 'BasicClient', id: any, full_name: any } }>, product: { __typename?: 'Product', product: { __typename?: 'BasicProduct', id: any, number: any, product_category: ProductCategory } }, object: { __typename?: 'BasicObject', id: any, name: any } }> } };

export type GetClientEntityInClientEntityQueryVariables = Exact<{
  input: GetClientInput;
}>;


export type GetClientEntityInClientEntityQuery = { __typename?: 'Query', getClient: { __typename?: 'Client', client_properties: { __typename?: 'BasicClient', id: any, full_name: any, inn?: any | null, phone?: any | null, email?: any | null, address?: any | null, client_category: ClientCategory }, client_entity_properties?: { __typename?: 'BasicClientEntityProperties', kpp?: any | null } | null } };

export type CreateClientEntityInClientEntityMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientEntityInClientEntityMutation = { __typename?: 'Mutation', createClient: { __typename?: 'BasicClient', id: any } };

export type UpdateClientEntityInClientEntityMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientEntityInClientEntityMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'BasicClient', full_name: any } };

export type GetClientIndividualMinorInClientIndividualMinorQueryVariables = Exact<{
  input: GetClientInput;
}>;


export type GetClientIndividualMinorInClientIndividualMinorQuery = { __typename?: 'Query', getClient: { __typename?: 'Client', client_properties: { __typename?: 'BasicClient', id: any, full_name: any, inn?: any | null, phone?: any | null, email?: any | null, address?: any | null, client_category: ClientCategory }, client_individual_minor_properties?: { __typename?: 'BasicClientIndividualMinorProperties', dob?: any | null, snils?: any | null, birth_certificate?: any | null, client_passport?: { __typename?: 'BasicClientPassport', number?: any | null, issued?: any | null, code?: any | null, place_of_birth?: any | null, registration_address?: any | null } | null, representatives?: Array<{ __typename?: 'BasicClient', id: any, full_name: any, client_category: ClientCategory }> | null } | null } };

export type CreateClientIndividualMinorInClientIndividualMinorMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientIndividualMinorInClientIndividualMinorMutation = { __typename?: 'Mutation', createClient: { __typename?: 'BasicClient', id: any } };

export type UpdateClientIndividualMinorInClientIndividualMinorMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientIndividualMinorInClientIndividualMinorMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'BasicClient', full_name: any } };

export type GetClientIndividualInClientIndividualQueryVariables = Exact<{
  input: GetClientInput;
}>;


export type GetClientIndividualInClientIndividualQuery = { __typename?: 'Query', getClient: { __typename?: 'Client', client_properties: { __typename?: 'BasicClient', id: any, full_name: any, inn?: any | null, phone?: any | null, email?: any | null, address?: any | null, client_category: ClientCategory }, client_individual_properties?: { __typename?: 'BasicClientIndividualProperties', dob?: any | null, snils?: any | null, client_passport?: { __typename?: 'BasicClientPassport', number?: any | null, issued?: any | null, code?: any | null, place_of_birth?: any | null, registration_address?: any | null } | null } | null } };

export type CreateClientIndividualInClientIndividualMutationVariables = Exact<{
  input: CreateClientInput;
}>;


export type CreateClientIndividualInClientIndividualMutation = { __typename?: 'Mutation', createClient: { __typename?: 'BasicClient', id: any } };

export type UpdateClientIndividualInClientIndividualMutationVariables = Exact<{
  input: UpdateClientInput;
}>;


export type UpdateClientIndividualInClientIndividualMutation = { __typename?: 'Mutation', updateClient: { __typename?: 'BasicClient', full_name: any } };

export type GetClientsInClientsQueryVariables = Exact<{
  input: GetClientsInput;
}>;


export type GetClientsInClientsQuery = { __typename?: 'Query', getClients: { __typename?: 'Clients', total_count: any, clients: Array<{ __typename?: 'Client', client_properties: { __typename?: 'BasicClient', id: any, full_name: any, client_category: ClientCategory } }> } };

export type GetClientContractInDduClientContractQueryVariables = Exact<{
  input: GetClientContractInput;
}>;


export type GetClientContractInDduClientContractQuery = { __typename?: 'Query', getClientContract: { __typename?: 'ClientContract', agency_contracts?: Array<{ __typename?: 'AgencyContractClientContract', agency_contract: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agency_contract_type: AgencyContractType }, agency: { __typename?: 'BasicAgency', id: any, name: any, common_db_contractors_id: any } } | null> | null, bank?: { __typename?: 'BasicBank', id: any, name: any } | null, client_contract_properties: { __typename?: 'BasicClientContract', id: any, number: any, date: any, registration_date?: any | null, price: any, client_contract_type: ClientContractType }, clients: Array<{ __typename?: 'BasicClientContractToClient', is_main: boolean, share: any, client: { __typename?: 'BasicClient', id: any, full_name: any, client_category: ClientCategory } }>, ddu_client_contract_properties?: { __typename?: 'BasicDDUClientContractProperties', id: any, is_escrow_discount?: boolean | null, escrow_account_opening_date?: any | null, escrow_period?: any | null, escrow_account_number?: any | null, ddu_link?: any | null, return_account?: any | null } | null, manager?: { __typename?: 'BasicUser', id: any, full_name: any } | null, object: { __typename?: 'BasicObject', id: any, name: any, common_db_objects_id: any }, product: { __typename?: 'Product', object: { __typename?: 'BasicObject', id: any, common_db_objects_id: any, name: any }, product: { __typename?: 'BasicProduct', id: any, pricing_products_id: any, number: any, product_category: ProductCategory } }, real_estate_agent?: { __typename?: 'BasicRealEstateAgent', id: any, full_name: any } | null } };

export type CreateClientContractInDduClientContractMutationVariables = Exact<{
  input: CreateClientContractInput;
}>;


export type CreateClientContractInDduClientContractMutation = { __typename?: 'Mutation', createClientContract: { __typename?: 'BasicClientContract', id: any } };

export type UpdateClientContractInDduClientContractMutationVariables = Exact<{
  input: UpdateClientContractInput;
}>;


export type UpdateClientContractInDduClientContractMutation = { __typename?: 'Mutation', updateClientContract: { __typename?: 'BasicClientContract', id: any, number: any } };

export type GetClientContractInDkpClientContractQueryVariables = Exact<{
  input: GetClientContractInput;
}>;


export type GetClientContractInDkpClientContractQuery = { __typename?: 'Query', getClientContract: { __typename?: 'ClientContract', agency_contracts?: Array<{ __typename?: 'AgencyContractClientContract', agency_contract: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agency_contract_type: AgencyContractType }, agency: { __typename?: 'BasicAgency', id: any, name: any, common_db_contractors_id: any } } | null> | null, bank?: { __typename?: 'BasicBank', id: any, name: any } | null, client_contract_properties: { __typename?: 'BasicClientContract', id: any, number: any, date: any, registration_date?: any | null, price: any, client_contract_type: ClientContractType }, clients: Array<{ __typename?: 'BasicClientContractToClient', is_main: boolean, share: any, client: { __typename?: 'BasicClient', id: any, full_name: any, client_category: ClientCategory } }>, manager?: { __typename?: 'BasicUser', id: any, full_name: any } | null, object: { __typename?: 'BasicObject', id: any, name: any, common_db_objects_id: any }, product: { __typename?: 'Product', object: { __typename?: 'BasicObject', id: any, common_db_objects_id: any, name: any }, product: { __typename?: 'BasicProduct', id: any, pricing_products_id: any, number: any, product_category: ProductCategory } }, real_estate_agent?: { __typename?: 'BasicRealEstateAgent', id: any, full_name: any } | null } };

export type CreateClientContractInDkpClientContractMutationVariables = Exact<{
  input: CreateClientContractInput;
}>;


export type CreateClientContractInDkpClientContractMutation = { __typename?: 'Mutation', createClientContract: { __typename?: 'BasicClientContract', id: any } };

export type UpdateClientContractInDkpClientContractMutationVariables = Exact<{
  input: UpdateClientContractInput;
}>;


export type UpdateClientContractInDkpClientContractMutation = { __typename?: 'Mutation', updateClientContract: { __typename?: 'BasicClientContract', id: any, number: any } };

export type GetObjectsInMipAgencyContractQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInMipAgencyContractQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any }> };

export type GetAgencyContractInMipAgencyContractQueryVariables = Exact<{
  input: GetAgencyContractInput;
}>;


export type GetAgencyContractInMipAgencyContractQuery = { __typename?: 'Query', getAgencyContract: { __typename?: 'AgencyContract', agency_contract_properties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agency_contract_type: AgencyContractType }, agency_contract_signatory?: { __typename?: 'BasicAgencyContractSignatory', id: any, full_name: any, email: any, phone: any, title: any, based_on: any } | null, mip_agency_contract_properties?: { __typename?: 'BasicMIPAgencyContractProperties', agency_contract_commission: { __typename?: 'BasicAgencyContractCommission', percent: any, threshold: any, max_days: any } } | null, entity: { __typename?: 'BasicEntity', id: any, name: any }, object: { __typename?: 'BasicObject', id: any, name: any }, agency: { __typename?: 'BasicAgency', id: any, name: any }, responsible_user?: { __typename?: 'BasicUser', id: any, full_name: any } | null } };

export type CreateAgencyContractInMipAgencyContractMutationVariables = Exact<{
  input: CreateAgencyContractInput;
}>;


export type CreateAgencyContractInMipAgencyContractMutation = { __typename?: 'Mutation', createAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type UpdateAgencyContractInMipAgencyContractMutationVariables = Exact<{
  input: UpdateAgencyContractInput;
}>;


export type UpdateAgencyContractInMipAgencyContractMutation = { __typename?: 'Mutation', updateAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type GetCommonContractorsInNewAgencyQueryVariables = Exact<{
  input: GetCommonContractorsInput;
}>;


export type GetCommonContractorsInNewAgencyQuery = { __typename?: 'Query', getCommonContractors: { __typename?: 'CommonContractors', contractors: Array<{ __typename?: 'CommonContractor', contractor: { __typename?: 'BasicCommonContractor', id: any, name: string, short_name?: string | null, inn?: string | null, kpp?: string | null, ogrn?: string | null, legal_address?: string | null, actual_address?: string | null, contacts?: string | null, reconciliation_link?: string | null, is_active?: boolean | null, propogated_at?: any | null, phone?: string | null }, accounts?: Array<{ __typename?: 'BasicCommonAccount', id: any, number?: string | null, bank?: { __typename?: 'BasicCommonBank', id: any, name: string, city?: string | null, bik?: string | null, correspondent_number?: string | null } | null }> | null }> } };

export type CreateAgencyInNewAgencyMutationVariables = Exact<{
  input: CreateAgencyInput;
}>;


export type CreateAgencyInNewAgencyMutation = { __typename?: 'Mutation', createAgency: { __typename?: 'BasicAgency', id: any } };

export type GetScheduledPaymentsInPaymentScheduleQueryVariables = Exact<{
  getScheduledPaymentsInput: GetScheduledPaymentsInput;
  getActualPaymentsInput: GetActualPaymentsInput;
}>;


export type GetScheduledPaymentsInPaymentScheduleQuery = { __typename?: 'Query', getScheduledPayments: { __typename?: 'ScheduledPayments', scheduled_payments: Array<{ __typename?: 'BasicScheduledPayment', id: any, date: any, payment: any, scheduled_payment_type: ScheduledPaymentType }> }, getActualPayments: { __typename?: 'ActualPayments', actual_payments: Array<{ __typename?: 'BasicActualPayment', id: any, date: any, payment: any }> } };

export type GetObjectsInNewAgencyContractQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectsInNewAgencyContractQuery = { __typename?: 'Query', getObjects: Array<{ __typename?: 'BasicObject', id: any, name: any }> };

export type GetAgencyContractInRealEstateAgencyContractQueryVariables = Exact<{
  input: GetAgencyContractInput;
}>;


export type GetAgencyContractInRealEstateAgencyContractQuery = { __typename?: 'Query', getAgencyContract: { __typename?: 'AgencyContract', agency_contract_properties: { __typename?: 'BasicAgencyContract', id: any, number: any, date: any, agency_contract_type: AgencyContractType }, agency_contract_signatory?: { __typename?: 'BasicAgencyContractSignatory', id: any, full_name: any, email: any, phone: any, title: any, based_on: any } | null, real_estate_agency_contract_properties?: { __typename?: 'BasicRealEstateAgencyContractProperties', agency_contract_commission: { __typename?: 'BasicAgencyContractCommission', percent: any, threshold: any, max_days: any } } | null, entity: { __typename?: 'BasicEntity', id: any, name: any }, object: { __typename?: 'BasicObject', id: any, name: any }, agency: { __typename?: 'BasicAgency', id: any, name: any }, responsible_user?: { __typename?: 'BasicUser', id: any, full_name: any } | null } };

export type CreateAgencyContractInNewAgencyContractMutationVariables = Exact<{
  input: CreateAgencyContractInput;
}>;


export type CreateAgencyContractInNewAgencyContractMutation = { __typename?: 'Mutation', createAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type UpdateAgencyContractInNewAgencyContractMutationVariables = Exact<{
  input: UpdateAgencyContractInput;
}>;


export type UpdateAgencyContractInNewAgencyContractMutation = { __typename?: 'Mutation', updateAgencyContract: { __typename?: 'BasicAgencyContract', id: any } };

export type GetRealEstateAgentInRealEstateAgentQueryVariables = Exact<{
  input: GetRealEstateAgentInput;
}>;


export type GetRealEstateAgentInRealEstateAgentQuery = { __typename?: 'Query', getRealEstateAgent: { __typename?: 'RealEstateAgent', real_estate_agent: { __typename?: 'BasicRealEstateAgent', id: any, full_name: any, phone?: any | null }, agencies: Array<{ __typename?: 'BasicAgency', id: any, common_db_contractors_id: any, name: any, inn?: any | null }> } };

export type CreateRealEstateAgentInNewRealEstateAgentMutationVariables = Exact<{
  input: CreateRealEstateAgentInput;
}>;


export type CreateRealEstateAgentInNewRealEstateAgentMutation = { __typename?: 'Mutation', createRealEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any } };

export type UpdateRealEstateAgentInRealEstateAgentMutationVariables = Exact<{
  input: UpdateRealEstateAgentInput;
}>;


export type UpdateRealEstateAgentInRealEstateAgentMutation = { __typename?: 'Mutation', updateRealEstateAgent: { __typename?: 'BasicRealEstateAgent', id: any, full_name: any } };

export type GetRealEstateAgentsInRealEstateAgentsQueryVariables = Exact<{
  input: GetRealEstateAgentsInput;
}>;


export type GetRealEstateAgentsInRealEstateAgentsQuery = { __typename?: 'Query', getRealEstateAgents: { __typename?: 'RealEstateAgents', total_count: any, real_estate_agents: Array<{ __typename?: 'RealEstateAgent', real_estate_agent: { __typename?: 'BasicRealEstateAgent', id: any, full_name: any, phone?: any | null } }> } };


export const GetAgenciesInAgencyContractPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgenciesInAgencyContractPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgenciesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_contractors_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgenciesInAgencyContractPickerQuery, GetAgenciesInAgencyContractPickerQueryVariables>;
export const GetAgencyContractsInAgencyContractPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractsInAgencyContractPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_contractors_id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractsInAgencyContractPickerQuery, GetAgencyContractsInAgencyContractPickerQueryVariables>;
export const GetAgencyContractSignatoriesInAgencyContractSignatoryPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractSignatoriesInAgencyContractSignatoryPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractSignatoriesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContractSignatories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"based_on"}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQuery, GetAgencyContractSignatoriesInAgencyContractSignatoryPickerQueryVariables>;
export const GetAgenciesInAgencyPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgenciesInAgencyPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgenciesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgenciesInAgencyPickerQuery, GetAgenciesInAgencyPickerQueryVariables>;
export const GetBanksInBankPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBanksInBankPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetBanksInBankPickerQuery, GetBanksInBankPickerQueryVariables>;
export const GetClientsInClientPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientsInClientPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientsInClientPickerQuery, GetClientsInClientPickerQueryVariables>;
export const GetEntitiesInEntityPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEntitiesInEntityPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetEntitiesInEntityPickerQuery, GetEntitiesInEntityPickerQueryVariables>;
export const CreateActualPaymentInNewActualPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateActualPaymentInNewActualPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateActualPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createActualPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateActualPaymentInNewActualPaymentMutation, CreateActualPaymentInNewActualPaymentMutationVariables>;
export const CreateAgencyContractSignatoryInNewAgencyContractSignatoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyContractSignatoryInNewAgencyContractSignatory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyContractSignatoryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgencyContractSignatory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"based_on"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutation, CreateAgencyContractSignatoryInNewAgencyContractSignatoryMutationVariables>;
export const CreateScheduledPaymentInNewPaymentScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateScheduledPaymentInNewPaymentSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateScheduledPaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createScheduledPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateScheduledPaymentInNewPaymentScheduleMutation, CreateScheduledPaymentInNewPaymentScheduleMutationVariables>;
export const GetObjectsInObjectPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInObjectPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInObjectPickerQuery, GetObjectsInObjectPickerQueryVariables>;
export const GetPricingProductInProductInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPricingProductInProductInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPricingProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPricingProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"one_gt_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetPricingProductInProductInfoQuery, GetPricingProductInProductInfoQueryVariables>;
export const GetObjectsInProductPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInProductPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInProductPickerQuery, GetObjectsInProductPickerQueryVariables>;
export const GetPricingProductsInProductPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPricingProductsInProductPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPricingProductsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPricingProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPricingProductsInProductPickerQuery, GetPricingProductsInProductPickerQueryVariables>;
export const CreateProductInProductPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProductInProductPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"pricing_products_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProductInProductPickerMutation, CreateProductInProductPickerMutationVariables>;
export const GetRealEstateAgentsInRealEstateAgentPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgentsInRealEstateAgentPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"real_estate_agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"real_estate_agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgentsInRealEstateAgentPickerQuery, GetRealEstateAgentsInRealEstateAgentPickerQueryVariables>;
export const GetClientContractsByIdsInRightPanelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractsByIdsInRightPanel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractsByIdsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContractsByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_contracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"client_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"product_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientContractsByIdsInRightPanelQuery, GetClientContractsByIdsInRightPanelQueryVariables>;
export const GetUsersInUserPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersInUserPicker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]} as unknown as DocumentNode<GetUsersInUserPickerQuery, GetUsersInUserPickerQueryVariables>;
export const GetAgenciesInAgenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgenciesInAgencies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgenciesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_count"}}]}}]}}]} as unknown as DocumentNode<GetAgenciesInAgenciesQuery, GetAgenciesInAgenciesQueryVariables>;
export const GetAgencyAndAgencyContractsInAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyAndAgencyContractsInAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agencyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agencyContractsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agencyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_contractors_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getAgencyContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agencyContractsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyAndAgencyContractsInAgencyQuery, GetAgencyAndAgencyContractsInAgencyQueryVariables>;
export const GetCommonContractorInAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommonContractorInAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCommonContractorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommonContractor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"ogrn"}},{"kind":"Field","name":{"kind":"Name","value":"legal_address"}},{"kind":"Field","name":{"kind":"Name","value":"actual_address"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliation_link"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"propogated_at"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"bik"}},{"kind":"Field","name":{"kind":"Name","value":"correspondent_number"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommonContractorInAgencyQuery, GetCommonContractorInAgencyQueryVariables>;
export const GetObjectsInClientContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInClientContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInClientContractsQuery, GetObjectsInClientContractsQueryVariables>;
export const GetClientContractsInClientContractsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractsInClientContracts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContracts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_contracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"client_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"product_category"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_count"}}]}}]}}]} as unknown as DocumentNode<GetClientContractsInClientContractsQuery, GetClientContractsInClientContractsQueryVariables>;
export const GetClientEntityInClientEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientEntityInClientEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client_entity_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kpp"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientEntityInClientEntityQuery, GetClientEntityInClientEntityQueryVariables>;
export const CreateClientEntityInClientEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientEntityInClientEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientEntityInClientEntityMutation, CreateClientEntityInClientEntityMutationVariables>;
export const UpdateClientEntityInClientEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientEntityInClientEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]} as unknown as DocumentNode<UpdateClientEntityInClientEntityMutation, UpdateClientEntityInClientEntityMutationVariables>;
export const GetClientIndividualMinorInClientIndividualMinorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientIndividualMinorInClientIndividualMinor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client_individual_minor_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"birth_certificate"}},{"kind":"Field","name":{"kind":"Name","value":"client_passport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"issued"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"place_of_birth"}},{"kind":"Field","name":{"kind":"Name","value":"registration_address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"representatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientIndividualMinorInClientIndividualMinorQuery, GetClientIndividualMinorInClientIndividualMinorQueryVariables>;
export const CreateClientIndividualMinorInClientIndividualMinorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientIndividualMinorInClientIndividualMinor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientIndividualMinorInClientIndividualMinorMutation, CreateClientIndividualMinorInClientIndividualMinorMutationVariables>;
export const UpdateClientIndividualMinorInClientIndividualMinorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientIndividualMinorInClientIndividualMinor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]} as unknown as DocumentNode<UpdateClientIndividualMinorInClientIndividualMinorMutation, UpdateClientIndividualMinorInClientIndividualMinorMutationVariables>;
export const GetClientIndividualInClientIndividualDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientIndividualInClientIndividual"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client_individual_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"snils"}},{"kind":"Field","name":{"kind":"Name","value":"client_passport"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"issued"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"place_of_birth"}},{"kind":"Field","name":{"kind":"Name","value":"registration_address"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetClientIndividualInClientIndividualQuery, GetClientIndividualInClientIndividualQueryVariables>;
export const CreateClientIndividualInClientIndividualDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientIndividualInClientIndividual"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientIndividualInClientIndividualMutation, CreateClientIndividualInClientIndividualMutationVariables>;
export const UpdateClientIndividualInClientIndividualDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientIndividualInClientIndividual"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClient"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]} as unknown as DocumentNode<UpdateClientIndividualInClientIndividualMutation, UpdateClientIndividualInClientIndividualMutationVariables>;
export const GetClientsInClientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientsInClients"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_count"}}]}}]}}]} as unknown as DocumentNode<GetClientsInClientsQuery, GetClientsInClientsQueryVariables>;
export const GetClientContractInDduClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractInDDUClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_contractors_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"registration_date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"client_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_main"}},{"kind":"Field","name":{"kind":"Name","value":"share"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ddu_client_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_escrow_discount"}},{"kind":"Field","name":{"kind":"Name","value":"escrow_account_opening_date"}},{"kind":"Field","name":{"kind":"Name","value":"escrow_period"}},{"kind":"Field","name":{"kind":"Name","value":"escrow_account_number"}},{"kind":"Field","name":{"kind":"Name","value":"ddu_link"}},{"kind":"Field","name":{"kind":"Name","value":"return_account"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pricing_products_id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"product_category"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"real_estate_agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientContractInDduClientContractQuery, GetClientContractInDduClientContractQueryVariables>;
export const CreateClientContractInDduClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientContractInDDUClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientContractInDduClientContractMutation, CreateClientContractInDduClientContractMutationVariables>;
export const UpdateClientContractInDduClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientContractInDDUClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<UpdateClientContractInDduClientContractMutation, UpdateClientContractInDduClientContractMutationVariables>;
export const GetClientContractInDkpClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClientContractInDKPClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_contractors_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"client_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"registration_date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"client_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"client_category"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_main"}},{"kind":"Field","name":{"kind":"Name","value":"share"}}]}},{"kind":"Field","name":{"kind":"Name","value":"manager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_objects_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pricing_products_id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"product_category"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"real_estate_agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetClientContractInDkpClientContractQuery, GetClientContractInDkpClientContractQueryVariables>;
export const CreateClientContractInDkpClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClientContractInDKPClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateClientContractInDkpClientContractMutation, CreateClientContractInDkpClientContractMutationVariables>;
export const UpdateClientContractInDkpClientContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClientContractInDKPClientContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateClientContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClientContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}}]} as unknown as DocumentNode<UpdateClientContractInDkpClientContractMutation, UpdateClientContractInDkpClientContractMutationVariables>;
export const GetObjectsInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInMIPAgencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInMipAgencyContractQuery, GetObjectsInMipAgencyContractQueryVariables>;
export const GetAgencyContractInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractInMIPAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"based_on"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mip_agency_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract_commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"max_days"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsible_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractInMipAgencyContractQuery, GetAgencyContractInMipAgencyContractQueryVariables>;
export const CreateAgencyContractInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyContractInMIPAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyContractInMipAgencyContractMutation, CreateAgencyContractInMipAgencyContractMutationVariables>;
export const UpdateAgencyContractInMipAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAgencyContractInMIPAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAgencyContractInMipAgencyContractMutation, UpdateAgencyContractInMipAgencyContractMutationVariables>;
export const GetCommonContractorsInNewAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommonContractorsInNewAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetCommonContractorsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommonContractors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"short_name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}},{"kind":"Field","name":{"kind":"Name","value":"kpp"}},{"kind":"Field","name":{"kind":"Name","value":"ogrn"}},{"kind":"Field","name":{"kind":"Name","value":"legal_address"}},{"kind":"Field","name":{"kind":"Name","value":"actual_address"}},{"kind":"Field","name":{"kind":"Name","value":"contacts"}},{"kind":"Field","name":{"kind":"Name","value":"reconciliation_link"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"propogated_at"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"bank"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"bik"}},{"kind":"Field","name":{"kind":"Name","value":"correspondent_number"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCommonContractorsInNewAgencyQuery, GetCommonContractorsInNewAgencyQueryVariables>;
export const CreateAgencyInNewAgencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyInNewAgency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyInNewAgencyMutation, CreateAgencyInNewAgencyMutationVariables>;
export const GetScheduledPaymentsInPaymentScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetScheduledPaymentsInPaymentSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getScheduledPaymentsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetScheduledPaymentsInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getActualPaymentsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetActualPaymentsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getScheduledPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getScheduledPaymentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scheduled_payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"payment"}},{"kind":"Field","name":{"kind":"Name","value":"scheduled_payment_type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getActualPayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getActualPaymentsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actual_payments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"payment"}}]}}]}}]}}]} as unknown as DocumentNode<GetScheduledPaymentsInPaymentScheduleQuery, GetScheduledPaymentsInPaymentScheduleQueryVariables>;
export const GetObjectsInNewAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetObjectsInNewAgencyContract"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getObjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetObjectsInNewAgencyContractQuery, GetObjectsInNewAgencyContractQueryVariables>;
export const GetAgencyContractInRealEstateAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgencyContractInRealEstateAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency_contract_signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"based_on"}}]}},{"kind":"Field","name":{"kind":"Name","value":"real_estate_agency_contract_properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agency_contract_commission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"max_days"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"responsible_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAgencyContractInRealEstateAgencyContractQuery, GetAgencyContractInRealEstateAgencyContractQueryVariables>;
export const CreateAgencyContractInNewAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgencyContractInNewAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAgencyContractInNewAgencyContractMutation, CreateAgencyContractInNewAgencyContractMutationVariables>;
export const UpdateAgencyContractInNewAgencyContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAgencyContractInNewAgencyContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAgencyContractInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAgencyContract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateAgencyContractInNewAgencyContractMutation, UpdateAgencyContractInNewAgencyContractMutationVariables>;
export const GetRealEstateAgentInRealEstateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgentInRealEstateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"real_estate_agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"agencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_db_contractors_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"inn"}}]}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgentInRealEstateAgentQuery, GetRealEstateAgentInRealEstateAgentQueryVariables>;
export const CreateRealEstateAgentInNewRealEstateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRealEstateAgentInNewRealEstateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRealEstateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRealEstateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRealEstateAgentInNewRealEstateAgentMutation, CreateRealEstateAgentInNewRealEstateAgentMutationVariables>;
export const UpdateRealEstateAgentInRealEstateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRealEstateAgentInRealEstateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateRealEstateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRealEstateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}}]}}]}}]} as unknown as DocumentNode<UpdateRealEstateAgentInRealEstateAgentMutation, UpdateRealEstateAgentInRealEstateAgentMutationVariables>;
export const GetRealEstateAgentsInRealEstateAgentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRealEstateAgentsInRealEstateAgents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetRealEstateAgentsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRealEstateAgents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"real_estate_agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"real_estate_agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_count"}}]}}]}}]} as unknown as DocumentNode<GetRealEstateAgentsInRealEstateAgentsQuery, GetRealEstateAgentsInRealEstateAgentsQueryVariables>;