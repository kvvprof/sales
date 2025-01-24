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

export type BaseOptionsInput = {
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

export type GetPricingProductInput = {
  id: Scalars['PositiveInt']['input'];
};

export type GetPricingProductsInput = {
  objectId: Scalars['PositiveInt']['input'];
  options?: InputMaybe<BaseOptionsInput>;
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

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getPricingProduct: PricingProduct;
  getPricingProducts: PricingProducts;
};


export type QueryGetPricingProductArgs = {
  input: GetPricingProductInput;
};


export type QueryGetPricingProductsArgs = {
  input: GetPricingProductsInput;
};

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
  BaseOptionsInput: BaseOptionsInput;
  BasicPricingObject: ResolverTypeWrapper<BasicPricingObject>;
  BasicPricingProduct: ResolverTypeWrapper<BasicPricingProduct>;
  BasicPricingProductCategory: ResolverTypeWrapper<BasicPricingProductCategory>;
  BasicPricingProductType: ResolverTypeWrapper<BasicPricingProductType>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  GetPricingProductInput: GetPricingProductInput;
  GetPricingProductsInput: GetPricingProductsInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeDecimal: ResolverTypeWrapper<Scalars['NonNegativeDecimal']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  PositiveDecimal: ResolverTypeWrapper<Scalars['PositiveDecimal']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  PricingProduct: ResolverTypeWrapper<PricingProduct>;
  PricingProducts: ResolverTypeWrapper<PricingProducts>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  _Any: ResolverTypeWrapper<Scalars['_Any']['output']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']['output']>;
  _Service: ResolverTypeWrapper<_Service>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BaseOptionsInput: BaseOptionsInput;
  BasicPricingObject: BasicPricingObject;
  BasicPricingProduct: BasicPricingProduct;
  BasicPricingProductCategory: BasicPricingProductCategory;
  BasicPricingProductType: BasicPricingProductType;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  Decimal: Scalars['Decimal']['output'];
  GetPricingProductInput: GetPricingProductInput;
  GetPricingProductsInput: GetPricingProductsInput;
  JSON: Scalars['JSON']['output'];
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeDecimal: Scalars['NonNegativeDecimal']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  PositiveDecimal: Scalars['PositiveDecimal']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
  PricingProduct: PricingProduct;
  PricingProducts: PricingProducts;
  Query: {};
  String: Scalars['String']['output'];
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

export type BasicPricingObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicPricingObject'] = ResolversParentTypes['BasicPricingObject']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicPricingProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicPricingProduct'] = ResolversParentTypes['BasicPricingProduct']> = {
  area?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  oneGtId?: Resolver<Maybe<ResolversTypes['PositiveInt']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['NonNegativeDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicPricingProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicPricingProductCategory'] = ResolversParentTypes['BasicPricingProductCategory']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicPricingProductTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicPricingProductType'] = ResolversParentTypes['BasicPricingProductType']> = {
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

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

export type PricingProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingProduct'] = ResolversParentTypes['PricingProduct']> = {
  category?: Resolver<ResolversTypes['BasicPricingProductCategory'], ParentType, ContextType>;
  object?: Resolver<ResolversTypes['BasicPricingObject'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['BasicPricingProduct'], ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['BasicPricingProductType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingProducts'] = ResolversParentTypes['PricingProducts']> = {
  products?: Resolver<Array<ResolversTypes['PricingProduct']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  getPricingProduct?: Resolver<ResolversTypes['PricingProduct'], ParentType, ContextType, RequireFields<QueryGetPricingProductArgs, 'input'>>;
  getPricingProducts?: Resolver<ResolversTypes['PricingProducts'], ParentType, ContextType, RequireFields<QueryGetPricingProductsArgs, 'input'>>;
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
  BasicPricingObject?: BasicPricingObjectResolvers<ContextType>;
  BasicPricingProduct?: BasicPricingProductResolvers<ContextType>;
  BasicPricingProductCategory?: BasicPricingProductCategoryResolvers<ContextType>;
  BasicPricingProductType?: BasicPricingProductTypeResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeDecimal?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  PositiveDecimal?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PricingProduct?: PricingProductResolvers<ContextType>;
  PricingProducts?: PricingProductsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
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
