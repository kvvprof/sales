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

export const AgencyContractType = {
  MipAgencyContract: 'MIP_AGENCY_CONTRACT',
  RealEstateAgencyContract: 'REAL_ESTATE_AGENCY_CONTRACT'
} as const;

export type AgencyContractType = typeof AgencyContractType[keyof typeof AgencyContractType];
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

export const ClientCategory = {
  Entity: 'ENTITY',
  Individual: 'INDIVIDUAL',
  IndividualMinor: 'INDIVIDUAL_MINOR'
} as const;

export type ClientCategory = typeof ClientCategory[keyof typeof ClientCategory];
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

export const ClientContractType = {
  Ddu: 'DDU',
  Dkp: 'DKP'
} as const;

export type ClientContractType = typeof ClientContractType[keyof typeof ClientContractType];
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

export type GetObjectInput = {
  id: Scalars['PositiveInt']['input'];
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
  getClients: Clients;
  getEntities: Array<Entity>;
  getObject: BasicObject;
  getObjects: Array<BasicObject>;
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


export type QueryGetObjectArgs = {
  input: GetObjectInput;
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

export const ScheduledPaymentType = {
  Exchange: 'EXCHANGE',
  MaternityCapital: 'MATERNITY_CAPITAL',
  Mortgage: 'MORTGAGE',
  Own: 'OWN'
} as const;

export type ScheduledPaymentType = typeof ScheduledPaymentType[keyof typeof ScheduledPaymentType];
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
  BasicDDUClientContractProperties: ResolverTypeWrapper<BasicDduClientContractProperties>;
  BasicEntity: ResolverTypeWrapper<BasicEntity>;
  BasicMIPAgencyContractProperties: ResolverTypeWrapper<BasicMipAgencyContractProperties>;
  BasicObject: ResolverTypeWrapper<BasicObject>;
  BasicOptionsInput: BasicOptionsInput;
  BasicProduct: ResolverTypeWrapper<BasicProduct>;
  BasicRealEstateAgencyContractProperties: ResolverTypeWrapper<BasicRealEstateAgencyContractProperties>;
  BasicRealEstateAgent: ResolverTypeWrapper<BasicRealEstateAgent>;
  BasicScheduledPayment: ResolverTypeWrapper<BasicScheduledPayment>;
  BasicUser: ResolverTypeWrapper<BasicUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Client: ResolverTypeWrapper<Client>;
  ClientCategory: ClientCategory;
  ClientContract: ResolverTypeWrapper<ClientContract>;
  ClientContractToClientInput: ClientContractToClientInput;
  ClientContractType: ClientContractType;
  ClientContracts: ResolverTypeWrapper<ClientContracts>;
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
  CreateClientContractInput: CreateClientContractInput;
  CreateClientContractPropertiesInput: CreateClientContractPropertiesInput;
  CreateClientInput: CreateClientInput;
  CreateClientPropertiesInput: CreateClientPropertiesInput;
  CreateProductInput: CreateProductInput;
  CreateRealEstateAgentInput: CreateRealEstateAgentInput;
  CreateScheduledPaymentInput: CreateScheduledPaymentInput;
  CreateUserInput: CreateUserInput;
  DDUClientContractPropertiesInput: DduClientContractPropertiesInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  Entity: ResolverTypeWrapper<Entity>;
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
  GetObjectInput: GetObjectInput;
  GetRealEstateAgentInput: GetRealEstateAgentInput;
  GetRealEstateAgentsInput: GetRealEstateAgentsInput;
  GetScheduledPaymentsInput: GetScheduledPaymentsInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  MIPAgencyContractPropertiesInput: MipAgencyContractPropertiesInput;
  Mutation: ResolverTypeWrapper<{}>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeDecimal: ResolverTypeWrapper<Scalars['NonNegativeDecimal']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  PositiveDecimal: ResolverTypeWrapper<Scalars['PositiveDecimal']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  Product: ResolverTypeWrapper<Product>;
  ProductCategory: ProductCategory;
  Query: ResolverTypeWrapper<{}>;
  RealEstateAgencyContractPropertiesInput: RealEstateAgencyContractPropertiesInput;
  RealEstateAgent: ResolverTypeWrapper<RealEstateAgent>;
  RealEstateAgents: ResolverTypeWrapper<RealEstateAgents>;
  ScheduledPaymentType: ScheduledPaymentType;
  ScheduledPayments: ResolverTypeWrapper<ScheduledPayments>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateAgencyContractInput: UpdateAgencyContractInput;
  UpdateAgencyContractPropertiesInput: UpdateAgencyContractPropertiesInput;
  UpdateClientContractInput: UpdateClientContractInput;
  UpdateClientContractPropertiesInput: UpdateClientContractPropertiesInput;
  UpdateClientInput: UpdateClientInput;
  UpdateClientPropertiesInput: UpdateClientPropertiesInput;
  UpdateRealEstateAgentInput: UpdateRealEstateAgentInput;
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
  BasicDDUClientContractProperties: BasicDduClientContractProperties;
  BasicEntity: BasicEntity;
  BasicMIPAgencyContractProperties: BasicMipAgencyContractProperties;
  BasicObject: BasicObject;
  BasicOptionsInput: BasicOptionsInput;
  BasicProduct: BasicProduct;
  BasicRealEstateAgencyContractProperties: BasicRealEstateAgencyContractProperties;
  BasicRealEstateAgent: BasicRealEstateAgent;
  BasicScheduledPayment: BasicScheduledPayment;
  BasicUser: BasicUser;
  Boolean: Scalars['Boolean']['output'];
  Client: Client;
  ClientContract: ClientContract;
  ClientContractToClientInput: ClientContractToClientInput;
  ClientContracts: ClientContracts;
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
  CreateClientContractInput: CreateClientContractInput;
  CreateClientContractPropertiesInput: CreateClientContractPropertiesInput;
  CreateClientInput: CreateClientInput;
  CreateClientPropertiesInput: CreateClientPropertiesInput;
  CreateProductInput: CreateProductInput;
  CreateRealEstateAgentInput: CreateRealEstateAgentInput;
  CreateScheduledPaymentInput: CreateScheduledPaymentInput;
  CreateUserInput: CreateUserInput;
  DDUClientContractPropertiesInput: DduClientContractPropertiesInput;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  Decimal: Scalars['Decimal']['output'];
  Entity: Entity;
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
  GetObjectInput: GetObjectInput;
  GetRealEstateAgentInput: GetRealEstateAgentInput;
  GetRealEstateAgentsInput: GetRealEstateAgentsInput;
  GetScheduledPaymentsInput: GetScheduledPaymentsInput;
  JSON: Scalars['JSON']['output'];
  MIPAgencyContractPropertiesInput: MipAgencyContractPropertiesInput;
  Mutation: {};
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeDecimal: Scalars['NonNegativeDecimal']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  PositiveDecimal: Scalars['PositiveDecimal']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
  Product: Product;
  Query: {};
  RealEstateAgencyContractPropertiesInput: RealEstateAgencyContractPropertiesInput;
  RealEstateAgent: RealEstateAgent;
  RealEstateAgents: RealEstateAgents;
  ScheduledPayments: ScheduledPayments;
  String: Scalars['String']['output'];
  UpdateAgencyContractInput: UpdateAgencyContractInput;
  UpdateAgencyContractPropertiesInput: UpdateAgencyContractPropertiesInput;
  UpdateClientContractInput: UpdateClientContractInput;
  UpdateClientContractPropertiesInput: UpdateClientContractPropertiesInput;
  UpdateClientInput: UpdateClientInput;
  UpdateClientPropertiesInput: UpdateClientPropertiesInput;
  UpdateRealEstateAgentInput: UpdateRealEstateAgentInput;
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
  actual_payments?: Resolver<Array<ResolversTypes['BasicActualPayment']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgenciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agencies'] = ResolversParentTypes['Agencies']> = {
  agencies?: Resolver<Array<ResolversTypes['BasicAgency']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agency'] = ResolversParentTypes['Agency']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agency_contracts?: Resolver<Maybe<Array<ResolversTypes['BasicAgencyContract']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgencyContract'] = ResolversParentTypes['AgencyContract']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agency_contract_properties?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType>;
  agency_contract_signatory?: Resolver<Maybe<ResolversTypes['BasicAgencyContractSignatory']>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['BasicEntity'], ParentType, ContextType>;
  mip_agency_contract_properties?: Resolver<Maybe<ResolversTypes['BasicMIPAgencyContractProperties']>, ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  real_estate_agency_contract_properties?: Resolver<Maybe<ResolversTypes['BasicRealEstateAgencyContractProperties']>, ParentType, ContextType>;
  responsible_user?: Resolver<Maybe<ResolversTypes['BasicUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgencyContractClientContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgencyContractClientContract'] = ResolversParentTypes['AgencyContractClientContract']> = {
  agency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType>;
  agency_contract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicActualPaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicActualPayment'] = ResolversParentTypes['BasicActualPayment']> = {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgency'] = ResolversParentTypes['BasicAgency']> = {
  common_db_contractors_id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  inn?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgencyContract'] = ResolversParentTypes['BasicAgencyContract']> = {
  agency_contract_type?: Resolver<ResolversTypes['AgencyContractType'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyContractCommissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgencyContractCommission'] = ResolversParentTypes['BasicAgencyContractCommission']> = {
  max_days?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  threshold?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicAgencyContractSignatoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicAgencyContractSignatory'] = ResolversParentTypes['BasicAgencyContractSignatory']> = {
  based_on?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  full_name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicBankResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicBank'] = ResolversParentTypes['BasicBank']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClient'] = ResolversParentTypes['BasicClient']> = {
  address?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  client_category?: Resolver<ResolversTypes['ClientCategory'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  full_name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  inn?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientContract'] = ResolversParentTypes['BasicClientContract']> = {
  client_contract_type?: Resolver<ResolversTypes['ClientContractType'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['PositiveDecimal'], ParentType, ContextType>;
  registration_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientContractToClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientContractToClient'] = ResolversParentTypes['BasicClientContractToClient']> = {
  client?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType>;
  is_main?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  share?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientEntityPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientEntityProperties'] = ResolversParentTypes['BasicClientEntityProperties']> = {
  kpp?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientIndividualMinorPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientIndividualMinorProperties'] = ResolversParentTypes['BasicClientIndividualMinorProperties']> = {
  birth_certificate?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  client_passport?: Resolver<Maybe<ResolversTypes['BasicClientPassport']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  representatives?: Resolver<Maybe<Array<ResolversTypes['BasicClient']>>, ParentType, ContextType>;
  snils?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientIndividualPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientIndividualProperties'] = ResolversParentTypes['BasicClientIndividualProperties']> = {
  client_passport?: Resolver<Maybe<ResolversTypes['BasicClientPassport']>, ParentType, ContextType>;
  dob?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  snils?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicClientPassportResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicClientPassport'] = ResolversParentTypes['BasicClientPassport']> = {
  code?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  issued?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  place_of_birth?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  registration_address?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicDduClientContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicDDUClientContractProperties'] = ResolversParentTypes['BasicDDUClientContractProperties']> = {
  ddu_link?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  escrow_account_number?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  escrow_account_opening_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  escrow_period?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  is_escrow_discount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  return_account?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicEntity'] = ResolversParentTypes['BasicEntity']> = {
  common_db_entities_id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicMipAgencyContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicMIPAgencyContractProperties'] = ResolversParentTypes['BasicMIPAgencyContractProperties']> = {
  agency_contract_commission?: Resolver<ResolversTypes['BasicAgencyContractCommission'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicObject'] = ResolversParentTypes['BasicObject']> = {
  common_db_objects_id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicProduct'] = ResolversParentTypes['BasicProduct']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  pricing_products_id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['ProductCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicRealEstateAgencyContractPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicRealEstateAgencyContractProperties'] = ResolversParentTypes['BasicRealEstateAgencyContractProperties']> = {
  agency_contract_commission?: Resolver<ResolversTypes['BasicAgencyContractCommission'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicRealEstateAgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicRealEstateAgent'] = ResolversParentTypes['BasicRealEstateAgent']> = {
  full_name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicScheduledPaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicScheduledPayment'] = ResolversParentTypes['BasicScheduledPayment']> = {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['PositiveDecimal'], ParentType, ContextType>;
  scheduled_payment_type?: Resolver<ResolversTypes['ScheduledPaymentType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicUser'] = ResolversParentTypes['BasicUser']> = {
  email?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  full_name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  is_manager?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
  user_role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  client_entity_properties?: Resolver<Maybe<ResolversTypes['BasicClientEntityProperties']>, ParentType, ContextType>;
  client_individual_minor_properties?: Resolver<Maybe<ResolversTypes['BasicClientIndividualMinorProperties']>, ParentType, ContextType>;
  client_individual_properties?: Resolver<Maybe<ResolversTypes['BasicClientIndividualProperties']>, ParentType, ContextType>;
  client_properties?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContract'] = ResolversParentTypes['ClientContract']> = {
  agency_contracts?: Resolver<Maybe<Array<Maybe<ResolversTypes['AgencyContractClientContract']>>>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['BasicBank']>, ParentType, ContextType>;
  client_contract_properties?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType>;
  clients?: Resolver<Array<ResolversTypes['BasicClientContractToClient']>, ParentType, ContextType>;
  ddu_client_contract_properties?: Resolver<Maybe<ResolversTypes['BasicDDUClientContractProperties']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['BasicUser']>, ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  real_estate_agent?: Resolver<Maybe<ResolversTypes['BasicRealEstateAgent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientContractsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClientContracts'] = ResolversParentTypes['ClientContracts']> = {
  client_contracts?: Resolver<Array<ResolversTypes['ClientContract']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clients'] = ResolversParentTypes['Clients']> = {
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
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

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActualPayment?: Resolver<ResolversTypes['BasicActualPayment'], ParentType, ContextType, RequireFields<MutationCreateActualPaymentArgs, 'input'>>;
  createAgency?: Resolver<ResolversTypes['BasicAgency'], ParentType, ContextType, RequireFields<MutationCreateAgencyArgs, 'input'>>;
  createAgencyContract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType, RequireFields<MutationCreateAgencyContractArgs, 'input'>>;
  createAgencyContractSignatory?: Resolver<ResolversTypes['BasicAgencyContractSignatory'], ParentType, ContextType, RequireFields<MutationCreateAgencyContractSignatoryArgs, 'input'>>;
  createClient?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType, RequireFields<MutationCreateClientArgs, 'input'>>;
  createClientContract?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType, RequireFields<MutationCreateClientContractArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createRealEstateAgent?: Resolver<ResolversTypes['BasicRealEstateAgent'], ParentType, ContextType, RequireFields<MutationCreateRealEstateAgentArgs, 'input'>>;
  createScheduledPayment?: Resolver<ResolversTypes['BasicScheduledPayment'], ParentType, ContextType, RequireFields<MutationCreateScheduledPaymentArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['BasicUser'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateAgencyContract?: Resolver<ResolversTypes['BasicAgencyContract'], ParentType, ContextType, RequireFields<MutationUpdateAgencyContractArgs, 'input'>>;
  updateClient?: Resolver<ResolversTypes['BasicClient'], ParentType, ContextType, RequireFields<MutationUpdateClientArgs, 'input'>>;
  updateClientContract?: Resolver<ResolversTypes['BasicClientContract'], ParentType, ContextType, RequireFields<MutationUpdateClientContractArgs, 'input'>>;
  updateRealEstateAgent?: Resolver<ResolversTypes['BasicRealEstateAgent'], ParentType, ContextType, RequireFields<MutationUpdateRealEstateAgentArgs, 'input'>>;
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
  getClients?: Resolver<ResolversTypes['Clients'], ParentType, ContextType, Partial<QueryGetClientsArgs>>;
  getEntities?: Resolver<Array<ResolversTypes['Entity']>, ParentType, ContextType>;
  getObject?: Resolver<ResolversTypes['BasicObject'], ParentType, ContextType, RequireFields<QueryGetObjectArgs, 'input'>>;
  getObjects?: Resolver<Array<ResolversTypes['BasicObject']>, ParentType, ContextType>;
  getRealEstateAgent?: Resolver<ResolversTypes['RealEstateAgent'], ParentType, ContextType, RequireFields<QueryGetRealEstateAgentArgs, 'input'>>;
  getRealEstateAgents?: Resolver<ResolversTypes['RealEstateAgents'], ParentType, ContextType, Partial<QueryGetRealEstateAgentsArgs>>;
  getScheduledPayments?: Resolver<ResolversTypes['ScheduledPayments'], ParentType, ContextType, RequireFields<QueryGetScheduledPaymentsArgs, 'input'>>;
  getUsers?: Resolver<Array<ResolversTypes['BasicUser']>, ParentType, ContextType>;
};

export type RealEstateAgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['RealEstateAgent'] = ResolversParentTypes['RealEstateAgent']> = {
  agencies?: Resolver<Array<ResolversTypes['BasicAgency']>, ParentType, ContextType>;
  real_estate_agent?: Resolver<ResolversTypes['BasicRealEstateAgent'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RealEstateAgentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RealEstateAgents'] = ResolversParentTypes['RealEstateAgents']> = {
  real_estate_agents?: Resolver<Array<ResolversTypes['RealEstateAgent']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledPaymentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledPayments'] = ResolversParentTypes['ScheduledPayments']> = {
  scheduled_payments?: Resolver<Array<ResolversTypes['BasicScheduledPayment']>, ParentType, ContextType>;
  total_count?: Resolver<ResolversTypes['NonNegativeInt'], ParentType, ContextType>;
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
  BasicDDUClientContractProperties?: BasicDduClientContractPropertiesResolvers<ContextType>;
  BasicEntity?: BasicEntityResolvers<ContextType>;
  BasicMIPAgencyContractProperties?: BasicMipAgencyContractPropertiesResolvers<ContextType>;
  BasicObject?: BasicObjectResolvers<ContextType>;
  BasicProduct?: BasicProductResolvers<ContextType>;
  BasicRealEstateAgencyContractProperties?: BasicRealEstateAgencyContractPropertiesResolvers<ContextType>;
  BasicRealEstateAgent?: BasicRealEstateAgentResolvers<ContextType>;
  BasicScheduledPayment?: BasicScheduledPaymentResolvers<ContextType>;
  BasicUser?: BasicUserResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientContract?: ClientContractResolvers<ContextType>;
  ClientContracts?: ClientContractsResolvers<ContextType>;
  Clients?: ClientsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Entity?: EntityResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeDecimal?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  PositiveDecimal?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RealEstateAgent?: RealEstateAgentResolvers<ContextType>;
  RealEstateAgents?: RealEstateAgentsResolvers<ContextType>;
  ScheduledPayments?: ScheduledPaymentsResolvers<ContextType>;
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
