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
  Office = 'OFFICE',
  Pantry = 'PANTRY',
  Parking = 'PARKING',
  ParkingSpace = 'PARKING_SPACE'
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

export type CreateUserInAuthMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserInAuthMutation = { __typename?: 'Mutation', createUser: { __typename?: 'BasicUser', id: any, full_name: any, email: any, phone?: any | null, is_manager: boolean, user_role: UserRole } };


export const CreateUserInAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserInAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"is_manager"}},{"kind":"Field","name":{"kind":"Name","value":"user_role"}}]}}]}}]} as unknown as DocumentNode<CreateUserInAuthMutation, CreateUserInAuthMutationVariables>;