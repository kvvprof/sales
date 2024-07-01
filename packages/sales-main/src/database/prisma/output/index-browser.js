
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  email: 'email',
  phone: 'phone',
  is_manager: 'is_manager',
  user_role: 'user_role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ClientScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  inn: 'inn',
  phone: 'phone',
  email: 'email',
  address: 'address',
  client_category: 'client_category',
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_individual_properties_id: 'client_individual_properties_id',
  client_individual_minor_properties_id: 'client_individual_minor_properties_id',
  client_entity_properties_id: 'client_entity_properties_id'
};

exports.Prisma.ClientIndividualPropertiesScalarFieldEnum = {
  id: 'id',
  dob: 'dob',
  snils: 'snils',
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_passport_id: 'client_passport_id'
};

exports.Prisma.ClientIndividualMinorPropertiesScalarFieldEnum = {
  id: 'id',
  dob: 'dob',
  snils: 'snils',
  birth_certificate: 'birth_certificate',
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_passport_id: 'client_passport_id'
};

exports.Prisma.ClientEntityPropertiesScalarFieldEnum = {
  id: 'id',
  kpp: 'kpp',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ClientToClientIndividualMinorPropertiesScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_id: 'client_id',
  client_individual_minor_properties_id: 'client_individual_minor_properties_id'
};

exports.Prisma.ClientPassportScalarFieldEnum = {
  id: 'id',
  number: 'number',
  issued: 'issued',
  code: 'code',
  place_of_birth: 'place_of_birth',
  registration_address: 'registration_address',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ClientContractScalarFieldEnum = {
  id: 'id',
  number: 'number',
  date: 'date',
  registration_date: 'registration_date',
  price: 'price',
  client_contract_type: 'client_contract_type',
  created_at: 'created_at',
  updated_at: 'updated_at',
  object_id: 'object_id',
  product_id: 'product_id',
  real_estate_agent_id: 'real_estate_agent_id',
  manager_id: 'manager_id',
  bank_id: 'bank_id',
  ddu_client_contract_properties_id: 'ddu_client_contract_properties_id'
};

exports.Prisma.DDUClientContractPropertiesScalarFieldEnum = {
  id: 'id',
  ddu_link: 'ddu_link',
  return_account: 'return_account',
  escrow_account_opening_date: 'escrow_account_opening_date',
  escrow_period: 'escrow_period',
  escrow_account_number: 'escrow_account_number',
  is_escrow_discount: 'is_escrow_discount',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ClientContractToAgencyContractScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_contract_id: 'client_contract_id',
  agency_contract_id: 'agency_contract_id'
};

exports.Prisma.ClientContractToClientScalarFieldEnum = {
  is_main: 'is_main',
  share: 'share',
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_contract_id: 'client_contract_id',
  client_id: 'client_id'
};

exports.Prisma.ScheduledPaymentScalarFieldEnum = {
  id: 'id',
  payment: 'payment',
  date: 'date',
  scheduled_payment_type: 'scheduled_payment_type',
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_contract_id: 'client_contract_id'
};

exports.Prisma.ActualPaymentScalarFieldEnum = {
  id: 'id',
  payment: 'payment',
  date: 'date',
  created_at: 'created_at',
  updated_at: 'updated_at',
  client_contract_id: 'client_contract_id'
};

exports.Prisma.ObjectScalarFieldEnum = {
  id: 'id',
  common_db_objects_id: 'common_db_objects_id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  entity_id: 'entity_id'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  pricing_products_id: 'pricing_products_id',
  number: 'number',
  product_category: 'product_category',
  created_at: 'created_at',
  updated_at: 'updated_at',
  object_id: 'object_id'
};

exports.Prisma.AgencyScalarFieldEnum = {
  id: 'id',
  common_db_contractors_id: 'common_db_contractors_id',
  name: 'name',
  inn: 'inn',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AgencyContractScalarFieldEnum = {
  id: 'id',
  number: 'number',
  date: 'date',
  agency_contract_type: 'agency_contract_type',
  created_at: 'created_at',
  updated_at: 'updated_at',
  responsible_user_id: 'responsible_user_id',
  entity_id: 'entity_id',
  object_id: 'object_id',
  agency_id: 'agency_id',
  agency_contract_signatory_id: 'agency_contract_signatory_id',
  real_estate_agency_contract_properties_id: 'real_estate_agency_contract_properties_id',
  mip_agency_contract_properties_id: 'mip_agency_contract_properties_id'
};

exports.Prisma.AgencyContractSignatoryScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  email: 'email',
  phone: 'phone',
  title: 'title',
  based_on: 'based_on',
  created_at: 'created_at',
  updated_at: 'updated_at',
  agency_id: 'agency_id'
};

exports.Prisma.RealEstateAgencyContractPropertiesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  agency_contract_commission_id: 'agency_contract_commission_id'
};

