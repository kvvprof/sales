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
  correspondentNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['PositiveInt']['output'];
  name: Scalars['String']['output'];
};

export type BasicCommonContractor = {
  __typename?: 'BasicCommonContractor';
  actualAddress?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Scalars['String']['output']>;
  id: Scalars['PositiveInt']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  kpp?: Maybe<Scalars['String']['output']>;
  legalAddress?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ogrn?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  propogatedAt?: Maybe<Scalars['DateTime']['output']>;
  reconciliationLink?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export type BasicCommonEntity = {
  __typename?: 'BasicCommonEntity';
  dbName: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['PositiveInt']['output'];
  inn: Scalars['String']['output'];
  kpp: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ogrn: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
  strId: Scalars['String']['output'];
};

export type CommonContractor = {
  __typename?: 'CommonContractor';
  accounts?: Maybe<Array<BasicCommonAccount>>;
  contractor: BasicCommonContractor;
};

export type CommonContractors = {
  __typename?: 'CommonContractors';
  contractors: Array<CommonContractor>;
  totalCount: Scalars['PositiveInt']['output'];
};

export type CommonEntities = {
  __typename?: 'CommonEntities';
  entities: Array<BasicCommonEntity>;
  totalCount: Scalars['PositiveInt']['output'];
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

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  getCommonContractor: CommonContractor;
  getCommonContractors: CommonContractors;
  getCommonEntities: CommonEntities;
  getCommonEntity: BasicCommonEntity;
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
  BasicCommonAccount: ResolverTypeWrapper<BasicCommonAccount>;
  BasicCommonBank: ResolverTypeWrapper<BasicCommonBank>;
  BasicCommonContractor: ResolverTypeWrapper<BasicCommonContractor>;
  BasicCommonEntity: ResolverTypeWrapper<BasicCommonEntity>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CommonContractor: ResolverTypeWrapper<CommonContractor>;
  CommonContractors: ResolverTypeWrapper<CommonContractors>;
  CommonEntities: ResolverTypeWrapper<CommonEntities>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  GetCommonContractorInput: GetCommonContractorInput;
  GetCommonContractorsInput: GetCommonContractorsInput;
  GetCommonEntitiesInput: GetCommonEntitiesInput;
  GetCommonEntityInput: GetCommonEntityInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeDecimal: ResolverTypeWrapper<Scalars['NonNegativeDecimal']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  PositiveDecimal: ResolverTypeWrapper<Scalars['PositiveDecimal']['output']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  _Any: ResolverTypeWrapper<Scalars['_Any']['output']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']['output']>;
  _Service: ResolverTypeWrapper<_Service>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BaseOptionsInput: BaseOptionsInput;
  BasicCommonAccount: BasicCommonAccount;
  BasicCommonBank: BasicCommonBank;
  BasicCommonContractor: BasicCommonContractor;
  BasicCommonEntity: BasicCommonEntity;
  Boolean: Scalars['Boolean']['output'];
  CommonContractor: CommonContractor;
  CommonContractors: CommonContractors;
  CommonEntities: CommonEntities;
  DateTime: Scalars['DateTime']['output'];
  Decimal: Scalars['Decimal']['output'];
  GetCommonContractorInput: GetCommonContractorInput;
  GetCommonContractorsInput: GetCommonContractorsInput;
  GetCommonEntitiesInput: GetCommonEntitiesInput;
  GetCommonEntityInput: GetCommonEntityInput;
  JSON: Scalars['JSON']['output'];
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeDecimal: Scalars['NonNegativeDecimal']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  PositiveDecimal: Scalars['PositiveDecimal']['output'];
  PositiveInt: Scalars['PositiveInt']['output'];
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

export type BasicCommonAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicCommonAccount'] = ResolversParentTypes['BasicCommonAccount']> = {
  bank?: Resolver<Maybe<ResolversTypes['BasicCommonBank']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicCommonBankResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicCommonBank'] = ResolversParentTypes['BasicCommonBank']> = {
  bik?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  correspondentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicCommonContractorResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicCommonContractor'] = ResolversParentTypes['BasicCommonContractor']> = {
  actualAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contacts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  inn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kpp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  legalAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogrn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  propogatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  reconciliationLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasicCommonEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasicCommonEntity'] = ResolversParentTypes['BasicCommonEntity']> = {
  dbName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  inn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kpp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ogrn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommonContractorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommonContractor'] = ResolversParentTypes['CommonContractor']> = {
  accounts?: Resolver<Maybe<Array<ResolversTypes['BasicCommonAccount']>>, ParentType, ContextType>;
  contractor?: Resolver<ResolversTypes['BasicCommonContractor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommonContractorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommonContractors'] = ResolversParentTypes['CommonContractors']> = {
  contractors?: Resolver<Array<ResolversTypes['CommonContractor']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommonEntitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommonEntities'] = ResolversParentTypes['CommonEntities']> = {
  entities?: Resolver<Array<ResolversTypes['BasicCommonEntity']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['PositiveInt'], ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _service?: Resolver<ResolversTypes['_Service'], ParentType, ContextType>;
  getCommonContractor?: Resolver<ResolversTypes['CommonContractor'], ParentType, ContextType, RequireFields<QueryGetCommonContractorArgs, 'input'>>;
  getCommonContractors?: Resolver<ResolversTypes['CommonContractors'], ParentType, ContextType, Partial<QueryGetCommonContractorsArgs>>;
  getCommonEntities?: Resolver<ResolversTypes['CommonEntities'], ParentType, ContextType, Partial<QueryGetCommonEntitiesArgs>>;
  getCommonEntity?: Resolver<ResolversTypes['BasicCommonEntity'], ParentType, ContextType, RequireFields<QueryGetCommonEntityArgs, 'input'>>;
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
  BasicCommonAccount?: BasicCommonAccountResolvers<ContextType>;
  BasicCommonBank?: BasicCommonBankResolvers<ContextType>;
  BasicCommonContractor?: BasicCommonContractorResolvers<ContextType>;
  BasicCommonEntity?: BasicCommonEntityResolvers<ContextType>;
  CommonContractor?: CommonContractorResolvers<ContextType>;
  CommonContractors?: CommonContractorsResolvers<ContextType>;
  CommonEntities?: CommonEntitiesResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeDecimal?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  PositiveDecimal?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
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
