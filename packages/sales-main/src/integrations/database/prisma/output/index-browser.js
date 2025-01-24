
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
 * Prisma Client JS version: 5.15.1
 * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
 */
Prisma.prismaVersion = {
  client: "5.15.1",
  engine: "5675a3182f972f1a8f31d16eee6abf4fd54910e3"
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
  fullName: 'fullName',
  email: 'email',
  phone: 'phone',
  isManager: 'isManager',
  isStaff: 'isStaff',
  userRole: 'userRole',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  inn: 'inn',
  phone: 'phone',
  email: 'email',
  address: 'address',
  clientCategory: 'clientCategory',
  clientIndividualPropertiesId: 'clientIndividualPropertiesId',
  clientIndividualMinorPropertiesId: 'clientIndividualMinorPropertiesId',
  clientEntityPropertiesId: 'clientEntityPropertiesId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientIndividualPropertiesScalarFieldEnum = {
  id: 'id',
  dob: 'dob',
  snils: 'snils',
  clientPassportId: 'clientPassportId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientIndividualMinorPropertiesScalarFieldEnum = {
  id: 'id',
  dob: 'dob',
  snils: 'snils',
  birthCertificate: 'birthCertificate',
  clientPassportId: 'clientPassportId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientEntityPropertiesScalarFieldEnum = {
  id: 'id',
  kpp: 'kpp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientToClientIndividualMinorPropertiesScalarFieldEnum = {
  clientId: 'clientId',
  clientIndividualMinorPropertiesId: 'clientIndividualMinorPropertiesId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientPassportScalarFieldEnum = {
  id: 'id',
  number: 'number',
  issued: 'issued',
  code: 'code',
  placeOfBirth: 'placeOfBirth',
  registrationAddress: 'registrationAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientContractScalarFieldEnum = {
  id: 'id',
  number: 'number',
  date: 'date',
  registrationDate: 'registrationDate',
  price: 'price',
  clientContractType: 'clientContractType',
  isRealEstateAgencyActDisabled: 'isRealEstateAgencyActDisabled',
  isTransferActDisabled: 'isTransferActDisabled',
  comment: 'comment',
  link: 'link',
  uuContractId: 'uuContractId',
  dduClientContractPropertiesId: 'dduClientContractPropertiesId',
  dkpClientContractPropertiesId: 'dkpClientContractPropertiesId',
  productId: 'productId',
  objectId: 'objectId',
  realEstateAgentId: 'realEstateAgentId',
  managerId: 'managerId',
  bankId: 'bankId',
  subsidyId: 'subsidyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DduClientContractPropertiesScalarFieldEnum = {
  id: 'id',
  dduLink: 'dduLink',
  returnAccount: 'returnAccount',
  escrowAccountOpeningDate: 'escrowAccountOpeningDate',
  escrowPeriod: 'escrowPeriod',
  escrowAccountNumber: 'escrowAccountNumber',
  isEscrowDiscount: 'isEscrowDiscount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DkpClientContractPropertiesScalarFieldEnum = {
  id: 'id',
  dkpLink: 'dkpLink',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientContractToAgencyContractScalarFieldEnum = {
  clientContractId: 'clientContractId',
  agencyContractId: 'agencyContractId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClientContractToClientScalarFieldEnum = {
  isMain: 'isMain',
  share: 'share',
  clientContractId: 'clientContractId',
  clientId: 'clientId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ScheduledPaymentScalarFieldEnum = {
  id: 'id',
  payment: 'payment',
  date: 'date',
  scheduledPaymentType: 'scheduledPaymentType',
  clientContractId: 'clientContractId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ActualPaymentScalarFieldEnum = {
  id: 'id',
  payment: 'payment',
  date: 'date',
  clientContractId: 'clientContractId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ObjectScalarFieldEnum = {
  id: 'id',
  commonDbObjectsId: 'commonDbObjectsId',
  name: 'name',
  dateIn: 'dateIn',
  entityId: 'entityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  pricingProductsId: 'pricingProductsId',
  number: 'number',
  productCategory: 'productCategory',
  objectId: 'objectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgencyScalarFieldEnum = {
  id: 'id',
  commonDbContractorsId: 'commonDbContractorsId',
  name: 'name',
  inn: 'inn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgencyContractScalarFieldEnum = {
  id: 'id',
  number: 'number',
  date: 'date',
  agencyContractType: 'agencyContractType',
  link: 'link',
  responsibleUserId: 'responsibleUserId',
  entityId: 'entityId',
  objectId: 'objectId',
  agencyId: 'agencyId',
  agencyContractSignatoryId: 'agencyContractSignatoryId',
  realEstateAgencyContractPropertiesId: 'realEstateAgencyContractPropertiesId',
  mipAgencyContractPropertiesId: 'mipAgencyContractPropertiesId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgencyContractSignatoryScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  basedOn: 'basedOn',
  title: 'title',
  agencyId: 'agencyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RealEstateAgencyContractPropertiesScalarFieldEnum = {
  id: 'id',
  agencyContractCommissionId: 'agencyContractCommissionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MipAgencyContractPropertiesScalarFieldEnum = {
  id: 'id',
  agencyContractCommissionId: 'agencyContractCommissionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgencyContractCommissionScalarFieldEnum = {
  id: 'id',
  percent: 'percent',
  threshold: 'threshold',
  maxDays: 'maxDays',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RealEstateAgentScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  phone: 'phone',
  oneGtId: 'oneGtId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AgencyToRealEstateAgentScalarFieldEnum = {
  agencyId: 'agencyId',
  realEstateAgentId: 'realEstateAgentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EntityScalarFieldEnum = {
  id: 'id',
  commonDbEntitiesId: 'commonDbEntitiesId',
  commonContractorId: 'commonContractorId',
  name: 'name',
  website: 'website',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EntityForbiddenWebsiteScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entityId: 'entityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EntityForbiddenBrandScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entityId: 'entityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BankScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isVisible: 'isVisible',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EscrowAccountHistoryScalarFieldEnum = {
  id: 'id',
  status: 'status',
  number: 'number',
  openingDate: 'openingDate',
  depositedAmount: 'depositedAmount',
  incomingBalance: 'incomingBalance',
  dateOfTransaction: 'dateOfTransaction',
  transactionAmount: 'transactionAmount',
  outgoingBalance: 'outgoingBalance',
  expirationDate: 'expirationDate',
  depositor: 'depositor',
  depositorInn: 'depositorInn',
  dduNumber: 'dduNumber',
  dduDate: 'dduDate',
  loanAgreementNumber: 'loanAgreementNumber',
  loanAgreementDate: 'loanAgreementDate',
  closingDate: 'closingDate',
  builderInn: 'builderInn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RealEstateAgencyActScalarFieldEnum = {
  id: 'id',
  number: 'number',
  date: 'date',
  amount: 'amount',
  retention: 'retention',
  note: 'note',
  link: 'link',
  clientContractId: 'clientContractId',
  agencyId: 'agencyId',
  agencyContractId: 'agencyContractId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubsidyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  isVisible: 'isVisible',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AssignmentScalarFieldEnum = {
  id: 'id',
  order: 'order',
  clientContractId: 'clientContractId',
  clientId: 'clientId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransferActScalarFieldEnum = {
  id: 'id',
  number: 'number',
  date: 'date',
  link: 'link',
  clientContractId: 'clientContractId',
  objectId: 'objectId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RepresentativeScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  attorneyNumber: 'attorneyNumber',
  attorneyDate: 'attorneyDate',
  authorizedBy: 'authorizedBy',
  authorizedRole: 'authorizedRole',
  clientId: 'clientId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransferActToRepresentativeScalarFieldEnum = {
  transferActId: 'transferActId',
  representativeId: 'representativeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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

exports.EscrowAccountStatus = exports.$Enums.EscrowAccountStatus = {
  OPENED: 'OPENED',
  CLOSED: 'CLOSED'
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
  DduClientContractProperties: 'DduClientContractProperties',
  DkpClientContractProperties: 'DkpClientContractProperties',
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
  MipAgencyContractProperties: 'MipAgencyContractProperties',
  AgencyContractCommission: 'AgencyContractCommission',
  RealEstateAgent: 'RealEstateAgent',
  AgencyToRealEstateAgent: 'AgencyToRealEstateAgent',
  Entity: 'Entity',
  EntityForbiddenWebsite: 'EntityForbiddenWebsite',
  EntityForbiddenBrand: 'EntityForbiddenBrand',
  Bank: 'Bank',
  EscrowAccountHistory: 'EscrowAccountHistory',
  RealEstateAgencyAct: 'RealEstateAgencyAct',
  Subsidy: 'Subsidy',
  Assignment: 'Assignment',
  TransferAct: 'TransferAct',
  Representative: 'Representative',
  TransferActToRepresentative: 'TransferActToRepresentative'
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
