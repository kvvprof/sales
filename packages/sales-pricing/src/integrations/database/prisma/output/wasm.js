
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

exports.Prisma.Floor_pricing_rulesScalarFieldEnum = {
  id: 'id',
  floor_id: 'floor_id',
  product_type_id: 'product_type_id',
  price_per_square_meter: 'price_per_square_meter'
};

exports.Prisma.FloorsScalarFieldEnum = {
  id: 'id',
  number: 'number',
  section_id: 'section_id'
};

exports.Prisma.Integration_sourcesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.IntegrationsScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  source_id: 'source_id',
  source_product_id: 'source_product_id'
};

exports.Prisma.ObjectsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  common_db_object_id: 'common_db_object_id'
};

exports.Prisma.Product_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Product_filesScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  type: 'type',
  path: 'path'
};

exports.Prisma.Product_meter_numbersScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  electricity: 'electricity',
  heating: 'heating',
  hot_water: 'hot_water',
  cold_water: 'cold_water'
};

exports.Prisma.Product_price_historyScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  price: 'price',
  created_at: 'created_at'
};

exports.Prisma.Product_pricing_rulesScalarFieldEnum = {
  id: 'id',
  product_type_id: 'product_type_id',
  step_number: 'step_number',
  price_per_square_meter: 'price_per_square_meter',
  flats_percent: 'flats_percent',
  planned_days: 'planned_days'
};

exports.Prisma.Product_typesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  object_id: 'object_id'
};

exports.Prisma.ProductsScalarFieldEnum = {
  id: 'id',
  number: 'number',
  area: 'area',
  price: 'price',
  one_gt_id: 'one_gt_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  object_id: 'object_id',
  product_type_id: 'product_type_id',
  category_id: 'category_id',
  floor_id: 'floor_id'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.R_product_tagsScalarFieldEnum = {
  id: 'id',
  product_id: 'product_id',
  tag_id: 'tag_id'
};

exports.Prisma.R_tags_categoriesScalarFieldEnum = {
  id: 'id',
  tag_id: 'tag_id',
  category_id: 'category_id'
};

exports.Prisma.R_tags_objectsScalarFieldEnum = {
  id: 'id',
  tag_id: 'tag_id',
  object_id: 'object_id'
};

exports.Prisma.R_tags_product_typesScalarFieldEnum = {
  id: 'id',
  tag_id: 'tag_id',
  product_type_id: 'product_type_id'
};

exports.Prisma.R_tags_productsScalarFieldEnum = {
  id: 'id',
  tag_id: 'tag_id',
  product_id: 'product_id'
};

exports.Prisma.R_tags_projectsScalarFieldEnum = {
  id: 'id',
  tag_id: 'tag_id',
  project_id: 'project_id'
};

exports.Prisma.SectionsScalarFieldEnum = {
  id: 'id',
  number: 'number',
  object_id: 'object_id'
};

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.product_files_type = exports.$Enums.product_files_type = {
  EXPLICATION: 'EXPLICATION'
};

exports.Prisma.ModelName = {
  floor_pricing_rules: 'floor_pricing_rules',
  floors: 'floors',
  integration_sources: 'integration_sources',
  integrations: 'integrations',
  objects: 'objects',
  product_categories: 'product_categories',
  product_files: 'product_files',
  product_meter_numbers: 'product_meter_numbers',
  product_price_history: 'product_price_history',
  product_pricing_rules: 'product_pricing_rules',
  product_types: 'product_types',
  products: 'products',
  projects: 'projects',
  r_product_tags: 'r_product_tags',
  r_tags_categories: 'r_tags_categories',
  r_tags_objects: 'r_tags_objects',
  r_tags_product_types: 'r_tags_product_types',
  r_tags_products: 'r_tags_products',
  r_tags_projects: 'r_tags_projects',
  sections: 'sections',
  tags: 'tags'
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
