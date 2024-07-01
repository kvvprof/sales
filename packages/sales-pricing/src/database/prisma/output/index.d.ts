
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Object
 * 
 */
export type Object = $Result.DefaultSelection<Prisma.$ObjectPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductCategory
 * 
 */
export type ProductCategory = $Result.DefaultSelection<Prisma.$ProductCategoryPayload>
/**
 * Model ProductType
 * 
 */
export type ProductType = $Result.DefaultSelection<Prisma.$ProductTypePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Objects
 * const objects = await prisma.object.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Objects
   * const objects = await prisma.object.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.object`: Exposes CRUD operations for the **Object** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Objects
    * const objects = await prisma.object.findMany()
    * ```
    */
  get object(): Prisma.ObjectDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productCategory`: Exposes CRUD operations for the **ProductCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCategories
    * const productCategories = await prisma.productCategory.findMany()
    * ```
    */
  get productCategory(): Prisma.ProductCategoryDelegate<ExtArgs>;

  /**
   * `prisma.productType`: Exposes CRUD operations for the **ProductType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.ProductTypeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Object: 'Object',
    Product: 'Product',
    ProductCategory: 'ProductCategory',
    ProductType: 'ProductType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'object' | 'product' | 'productCategory' | 'productType'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Object: {
        payload: Prisma.$ObjectPayload<ExtArgs>
        fields: Prisma.ObjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          findFirst: {
            args: Prisma.ObjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          findMany: {
            args: Prisma.ObjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>[]
          }
          create: {
            args: Prisma.ObjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          createMany: {
            args: Prisma.ObjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ObjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          update: {
            args: Prisma.ObjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          deleteMany: {
            args: Prisma.ObjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ObjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ObjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ObjectPayload>
          }
          aggregate: {
            args: Prisma.ObjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateObject>
          }
          groupBy: {
            args: Prisma.ObjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ObjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ObjectCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductCategory: {
        payload: Prisma.$ProductCategoryPayload<ExtArgs>
        fields: Prisma.ProductCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findFirst: {
            args: Prisma.ProductCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          findMany: {
            args: Prisma.ProductCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>[]
          }
          create: {
            args: Prisma.ProductCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          createMany: {
            args: Prisma.ProductCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          update: {
            args: Prisma.ProductCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductCategoryPayload>
          }
          aggregate: {
            args: Prisma.ProductCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductCategory>
          }
          groupBy: {
            args: Prisma.ProductCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductType: {
        payload: Prisma.$ProductTypePayload<ExtArgs>
        fields: Prisma.ProductTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findFirst: {
            args: Prisma.ProductTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findMany: {
            args: Prisma.ProductTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>[]
          }
          create: {
            args: Prisma.ProductTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          createMany: {
            args: Prisma.ProductTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          update: {
            args: Prisma.ProductTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          deleteMany: {
            args: Prisma.ProductTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          aggregate: {
            args: Prisma.ProductTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductType>
          }
          groupBy: {
            args: Prisma.ProductTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ObjectCountOutputType
   */

  export type ObjectCountOutputType = {
    products: number
    product_types: number
  }

  export type ObjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ObjectCountOutputTypeCountProductsArgs
    product_types?: boolean | ObjectCountOutputTypeCountProduct_typesArgs
  }

  // Custom InputTypes
  /**
   * ObjectCountOutputType without action
   */
  export type ObjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjectCountOutputType
     */
    select?: ObjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjectCountOutputType without action
   */
  export type ObjectCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * ObjectCountOutputType without action
   */
  export type ObjectCountOutputTypeCountProduct_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
  }


  /**
   * Count Type ProductCategoryCountOutputType
   */

  export type ProductCategoryCountOutputType = {
    products: number
  }

  export type ProductCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategoryCountOutputType
     */
    select?: ProductCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCategoryCountOutputType without action
   */
  export type ProductCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductTypeCountOutputType
   */

  export type ProductTypeCountOutputType = {
    products: number
  }

  export type ProductTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductTypeCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductTypeCountOutputType
     */
    select?: ProductTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductTypeCountOutputType without action
   */
  export type ProductTypeCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Object
   */

  export type AggregateObject = {
    _count: ObjectCountAggregateOutputType | null
    _avg: ObjectAvgAggregateOutputType | null
    _sum: ObjectSumAggregateOutputType | null
    _min: ObjectMinAggregateOutputType | null
    _max: ObjectMaxAggregateOutputType | null
  }

  export type ObjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ObjectSumAggregateOutputType = {
    id: number | null
  }

  export type ObjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ObjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ObjectCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ObjectAvgAggregateInputType = {
    id?: true
  }

  export type ObjectSumAggregateInputType = {
    id?: true
  }

  export type ObjectMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ObjectMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ObjectCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ObjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Object to aggregate.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Objects
    **/
    _count?: true | ObjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjectMaxAggregateInputType
  }

  export type GetObjectAggregateType<T extends ObjectAggregateArgs> = {
        [P in keyof T & keyof AggregateObject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObject[P]>
      : GetScalarType<T[P], AggregateObject[P]>
  }




  export type ObjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjectWhereInput
    orderBy?: ObjectOrderByWithAggregationInput | ObjectOrderByWithAggregationInput[]
    by: ObjectScalarFieldEnum[] | ObjectScalarFieldEnum
    having?: ObjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjectCountAggregateInputType | true
    _avg?: ObjectAvgAggregateInputType
    _sum?: ObjectSumAggregateInputType
    _min?: ObjectMinAggregateInputType
    _max?: ObjectMaxAggregateInputType
  }

  export type ObjectGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: ObjectCountAggregateOutputType | null
    _avg: ObjectAvgAggregateOutputType | null
    _sum: ObjectSumAggregateOutputType | null
    _min: ObjectMinAggregateOutputType | null
    _max: ObjectMaxAggregateOutputType | null
  }

  type GetObjectGroupByPayload<T extends ObjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjectGroupByOutputType[P]>
            : GetScalarType<T[P], ObjectGroupByOutputType[P]>
        }
      >
    >


  export type ObjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Object$productsArgs<ExtArgs>
    product_types?: boolean | Object$product_typesArgs<ExtArgs>
    _count?: boolean | ObjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["object"]>


  export type ObjectSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ObjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Object$productsArgs<ExtArgs>
    product_types?: boolean | Object$product_typesArgs<ExtArgs>
    _count?: boolean | ObjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ObjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Object"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      product_types: Prisma.$ProductTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["object"]>
    composites: {}
  }

  type ObjectGetPayload<S extends boolean | null | undefined | ObjectDefaultArgs> = $Result.GetResult<Prisma.$ObjectPayload, S>

  type ObjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObjectCountAggregateInputType | true
    }

  export interface ObjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Object'], meta: { name: 'Object' } }
    /**
     * Find zero or one Object that matches the filter.
     * @param {ObjectFindUniqueArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ObjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ObjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Object that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ObjectFindUniqueOrThrowArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ObjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ObjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Object that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectFindFirstArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ObjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ObjectFindFirstArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Object that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectFindFirstOrThrowArgs} args - Arguments to find a Object
     * @example
     * // Get one Object
     * const object = await prisma.object.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ObjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ObjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Objects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Objects
     * const objects = await prisma.object.findMany()
     * 
     * // Get first 10 Objects
     * const objects = await prisma.object.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objectWithIdOnly = await prisma.object.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ObjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ObjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Object.
     * @param {ObjectCreateArgs} args - Arguments to create a Object.
     * @example
     * // Create one Object
     * const Object = await prisma.object.create({
     *   data: {
     *     // ... data to create a Object
     *   }
     * })
     * 
    **/
    create<T extends ObjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ObjectCreateArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Objects.
     * @param {ObjectCreateManyArgs} args - Arguments to create many Objects.
     * @example
     * // Create many Objects
     * const object = await prisma.object.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ObjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ObjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Object.
     * @param {ObjectDeleteArgs} args - Arguments to delete one Object.
     * @example
     * // Delete one Object
     * const Object = await prisma.object.delete({
     *   where: {
     *     // ... filter to delete one Object
     *   }
     * })
     * 
    **/
    delete<T extends ObjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ObjectDeleteArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Object.
     * @param {ObjectUpdateArgs} args - Arguments to update one Object.
     * @example
     * // Update one Object
     * const object = await prisma.object.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ObjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ObjectUpdateArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Objects.
     * @param {ObjectDeleteManyArgs} args - Arguments to filter Objects to delete.
     * @example
     * // Delete a few Objects
     * const { count } = await prisma.object.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ObjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ObjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Objects
     * const object = await prisma.object.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ObjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ObjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Object.
     * @param {ObjectUpsertArgs} args - Arguments to update or create a Object.
     * @example
     * // Update or create a Object
     * const object = await prisma.object.upsert({
     *   create: {
     *     // ... data to create a Object
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Object we want to update
     *   }
     * })
    **/
    upsert<T extends ObjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ObjectUpsertArgs<ExtArgs>>
    ): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Objects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectCountArgs} args - Arguments to filter Objects to count.
     * @example
     * // Count the number of Objects
     * const count = await prisma.object.count({
     *   where: {
     *     // ... the filter for the Objects we want to count
     *   }
     * })
    **/
    count<T extends ObjectCountArgs>(
      args?: Subset<T, ObjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Object.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjectAggregateArgs>(args: Subset<T, ObjectAggregateArgs>): Prisma.PrismaPromise<GetObjectAggregateType<T>>

    /**
     * Group by Object.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjectGroupByArgs['orderBy'] }
        : { orderBy?: ObjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Object model
   */
  readonly fields: ObjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Object.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Object$productsArgs<ExtArgs> = {}>(args?: Subset<T, Object$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    product_types<T extends Object$product_typesArgs<ExtArgs> = {}>(args?: Subset<T, Object$product_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Object model
   */ 
  interface ObjectFieldRefs {
    readonly id: FieldRef<"Object", 'Int'>
    readonly name: FieldRef<"Object", 'String'>
    readonly created_at: FieldRef<"Object", 'DateTime'>
    readonly updated_at: FieldRef<"Object", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Object findUnique
   */
  export type ObjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object findUniqueOrThrow
   */
  export type ObjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object findFirst
   */
  export type ObjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objects.
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectScalarFieldEnum | ObjectScalarFieldEnum[]
  }

  /**
   * Object findFirstOrThrow
   */
  export type ObjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Object to fetch.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Objects.
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Objects.
     */
    distinct?: ObjectScalarFieldEnum | ObjectScalarFieldEnum[]
  }

  /**
   * Object findMany
   */
  export type ObjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter, which Objects to fetch.
     */
    where?: ObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Objects to fetch.
     */
    orderBy?: ObjectOrderByWithRelationInput | ObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Objects.
     */
    cursor?: ObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Objects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Objects.
     */
    skip?: number
    distinct?: ObjectScalarFieldEnum | ObjectScalarFieldEnum[]
  }

  /**
   * Object create
   */
  export type ObjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Object.
     */
    data: XOR<ObjectCreateInput, ObjectUncheckedCreateInput>
  }

  /**
   * Object createMany
   */
  export type ObjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Objects.
     */
    data: ObjectCreateManyInput | ObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Object update
   */
  export type ObjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Object.
     */
    data: XOR<ObjectUpdateInput, ObjectUncheckedUpdateInput>
    /**
     * Choose, which Object to update.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object updateMany
   */
  export type ObjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Objects.
     */
    data: XOR<ObjectUpdateManyMutationInput, ObjectUncheckedUpdateManyInput>
    /**
     * Filter which Objects to update
     */
    where?: ObjectWhereInput
  }

  /**
   * Object upsert
   */
  export type ObjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Object to update in case it exists.
     */
    where: ObjectWhereUniqueInput
    /**
     * In case the Object found by the `where` argument doesn't exist, create a new Object with this data.
     */
    create: XOR<ObjectCreateInput, ObjectUncheckedCreateInput>
    /**
     * In case the Object was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjectUpdateInput, ObjectUncheckedUpdateInput>
  }

  /**
   * Object delete
   */
  export type ObjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
    /**
     * Filter which Object to delete.
     */
    where: ObjectWhereUniqueInput
  }

  /**
   * Object deleteMany
   */
  export type ObjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Objects to delete
     */
    where?: ObjectWhereInput
  }

  /**
   * Object.products
   */
  export type Object$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Object.product_types
   */
  export type Object$product_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    cursor?: ProductTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * Object without action
   */
  export type ObjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Object
     */
    select?: ObjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjectInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    area: Decimal | null
    price: Decimal | null
    object_id: number | null
    product_type_id: number | null
    category_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    area: Decimal | null
    price: Decimal | null
    object_id: number | null
    product_type_id: number | null
    category_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    number: string | null
    area: Decimal | null
    price: Decimal | null
    one_gt_id: string | null
    created_at: Date | null
    updated_at: Date | null
    object_id: number | null
    product_type_id: number | null
    category_id: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    number: string | null
    area: Decimal | null
    price: Decimal | null
    one_gt_id: string | null
    created_at: Date | null
    updated_at: Date | null
    object_id: number | null
    product_type_id: number | null
    category_id: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    number: number
    area: number
    price: number
    one_gt_id: number
    created_at: number
    updated_at: number
    object_id: number
    product_type_id: number
    category_id: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    area?: true
    price?: true
    object_id?: true
    product_type_id?: true
    category_id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    area?: true
    price?: true
    object_id?: true
    product_type_id?: true
    category_id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    number?: true
    area?: true
    price?: true
    one_gt_id?: true
    created_at?: true
    updated_at?: true
    object_id?: true
    product_type_id?: true
    category_id?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    number?: true
    area?: true
    price?: true
    one_gt_id?: true
    created_at?: true
    updated_at?: true
    object_id?: true
    product_type_id?: true
    category_id?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    number?: true
    area?: true
    price?: true
    one_gt_id?: true
    created_at?: true
    updated_at?: true
    object_id?: true
    product_type_id?: true
    category_id?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    number: string
    area: Decimal
    price: Decimal
    one_gt_id: string | null
    created_at: Date
    updated_at: Date
    object_id: number
    product_type_id: number | null
    category_id: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    area?: boolean
    price?: boolean
    one_gt_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    object_id?: boolean
    product_type_id?: boolean
    category_id?: boolean
    object?: boolean | ObjectDefaultArgs<ExtArgs>
    product_type?: boolean | Product$product_typeArgs<ExtArgs>
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>


  export type ProductSelectScalar = {
    id?: boolean
    number?: boolean
    area?: boolean
    price?: boolean
    one_gt_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    object_id?: boolean
    product_type_id?: boolean
    category_id?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | ObjectDefaultArgs<ExtArgs>
    product_type?: boolean | Product$product_typeArgs<ExtArgs>
    category?: boolean | ProductCategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      object: Prisma.$ObjectPayload<ExtArgs>
      product_type: Prisma.$ProductTypePayload<ExtArgs> | null
      category: Prisma.$ProductCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
      area: Prisma.Decimal
      price: Prisma.Decimal
      one_gt_id: string | null
      created_at: Date
      updated_at: Date
      object_id: number
      product_type_id: number | null
      category_id: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    object<T extends ObjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectDefaultArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product_type<T extends Product$product_typeArgs<ExtArgs> = {}>(args?: Subset<T, Product$product_typeArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    category<T extends ProductCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategoryDefaultArgs<ExtArgs>>): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly number: FieldRef<"Product", 'String'>
    readonly area: FieldRef<"Product", 'Decimal'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly one_gt_id: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly object_id: FieldRef<"Product", 'Int'>
    readonly product_type_id: FieldRef<"Product", 'Int'>
    readonly category_id: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.product_type
   */
  export type Product$product_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    where?: ProductTypeWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductCategory
   */

  export type AggregateProductCategory = {
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  export type ProductCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductCategorySumAggregateOutputType = {
    id: number | null
  }

  export type ProductCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCategoryCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductCategoryAvgAggregateInputType = {
    id?: true
  }

  export type ProductCategorySumAggregateInputType = {
    id?: true
  }

  export type ProductCategoryMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCategoryCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategory to aggregate.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCategories
    **/
    _count?: true | ProductCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type GetProductCategoryAggregateType<T extends ProductCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCategory[P]>
      : GetScalarType<T[P], AggregateProductCategory[P]>
  }




  export type ProductCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCategoryWhereInput
    orderBy?: ProductCategoryOrderByWithAggregationInput | ProductCategoryOrderByWithAggregationInput[]
    by: ProductCategoryScalarFieldEnum[] | ProductCategoryScalarFieldEnum
    having?: ProductCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCategoryCountAggregateInputType | true
    _avg?: ProductCategoryAvgAggregateInputType
    _sum?: ProductCategorySumAggregateInputType
    _min?: ProductCategoryMinAggregateInputType
    _max?: ProductCategoryMaxAggregateInputType
  }

  export type ProductCategoryGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: ProductCategoryCountAggregateOutputType | null
    _avg: ProductCategoryAvgAggregateOutputType | null
    _sum: ProductCategorySumAggregateOutputType | null
    _min: ProductCategoryMinAggregateOutputType | null
    _max: ProductCategoryMaxAggregateOutputType | null
  }

  type GetProductCategoryGroupByPayload<T extends ProductCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCategory"]>


  export type ProductCategorySelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductCategory$productsArgs<ExtArgs>
    _count?: boolean | ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCategory"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["productCategory"]>
    composites: {}
  }

  type ProductCategoryGetPayload<S extends boolean | null | undefined | ProductCategoryDefaultArgs> = $Result.GetResult<Prisma.$ProductCategoryPayload, S>

  type ProductCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCategoryCountAggregateInputType | true
    }

  export interface ProductCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCategory'], meta: { name: 'ProductCategory' } }
    /**
     * Find zero or one ProductCategory that matches the filter.
     * @param {ProductCategoryFindUniqueArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductCategoryFindUniqueOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindFirstOrThrowArgs} args - Arguments to find a ProductCategory
     * @example
     * // Get one ProductCategory
     * const productCategory = await prisma.productCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCategories
     * const productCategories = await prisma.productCategory.findMany()
     * 
     * // Get first 10 ProductCategories
     * const productCategories = await prisma.productCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCategoryWithIdOnly = await prisma.productCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductCategory.
     * @param {ProductCategoryCreateArgs} args - Arguments to create a ProductCategory.
     * @example
     * // Create one ProductCategory
     * const ProductCategory = await prisma.productCategory.create({
     *   data: {
     *     // ... data to create a ProductCategory
     *   }
     * })
     * 
    **/
    create<T extends ProductCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryCreateArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductCategories.
     * @param {ProductCategoryCreateManyArgs} args - Arguments to create many ProductCategories.
     * @example
     * // Create many ProductCategories
     * const productCategory = await prisma.productCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductCategory.
     * @param {ProductCategoryDeleteArgs} args - Arguments to delete one ProductCategory.
     * @example
     * // Delete one ProductCategory
     * const ProductCategory = await prisma.productCategory.delete({
     *   where: {
     *     // ... filter to delete one ProductCategory
     *   }
     * })
     * 
    **/
    delete<T extends ProductCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryDeleteArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductCategory.
     * @param {ProductCategoryUpdateArgs} args - Arguments to update one ProductCategory.
     * @example
     * // Update one ProductCategory
     * const productCategory = await prisma.productCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryUpdateArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductCategories.
     * @param {ProductCategoryDeleteManyArgs} args - Arguments to filter ProductCategories to delete.
     * @example
     * // Delete a few ProductCategories
     * const { count } = await prisma.productCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCategories
     * const productCategory = await prisma.productCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductCategory.
     * @param {ProductCategoryUpsertArgs} args - Arguments to update or create a ProductCategory.
     * @example
     * // Update or create a ProductCategory
     * const productCategory = await prisma.productCategory.upsert({
     *   create: {
     *     // ... data to create a ProductCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ProductCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCategoryUpsertArgs<ExtArgs>>
    ): Prisma__ProductCategoryClient<$Result.GetResult<Prisma.$ProductCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryCountArgs} args - Arguments to filter ProductCategories to count.
     * @example
     * // Count the number of ProductCategories
     * const count = await prisma.productCategory.count({
     *   where: {
     *     // ... the filter for the ProductCategories we want to count
     *   }
     * })
    **/
    count<T extends ProductCategoryCountArgs>(
      args?: Subset<T, ProductCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCategoryAggregateArgs>(args: Subset<T, ProductCategoryAggregateArgs>): Prisma.PrismaPromise<GetProductCategoryAggregateType<T>>

    /**
     * Group by ProductCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCategory model
   */
  readonly fields: ProductCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends ProductCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductCategory model
   */ 
  interface ProductCategoryFieldRefs {
    readonly id: FieldRef<"ProductCategory", 'Int'>
    readonly name: FieldRef<"ProductCategory", 'String'>
    readonly created_at: FieldRef<"ProductCategory", 'DateTime'>
    readonly updated_at: FieldRef<"ProductCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductCategory findUnique
   */
  export type ProductCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findUniqueOrThrow
   */
  export type ProductCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory findFirst
   */
  export type ProductCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findFirstOrThrow
   */
  export type ProductCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategory to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCategories.
     */
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory findMany
   */
  export type ProductCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductCategories to fetch.
     */
    where?: ProductCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCategories to fetch.
     */
    orderBy?: ProductCategoryOrderByWithRelationInput | ProductCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCategories.
     */
    cursor?: ProductCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCategories.
     */
    skip?: number
    distinct?: ProductCategoryScalarFieldEnum | ProductCategoryScalarFieldEnum[]
  }

  /**
   * ProductCategory create
   */
  export type ProductCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCategory.
     */
    data: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
  }

  /**
   * ProductCategory createMany
   */
  export type ProductCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCategories.
     */
    data: ProductCategoryCreateManyInput | ProductCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCategory update
   */
  export type ProductCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCategory.
     */
    data: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
    /**
     * Choose, which ProductCategory to update.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory updateMany
   */
  export type ProductCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCategories.
     */
    data: XOR<ProductCategoryUpdateManyMutationInput, ProductCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductCategories to update
     */
    where?: ProductCategoryWhereInput
  }

  /**
   * ProductCategory upsert
   */
  export type ProductCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCategory to update in case it exists.
     */
    where: ProductCategoryWhereUniqueInput
    /**
     * In case the ProductCategory found by the `where` argument doesn't exist, create a new ProductCategory with this data.
     */
    create: XOR<ProductCategoryCreateInput, ProductCategoryUncheckedCreateInput>
    /**
     * In case the ProductCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCategoryUpdateInput, ProductCategoryUncheckedUpdateInput>
  }

  /**
   * ProductCategory delete
   */
  export type ProductCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
    /**
     * Filter which ProductCategory to delete.
     */
    where: ProductCategoryWhereUniqueInput
  }

  /**
   * ProductCategory deleteMany
   */
  export type ProductCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCategories to delete
     */
    where?: ProductCategoryWhereInput
  }

  /**
   * ProductCategory.products
   */
  export type ProductCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductCategory without action
   */
  export type ProductCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCategory
     */
    select?: ProductCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductType
   */

  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeAvgAggregateOutputType = {
    id: number | null
    object_id: number | null
  }

  export type ProductTypeSumAggregateOutputType = {
    id: number | null
    object_id: number | null
  }

  export type ProductTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    object_id: number | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    object_id: number | null
  }

  export type ProductTypeCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    object_id: number
    _all: number
  }


  export type ProductTypeAvgAggregateInputType = {
    id?: true
    object_id?: true
  }

  export type ProductTypeSumAggregateInputType = {
    id?: true
    object_id?: true
  }

  export type ProductTypeMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    object_id?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    object_id?: true
  }

  export type ProductTypeCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    object_id?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductType to aggregate.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithAggregationInput | ProductTypeOrderByWithAggregationInput[]
    by: ProductTypeScalarFieldEnum[] | ProductTypeScalarFieldEnum
    having?: ProductTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _avg?: ProductTypeAvgAggregateInputType
    _sum?: ProductTypeSumAggregateInputType
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }

  export type ProductTypeGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    object_id: number
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProductTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    object_id?: boolean
    object?: boolean | ObjectDefaultArgs<ExtArgs>
    products?: boolean | ProductType$productsArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productType"]>


  export type ProductTypeSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    object_id?: boolean
  }

  export type ProductTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | ObjectDefaultArgs<ExtArgs>
    products?: boolean | ProductType$productsArgs<ExtArgs>
    _count?: boolean | ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductType"
    objects: {
      object: Prisma.$ObjectPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
      object_id: number
    }, ExtArgs["result"]["productType"]>
    composites: {}
  }

  type ProductTypeGetPayload<S extends boolean | null | undefined | ProductTypeDefaultArgs> = $Result.GetResult<Prisma.$ProductTypePayload, S>

  type ProductTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductTypeCountAggregateInputType | true
    }

  export interface ProductTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductType'], meta: { name: 'ProductType' } }
    /**
     * Find zero or one ProductType that matches the filter.
     * @param {ProductTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductTypeFindUniqueOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindFirstArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productTypeWithIdOnly = await prisma.productType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductType.
     * @param {ProductTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
    **/
    create<T extends ProductTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeCreateArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductTypes.
     * @param {ProductTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     * @example
     * // Create many ProductTypes
     * const productType = await prisma.productType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {ProductTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
    **/
    delete<T extends ProductTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeDeleteArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductType.
     * @param {ProductTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeUpdateArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductTypes.
     * @param {ProductTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {ProductTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
    **/
    upsert<T extends ProductTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductTypeUpsertArgs<ExtArgs>>
    ): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends ProductTypeCountArgs>(
      args?: Subset<T, ProductTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): Prisma.PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductType model
   */
  readonly fields: ProductTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    object<T extends ObjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjectDefaultArgs<ExtArgs>>): Prisma__ObjectClient<$Result.GetResult<Prisma.$ObjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends ProductType$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductType$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductType model
   */ 
  interface ProductTypeFieldRefs {
    readonly id: FieldRef<"ProductType", 'Int'>
    readonly name: FieldRef<"ProductType", 'String'>
    readonly created_at: FieldRef<"ProductType", 'DateTime'>
    readonly updated_at: FieldRef<"ProductType", 'DateTime'>
    readonly object_id: FieldRef<"ProductType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductType findUnique
   */
  export type ProductTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findUniqueOrThrow
   */
  export type ProductTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findFirst
   */
  export type ProductTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findFirstOrThrow
   */
  export type ProductTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findMany
   */
  export type ProductTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProductTypes to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType create
   */
  export type ProductTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductType.
     */
    data: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
  }

  /**
   * ProductType createMany
   */
  export type ProductTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTypes.
     */
    data: ProductTypeCreateManyInput | ProductTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductType update
   */
  export type ProductTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductType.
     */
    data: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
    /**
     * Choose, which ProductType to update.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType updateMany
   */
  export type ProductTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTypes.
     */
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProductTypes to update
     */
    where?: ProductTypeWhereInput
  }

  /**
   * ProductType upsert
   */
  export type ProductTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductType to update in case it exists.
     */
    where: ProductTypeWhereUniqueInput
    /**
     * In case the ProductType found by the `where` argument doesn't exist, create a new ProductType with this data.
     */
    create: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
    /**
     * In case the ProductType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
  }

  /**
   * ProductType delete
   */
  export type ProductTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
    /**
     * Filter which ProductType to delete.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType deleteMany
   */
  export type ProductTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTypes to delete
     */
    where?: ProductTypeWhereInput
  }

  /**
   * ProductType.products
   */
  export type ProductType$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductType without action
   */
  export type ProductTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ObjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ObjectScalarFieldEnum = (typeof ObjectScalarFieldEnum)[keyof typeof ObjectScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    number: 'number',
    area: 'area',
    price: 'price',
    one_gt_id: 'one_gt_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    object_id: 'object_id',
    product_type_id: 'product_type_id',
    category_id: 'category_id'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductCategoryScalarFieldEnum = (typeof ProductCategoryScalarFieldEnum)[keyof typeof ProductCategoryScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    object_id: 'object_id'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ObjectWhereInput = {
    AND?: ObjectWhereInput | ObjectWhereInput[]
    OR?: ObjectWhereInput[]
    NOT?: ObjectWhereInput | ObjectWhereInput[]
    id?: IntFilter<"Object"> | number
    name?: StringFilter<"Object"> | string
    created_at?: DateTimeFilter<"Object"> | Date | string
    updated_at?: DateTimeFilter<"Object"> | Date | string
    products?: ProductListRelationFilter
    product_types?: ProductTypeListRelationFilter
  }

  export type ObjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    product_types?: ProductTypeOrderByRelationAggregateInput
  }

  export type ObjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObjectWhereInput | ObjectWhereInput[]
    OR?: ObjectWhereInput[]
    NOT?: ObjectWhereInput | ObjectWhereInput[]
    name?: StringFilter<"Object"> | string
    created_at?: DateTimeFilter<"Object"> | Date | string
    updated_at?: DateTimeFilter<"Object"> | Date | string
    products?: ProductListRelationFilter
    product_types?: ProductTypeListRelationFilter
  }, "id">

  export type ObjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ObjectCountOrderByAggregateInput
    _avg?: ObjectAvgOrderByAggregateInput
    _max?: ObjectMaxOrderByAggregateInput
    _min?: ObjectMinOrderByAggregateInput
    _sum?: ObjectSumOrderByAggregateInput
  }

  export type ObjectScalarWhereWithAggregatesInput = {
    AND?: ObjectScalarWhereWithAggregatesInput | ObjectScalarWhereWithAggregatesInput[]
    OR?: ObjectScalarWhereWithAggregatesInput[]
    NOT?: ObjectScalarWhereWithAggregatesInput | ObjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Object"> | number
    name?: StringWithAggregatesFilter<"Object"> | string
    created_at?: DateTimeWithAggregatesFilter<"Object"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Object"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    number?: StringFilter<"Product"> | string
    area?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    one_gt_id?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    object_id?: IntFilter<"Product"> | number
    product_type_id?: IntNullableFilter<"Product"> | number | null
    category_id?: IntFilter<"Product"> | number
    object?: XOR<ObjectRelationFilter, ObjectWhereInput>
    product_type?: XOR<ProductTypeNullableRelationFilter, ProductTypeWhereInput> | null
    category?: XOR<ProductCategoryRelationFilter, ProductCategoryWhereInput>
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    area?: SortOrder
    price?: SortOrder
    one_gt_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrderInput | SortOrder
    category_id?: SortOrder
    object?: ObjectOrderByWithRelationInput
    product_type?: ProductTypeOrderByWithRelationInput
    category?: ProductCategoryOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    number?: StringFilter<"Product"> | string
    area?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    one_gt_id?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    object_id?: IntFilter<"Product"> | number
    product_type_id?: IntNullableFilter<"Product"> | number | null
    category_id?: IntFilter<"Product"> | number
    object?: XOR<ObjectRelationFilter, ObjectWhereInput>
    product_type?: XOR<ProductTypeNullableRelationFilter, ProductTypeWhereInput> | null
    category?: XOR<ProductCategoryRelationFilter, ProductCategoryWhereInput>
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    area?: SortOrder
    price?: SortOrder
    one_gt_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    number?: StringWithAggregatesFilter<"Product"> | string
    area?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    one_gt_id?: StringNullableWithAggregatesFilter<"Product"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    object_id?: IntWithAggregatesFilter<"Product"> | number
    product_type_id?: IntNullableWithAggregatesFilter<"Product"> | number | null
    category_id?: IntWithAggregatesFilter<"Product"> | number
  }

  export type ProductCategoryWhereInput = {
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    id?: IntFilter<"ProductCategory"> | number
    name?: StringFilter<"ProductCategory"> | string
    created_at?: DateTimeFilter<"ProductCategory"> | Date | string
    updated_at?: DateTimeFilter<"ProductCategory"> | Date | string
    products?: ProductListRelationFilter
  }

  export type ProductCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    OR?: ProductCategoryWhereInput[]
    NOT?: ProductCategoryWhereInput | ProductCategoryWhereInput[]
    name?: StringFilter<"ProductCategory"> | string
    created_at?: DateTimeFilter<"ProductCategory"> | Date | string
    updated_at?: DateTimeFilter<"ProductCategory"> | Date | string
    products?: ProductListRelationFilter
  }, "id">

  export type ProductCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCategoryCountOrderByAggregateInput
    _avg?: ProductCategoryAvgOrderByAggregateInput
    _max?: ProductCategoryMaxOrderByAggregateInput
    _min?: ProductCategoryMinOrderByAggregateInput
    _sum?: ProductCategorySumOrderByAggregateInput
  }

  export type ProductCategoryScalarWhereWithAggregatesInput = {
    AND?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    OR?: ProductCategoryScalarWhereWithAggregatesInput[]
    NOT?: ProductCategoryScalarWhereWithAggregatesInput | ProductCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCategory"> | number
    name?: StringWithAggregatesFilter<"ProductCategory"> | string
    created_at?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ProductCategory"> | Date | string
  }

  export type ProductTypeWhereInput = {
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    id?: IntFilter<"ProductType"> | number
    name?: StringFilter<"ProductType"> | string
    created_at?: DateTimeFilter<"ProductType"> | Date | string
    updated_at?: DateTimeFilter<"ProductType"> | Date | string
    object_id?: IntFilter<"ProductType"> | number
    object?: XOR<ObjectRelationFilter, ObjectWhereInput>
    products?: ProductListRelationFilter
  }

  export type ProductTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    object?: ObjectOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    name?: StringFilter<"ProductType"> | string
    created_at?: DateTimeFilter<"ProductType"> | Date | string
    updated_at?: DateTimeFilter<"ProductType"> | Date | string
    object_id?: IntFilter<"ProductType"> | number
    object?: XOR<ObjectRelationFilter, ObjectWhereInput>
    products?: ProductListRelationFilter
  }, "id">

  export type ProductTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    _count?: ProductTypeCountOrderByAggregateInput
    _avg?: ProductTypeAvgOrderByAggregateInput
    _max?: ProductTypeMaxOrderByAggregateInput
    _min?: ProductTypeMinOrderByAggregateInput
    _sum?: ProductTypeSumOrderByAggregateInput
  }

  export type ProductTypeScalarWhereWithAggregatesInput = {
    AND?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    OR?: ProductTypeScalarWhereWithAggregatesInput[]
    NOT?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductType"> | number
    name?: StringWithAggregatesFilter<"ProductType"> | string
    created_at?: DateTimeWithAggregatesFilter<"ProductType"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ProductType"> | Date | string
    object_id?: IntWithAggregatesFilter<"ProductType"> | number
  }

  export type ObjectCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutObjectInput
    product_types?: ProductTypeCreateNestedManyWithoutObjectInput
  }

  export type ObjectUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutObjectInput
    product_types?: ProductTypeUncheckedCreateNestedManyWithoutObjectInput
  }

  export type ObjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutObjectNestedInput
    product_types?: ProductTypeUpdateManyWithoutObjectNestedInput
  }

  export type ObjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutObjectNestedInput
    product_types?: ProductTypeUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type ObjectCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ObjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object: ObjectCreateNestedOneWithoutProductsInput
    product_type?: ProductTypeCreateNestedOneWithoutProductsInput
    category: ProductCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    product_type_id?: number | null
    category_id: number
  }

  export type ProductUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object?: ObjectUpdateOneRequiredWithoutProductsNestedInput
    product_type?: ProductTypeUpdateOneWithoutProductsNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    product_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    product_type_id?: number | null
    category_id: number
  }

  export type ProductUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    product_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ProductCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ProductCategoryCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    object: ObjectCreateNestedOneWithoutProduct_typesInput
    products?: ProductCreateNestedManyWithoutProduct_typeInput
  }

  export type ProductTypeUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    products?: ProductUncheckedCreateNestedManyWithoutProduct_typeInput
  }

  export type ProductTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object?: ObjectUpdateOneRequiredWithoutProduct_typesNestedInput
    products?: ProductUpdateManyWithoutProduct_typeNestedInput
  }

  export type ProductTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutProduct_typeNestedInput
  }

  export type ProductTypeCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
  }

  export type ProductTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductTypeListRelationFilter = {
    every?: ProductTypeWhereInput
    some?: ProductTypeWhereInput
    none?: ProductTypeWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ObjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ObjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ObjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ObjectRelationFilter = {
    is?: ObjectWhereInput
    isNot?: ObjectWhereInput
  }

  export type ProductTypeNullableRelationFilter = {
    is?: ProductTypeWhereInput | null
    isNot?: ProductTypeWhereInput | null
  }

  export type ProductCategoryRelationFilter = {
    is?: ProductCategoryWhereInput
    isNot?: ProductCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    area?: SortOrder
    price?: SortOrder
    one_gt_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrder
    category_id?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    price?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrder
    category_id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    area?: SortOrder
    price?: SortOrder
    one_gt_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrder
    category_id?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    area?: SortOrder
    price?: SortOrder
    one_gt_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrder
    category_id?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    price?: SortOrder
    object_id?: SortOrder
    product_type_id?: SortOrder
    category_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
  }

  export type ProductTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    object_id?: SortOrder
  }

  export type ProductTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
  }

  export type ProductTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    object_id?: SortOrder
  }

  export type ProductTypeSumOrderByAggregateInput = {
    id?: SortOrder
    object_id?: SortOrder
  }

  export type ProductCreateNestedManyWithoutObjectInput = {
    create?: XOR<ProductCreateWithoutObjectInput, ProductUncheckedCreateWithoutObjectInput> | ProductCreateWithoutObjectInput[] | ProductUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutObjectInput | ProductCreateOrConnectWithoutObjectInput[]
    createMany?: ProductCreateManyObjectInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductTypeCreateNestedManyWithoutObjectInput = {
    create?: XOR<ProductTypeCreateWithoutObjectInput, ProductTypeUncheckedCreateWithoutObjectInput> | ProductTypeCreateWithoutObjectInput[] | ProductTypeUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutObjectInput | ProductTypeCreateOrConnectWithoutObjectInput[]
    createMany?: ProductTypeCreateManyObjectInputEnvelope
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutObjectInput = {
    create?: XOR<ProductCreateWithoutObjectInput, ProductUncheckedCreateWithoutObjectInput> | ProductCreateWithoutObjectInput[] | ProductUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutObjectInput | ProductCreateOrConnectWithoutObjectInput[]
    createMany?: ProductCreateManyObjectInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductTypeUncheckedCreateNestedManyWithoutObjectInput = {
    create?: XOR<ProductTypeCreateWithoutObjectInput, ProductTypeUncheckedCreateWithoutObjectInput> | ProductTypeCreateWithoutObjectInput[] | ProductTypeUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutObjectInput | ProductTypeCreateOrConnectWithoutObjectInput[]
    createMany?: ProductTypeCreateManyObjectInputEnvelope
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutObjectNestedInput = {
    create?: XOR<ProductCreateWithoutObjectInput, ProductUncheckedCreateWithoutObjectInput> | ProductCreateWithoutObjectInput[] | ProductUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutObjectInput | ProductCreateOrConnectWithoutObjectInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutObjectInput | ProductUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: ProductCreateManyObjectInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutObjectInput | ProductUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutObjectInput | ProductUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductTypeUpdateManyWithoutObjectNestedInput = {
    create?: XOR<ProductTypeCreateWithoutObjectInput, ProductTypeUncheckedCreateWithoutObjectInput> | ProductTypeCreateWithoutObjectInput[] | ProductTypeUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutObjectInput | ProductTypeCreateOrConnectWithoutObjectInput[]
    upsert?: ProductTypeUpsertWithWhereUniqueWithoutObjectInput | ProductTypeUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: ProductTypeCreateManyObjectInputEnvelope
    set?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    disconnect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    delete?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    update?: ProductTypeUpdateWithWhereUniqueWithoutObjectInput | ProductTypeUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: ProductTypeUpdateManyWithWhereWithoutObjectInput | ProductTypeUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutObjectNestedInput = {
    create?: XOR<ProductCreateWithoutObjectInput, ProductUncheckedCreateWithoutObjectInput> | ProductCreateWithoutObjectInput[] | ProductUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutObjectInput | ProductCreateOrConnectWithoutObjectInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutObjectInput | ProductUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: ProductCreateManyObjectInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutObjectInput | ProductUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutObjectInput | ProductUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductTypeUncheckedUpdateManyWithoutObjectNestedInput = {
    create?: XOR<ProductTypeCreateWithoutObjectInput, ProductTypeUncheckedCreateWithoutObjectInput> | ProductTypeCreateWithoutObjectInput[] | ProductTypeUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: ProductTypeCreateOrConnectWithoutObjectInput | ProductTypeCreateOrConnectWithoutObjectInput[]
    upsert?: ProductTypeUpsertWithWhereUniqueWithoutObjectInput | ProductTypeUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: ProductTypeCreateManyObjectInputEnvelope
    set?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    disconnect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    delete?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    connect?: ProductTypeWhereUniqueInput | ProductTypeWhereUniqueInput[]
    update?: ProductTypeUpdateWithWhereUniqueWithoutObjectInput | ProductTypeUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: ProductTypeUpdateManyWithWhereWithoutObjectInput | ProductTypeUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
  }

  export type ObjectCreateNestedOneWithoutProductsInput = {
    create?: XOR<ObjectCreateWithoutProductsInput, ObjectUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ObjectCreateOrConnectWithoutProductsInput
    connect?: ObjectWhereUniqueInput
  }

  export type ProductTypeCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductTypeCreateWithoutProductsInput, ProductTypeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutProductsInput
    connect?: ProductTypeWhereUniqueInput
  }

  export type ProductCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ObjectUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ObjectCreateWithoutProductsInput, ObjectUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ObjectCreateOrConnectWithoutProductsInput
    upsert?: ObjectUpsertWithoutProductsInput
    connect?: ObjectWhereUniqueInput
    update?: XOR<XOR<ObjectUpdateToOneWithWhereWithoutProductsInput, ObjectUpdateWithoutProductsInput>, ObjectUncheckedUpdateWithoutProductsInput>
  }

  export type ProductTypeUpdateOneWithoutProductsNestedInput = {
    create?: XOR<ProductTypeCreateWithoutProductsInput, ProductTypeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductTypeCreateOrConnectWithoutProductsInput
    upsert?: ProductTypeUpsertWithoutProductsInput
    disconnect?: ProductTypeWhereInput | boolean
    delete?: ProductTypeWhereInput | boolean
    connect?: ProductTypeWhereUniqueInput
    update?: XOR<XOR<ProductTypeUpdateToOneWithWhereWithoutProductsInput, ProductTypeUpdateWithoutProductsInput>, ProductTypeUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductCategoryCreateOrConnectWithoutProductsInput
    upsert?: ProductCategoryUpsertWithoutProductsInput
    connect?: ProductCategoryWhereUniqueInput
    update?: XOR<XOR<ProductCategoryUpdateToOneWithWhereWithoutProductsInput, ProductCategoryUpdateWithoutProductsInput>, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ObjectCreateNestedOneWithoutProduct_typesInput = {
    create?: XOR<ObjectCreateWithoutProduct_typesInput, ObjectUncheckedCreateWithoutProduct_typesInput>
    connectOrCreate?: ObjectCreateOrConnectWithoutProduct_typesInput
    connect?: ObjectWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutProduct_typeInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProduct_typeInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ObjectUpdateOneRequiredWithoutProduct_typesNestedInput = {
    create?: XOR<ObjectCreateWithoutProduct_typesInput, ObjectUncheckedCreateWithoutProduct_typesInput>
    connectOrCreate?: ObjectCreateOrConnectWithoutProduct_typesInput
    upsert?: ObjectUpsertWithoutProduct_typesInput
    connect?: ObjectWhereUniqueInput
    update?: XOR<XOR<ObjectUpdateToOneWithWhereWithoutProduct_typesInput, ObjectUpdateWithoutProduct_typesInput>, ObjectUncheckedUpdateWithoutProduct_typesInput>
  }

  export type ProductUpdateManyWithoutProduct_typeNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProduct_typeInput | ProductUpsertWithWhereUniqueWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProduct_typeInput | ProductUpdateWithWhereUniqueWithoutProduct_typeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProduct_typeInput | ProductUpdateManyWithWhereWithoutProduct_typeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProduct_typeNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProduct_typeInput | ProductUpsertWithWhereUniqueWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProduct_typeInput | ProductUpdateWithWhereUniqueWithoutProduct_typeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProduct_typeInput | ProductUpdateManyWithWhereWithoutProduct_typeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCreateWithoutObjectInput = {
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product_type?: ProductTypeCreateNestedOneWithoutProductsInput
    category: ProductCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutObjectInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product_type_id?: number | null
    category_id: number
  }

  export type ProductCreateOrConnectWithoutObjectInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutObjectInput, ProductUncheckedCreateWithoutObjectInput>
  }

  export type ProductCreateManyObjectInputEnvelope = {
    data: ProductCreateManyObjectInput | ProductCreateManyObjectInput[]
    skipDuplicates?: boolean
  }

  export type ProductTypeCreateWithoutObjectInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutProduct_typeInput
  }

  export type ProductTypeUncheckedCreateWithoutObjectInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutProduct_typeInput
  }

  export type ProductTypeCreateOrConnectWithoutObjectInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutObjectInput, ProductTypeUncheckedCreateWithoutObjectInput>
  }

  export type ProductTypeCreateManyObjectInputEnvelope = {
    data: ProductTypeCreateManyObjectInput | ProductTypeCreateManyObjectInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutObjectInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutObjectInput, ProductUncheckedUpdateWithoutObjectInput>
    create: XOR<ProductCreateWithoutObjectInput, ProductUncheckedCreateWithoutObjectInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutObjectInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutObjectInput, ProductUncheckedUpdateWithoutObjectInput>
  }

  export type ProductUpdateManyWithWhereWithoutObjectInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutObjectInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    number?: StringFilter<"Product"> | string
    area?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    one_gt_id?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    object_id?: IntFilter<"Product"> | number
    product_type_id?: IntNullableFilter<"Product"> | number | null
    category_id?: IntFilter<"Product"> | number
  }

  export type ProductTypeUpsertWithWhereUniqueWithoutObjectInput = {
    where: ProductTypeWhereUniqueInput
    update: XOR<ProductTypeUpdateWithoutObjectInput, ProductTypeUncheckedUpdateWithoutObjectInput>
    create: XOR<ProductTypeCreateWithoutObjectInput, ProductTypeUncheckedCreateWithoutObjectInput>
  }

  export type ProductTypeUpdateWithWhereUniqueWithoutObjectInput = {
    where: ProductTypeWhereUniqueInput
    data: XOR<ProductTypeUpdateWithoutObjectInput, ProductTypeUncheckedUpdateWithoutObjectInput>
  }

  export type ProductTypeUpdateManyWithWhereWithoutObjectInput = {
    where: ProductTypeScalarWhereInput
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyWithoutObjectInput>
  }

  export type ProductTypeScalarWhereInput = {
    AND?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
    OR?: ProductTypeScalarWhereInput[]
    NOT?: ProductTypeScalarWhereInput | ProductTypeScalarWhereInput[]
    id?: IntFilter<"ProductType"> | number
    name?: StringFilter<"ProductType"> | string
    created_at?: DateTimeFilter<"ProductType"> | Date | string
    updated_at?: DateTimeFilter<"ProductType"> | Date | string
    object_id?: IntFilter<"ProductType"> | number
  }

  export type ObjectCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    product_types?: ProductTypeCreateNestedManyWithoutObjectInput
  }

  export type ObjectUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    product_types?: ProductTypeUncheckedCreateNestedManyWithoutObjectInput
  }

  export type ObjectCreateOrConnectWithoutProductsInput = {
    where: ObjectWhereUniqueInput
    create: XOR<ObjectCreateWithoutProductsInput, ObjectUncheckedCreateWithoutProductsInput>
  }

  export type ProductTypeCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    object: ObjectCreateNestedOneWithoutProduct_typesInput
  }

  export type ProductTypeUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
  }

  export type ProductTypeCreateOrConnectWithoutProductsInput = {
    where: ProductTypeWhereUniqueInput
    create: XOR<ProductTypeCreateWithoutProductsInput, ProductTypeUncheckedCreateWithoutProductsInput>
  }

  export type ProductCategoryCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductCategoryCreateOrConnectWithoutProductsInput = {
    where: ProductCategoryWhereUniqueInput
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
  }

  export type ObjectUpsertWithoutProductsInput = {
    update: XOR<ObjectUpdateWithoutProductsInput, ObjectUncheckedUpdateWithoutProductsInput>
    create: XOR<ObjectCreateWithoutProductsInput, ObjectUncheckedCreateWithoutProductsInput>
    where?: ObjectWhereInput
  }

  export type ObjectUpdateToOneWithWhereWithoutProductsInput = {
    where?: ObjectWhereInput
    data: XOR<ObjectUpdateWithoutProductsInput, ObjectUncheckedUpdateWithoutProductsInput>
  }

  export type ObjectUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_types?: ProductTypeUpdateManyWithoutObjectNestedInput
  }

  export type ObjectUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_types?: ProductTypeUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type ProductTypeUpsertWithoutProductsInput = {
    update: XOR<ProductTypeUpdateWithoutProductsInput, ProductTypeUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductTypeCreateWithoutProductsInput, ProductTypeUncheckedCreateWithoutProductsInput>
    where?: ProductTypeWhereInput
  }

  export type ProductTypeUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductTypeWhereInput
    data: XOR<ProductTypeUpdateWithoutProductsInput, ProductTypeUncheckedUpdateWithoutProductsInput>
  }

  export type ProductTypeUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object?: ObjectUpdateOneRequiredWithoutProduct_typesNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCategoryUpsertWithoutProductsInput = {
    update: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductCategoryCreateWithoutProductsInput, ProductCategoryUncheckedCreateWithoutProductsInput>
    where?: ProductCategoryWhereInput
  }

  export type ProductCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductCategoryWhereInput
    data: XOR<ProductCategoryUpdateWithoutProductsInput, ProductCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ProductCategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object: ObjectCreateNestedOneWithoutProductsInput
    product_type?: ProductTypeCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    product_type_id?: number | null
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ObjectCreateWithoutProduct_typesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutObjectInput
  }

  export type ObjectUncheckedCreateWithoutProduct_typesInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutObjectInput
  }

  export type ObjectCreateOrConnectWithoutProduct_typesInput = {
    where: ObjectWhereUniqueInput
    create: XOR<ObjectCreateWithoutProduct_typesInput, ObjectUncheckedCreateWithoutProduct_typesInput>
  }

  export type ProductCreateWithoutProduct_typeInput = {
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object: ObjectCreateNestedOneWithoutProductsInput
    category: ProductCategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutProduct_typeInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    category_id: number
  }

  export type ProductCreateOrConnectWithoutProduct_typeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput>
  }

  export type ProductCreateManyProduct_typeInputEnvelope = {
    data: ProductCreateManyProduct_typeInput | ProductCreateManyProduct_typeInput[]
    skipDuplicates?: boolean
  }

  export type ObjectUpsertWithoutProduct_typesInput = {
    update: XOR<ObjectUpdateWithoutProduct_typesInput, ObjectUncheckedUpdateWithoutProduct_typesInput>
    create: XOR<ObjectCreateWithoutProduct_typesInput, ObjectUncheckedCreateWithoutProduct_typesInput>
    where?: ObjectWhereInput
  }

  export type ObjectUpdateToOneWithWhereWithoutProduct_typesInput = {
    where?: ObjectWhereInput
    data: XOR<ObjectUpdateWithoutProduct_typesInput, ObjectUncheckedUpdateWithoutProduct_typesInput>
  }

  export type ObjectUpdateWithoutProduct_typesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutObjectNestedInput
  }

  export type ObjectUncheckedUpdateWithoutProduct_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutProduct_typeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProduct_typeInput, ProductUncheckedUpdateWithoutProduct_typeInput>
    create: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProduct_typeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProduct_typeInput, ProductUncheckedUpdateWithoutProduct_typeInput>
  }

  export type ProductUpdateManyWithWhereWithoutProduct_typeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProduct_typeInput>
  }

  export type ProductCreateManyObjectInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product_type_id?: number | null
    category_id: number
  }

  export type ProductTypeCreateManyObjectInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateWithoutObjectInput = {
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type?: ProductTypeUpdateOneWithoutProductsNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutObjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyWithoutObjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductTypeUpdateWithoutObjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutProduct_typeNestedInput
  }

  export type ProductTypeUncheckedUpdateWithoutObjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutProduct_typeNestedInput
  }

  export type ProductTypeUncheckedUpdateManyWithoutObjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    product_type_id?: number | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object?: ObjectUpdateOneRequiredWithoutProductsNestedInput
    product_type?: ProductTypeUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    product_type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    product_type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateManyProduct_typeInput = {
    id?: number
    number: string
    area: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    one_gt_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    object_id: number
    category_id: number
  }

  export type ProductUpdateWithoutProduct_typeInput = {
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object?: ObjectUpdateOneRequiredWithoutProductsNestedInput
    category?: ProductCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyWithoutProduct_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    one_gt_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    object_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ObjectCountOutputTypeDefaultArgs instead
     */
    export type ObjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCategoryCountOutputTypeDefaultArgs instead
     */
    export type ProductCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductTypeCountOutputTypeDefaultArgs instead
     */
    export type ProductTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObjectDefaultArgs instead
     */
    export type ObjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCategoryDefaultArgs instead
     */
    export type ProductCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductTypeDefaultArgs instead
     */
    export type ProductTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductTypeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}