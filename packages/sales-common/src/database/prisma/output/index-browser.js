
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

exports.Prisma.AccountsScalarFieldEnum = {
  id: 'id',
  number: 'number',
  bank_id: 'bank_id',
  contractors_id: 'contractors_id'
};

exports.Prisma.App_groupsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ApplicationsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  active: 'active',
  type: 'type',
  path: 'path',
  description: 'description',
  app_group_id: 'app_group_id'
};

exports.Prisma.BanksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  city: 'city',
  bik: 'bik',
  correspondent_number: 'correspondent_number'
};

exports.Prisma.Banks_itemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  order_num: 'order_num',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  banks_pakets_id: 'banks_pakets_id',
  propogated_at: 'propogated_at',
  version_id: 'version_id'
};

exports.Prisma.Banks_paketsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  order_num: 'order_num',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  propogated_at: 'propogated_at'
};

exports.Prisma.BlocksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  order_num: 'order_num',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at',
  propogated_at: 'propogated_at'
};

exports.Prisma.ContractorsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  short_name: 'short_name',
  inn: 'inn',
  kpp: 'kpp',
  ogrn: 'ogrn',
  legal_address: 'legal_address',
  actual_address: 'actual_address',
  contacts: 'contacts',
  reconciliation_link: 'reconciliation_link',
  is_active: 'is_active',
  propogated_at: 'propogated_at',
  created_at: 'created_at',
  updated_at: 'updated_at',
  phone: 'phone'
};

exports.Prisma.FloorsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  section_id: 'section_id'
};

exports.Prisma.ItemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  clc_code: 'clc_code',
  order_num: 'order_num',
  is_active: 'is_active',
  sub_pakets_id: 'sub_pakets_id',
  banks_items_id: 'banks_items_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  propogated_at: 'propogated_at'
};

exports.Prisma.ObjectsScalarFieldEnum = {
  id: 'id',
  short_name: 'short_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  entity_id: 'entity_id'
};

exports.Prisma.PaketsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  order_num: 'order_num',
  is_active: 'is_active',
  blocks_id: 'blocks_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  propogated_at: 'propogated_at'
};

exports.Prisma.R_roles_appsScalarFieldEnum = {
  role_id: 'role_id',
  app_id: 'app_id'
};

exports.Prisma.R_users_client_contractorsScalarFieldEnum = {
  id: 'id',
  contractors_id: 'contractors_id',
  users_client_id: 'users_client_id'
};

exports.Prisma.R_users_rolesScalarFieldEnum = {
  user_id: 'user_id',
  role_id: 'role_id'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Roles_clientScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SectionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  object_id: 'object_id',
  created_at: 'created_at',
  updated_ad: 'updated_ad'
};

exports.Prisma.Sub_paketsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  order_num: 'order_num',
  is_active: 'is_active',
  pakets_id: 'pakets_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  propogated_at: 'propogated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password',
  email: 'email'
};

exports.Prisma.Users_clientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  role_id: 'role_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Banks_items_versionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_active: 'is_active',
  bank_id: 'bank_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.EntitiesScalarFieldEnum = {
  id: 'id',
  str_id: 'str_id',
  name: 'name',
  short_name: 'short_name',
  display_name: 'display_name',
  inn: 'inn',
  kpp: 'kpp',
  ogrn: 'ogrn',
  db_name: 'db_name'
};

exports.Prisma.R_items_banks_itemsScalarFieldEnum = {
  item_id: 'item_id',
  bank_item_id: 'bank_item_id',
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
exports.applications_type = exports.$Enums.applications_type = {
  retool: 'retool',
  next: 'next',
  next_client: 'next_client'
};

exports.Prisma.ModelName = {
  accounts: 'accounts',
  app_groups: 'app_groups',
  applications: 'applications',
  banks: 'banks',
  banks_items: 'banks_items',
  banks_pakets: 'banks_pakets',
  blocks: 'blocks',
  contractors: 'contractors',
  floors: 'floors',
  items: 'items',
  objects: 'objects',
  pakets: 'pakets',
  r_roles_apps: 'r_roles_apps',
  r_users_client_contractors: 'r_users_client_contractors',
  r_users_roles: 'r_users_roles',
  roles: 'roles',
  roles_client: 'roles_client',
  sections: 'sections',
  sub_pakets: 'sub_pakets',
  users: 'users',
  users_client: 'users_client',
  banks_items_versions: 'banks_items_versions',
  entities: 'entities',
  r_items_banks_items: 'r_items_banks_items'
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