exports.Prisma.MIPAgencyContractPropertiesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  agency_contract_commission_id: 'agency_contract_commission_id'
};

exports.Prisma.AgencyContractCommissionScalarFieldEnum = {
  id: 'id',
  percent: 'percent',
  threshold: 'threshold',
  max_days: 'max_days',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RealEstateAgentScalarFieldEnum = {
  id: 'id',
  full_name: 'full_name',
  phone: 'phone',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AgencyToRealEstateAgentScalarFieldEnum = {
  created_at: 'created_at',
  updated_at: 'updated_at',
  agency_id: 'agency_id',
  real_estate_agent_id: 'real_estate_agent_id'
};

exports.Prisma.EntityScalarFieldEnum = {
  id: 'id',
  common_db_entities_id: 'common_db_entities_id',
  name: 'name',
  website: 'website',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.EntityForbiddenWebsiteScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  entity_id: 'entity_id'
};

exports.Prisma.EntityForbiddenBrandScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  entity_id: 'entity_id'
};

exports.Prisma.BankScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMINISTRATOR: 'ADMINISTRATOR',
  DIRECTOR: 'DIRECTOR',
  SALES_EMPLOYEE: 'SALES_EMPLOYEE'
};

exports.ClientCategory = exports.$Enums.ClientCategory = {
  INDIVIDUAL: 'INDIVIDUAL',
  INDIVIDUAL_MINOR: 'INDIVIDUAL_MINOR',
  ENTITY: 'ENTITY'
};

exports.ClientContractType = exports.$Enums.ClientContractType = {
  DDU: 'DDU',
  DKP: 'DKP'
};

exports.ScheduledPaymentType = exports.$Enums.ScheduledPaymentType = {
  OWN: 'OWN',
  MORTGAGE: 'MORTGAGE',
  EXCHANGE: 'EXCHANGE',
  MATERNITY_CAPITAL: 'MATERNITY_CAPITAL'
};

exports.ProductCategory = exports.$Enums.ProductCategory = {
  FLAT: 'FLAT',
  OFFICE: 'OFFICE',
  APARTMENT: 'APARTMENT',
  STORAGE_ROOM: 'STORAGE_ROOM',
  PARKING_SPACE: 'PARKING_SPACE'
};

exports.AgencyContractType = exports.$Enums.AgencyContractType = {
  REAL_ESTATE_AGENCY_CONTRACT: 'REAL_ESTATE_AGENCY_CONTRACT',
  MIP_AGENCY_CONTRACT: 'MIP_AGENCY_CONTRACT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Client: 'Client',
  ClientIndividualProperties: 'ClientIndividualProperties',
  ClientIndividualMinorProperties: 'ClientIndividualMinorProperties',
  ClientEntityProperties: 'ClientEntityProperties',
  ClientToClientIndividualMinorProperties: 'ClientToClientIndividualMinorProperties',
  ClientPassport: 'ClientPassport',
  ClientContract: 'ClientContract',
  DDUClientContractProperties: 'DDUClientContractProperties',
  ClientContractToAgencyContract: 'ClientContractToAgencyContract',
  ClientContractToClient: 'ClientContractToClient',
  ScheduledPayment: 'ScheduledPayment',
  ActualPayment: 'ActualPayment',
  Object: 'Object',
  Product: 'Product',
  Agency: 'Agency',
  AgencyContract: 'AgencyContract',
  AgencyContractSignatory: 'AgencyContractSignatory',
  RealEstateAgencyContractProperties: 'RealEstateAgencyContractProperties',
  MIPAgencyContractProperties: 'MIPAgencyContractProperties',
  AgencyContractCommission: 'AgencyContractCommission',
  RealEstateAgent: 'RealEstateAgent',
  AgencyToRealEstateAgent: 'AgencyToRealEstateAgent',
  Entity: 'Entity',
  EntityForbiddenWebsite: 'EntityForbiddenWebsite',
  EntityForbiddenBrand: 'EntityForbiddenBrand',
  Bank: 'Bank'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
