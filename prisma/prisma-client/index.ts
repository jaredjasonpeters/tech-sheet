// Code generated by Prisma CLI (https://github.com/prisma/prisma) and prisma-client-lib@0.2.55. DO NOT EDIT.

import { GraphQLResolveInfo, GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  techsheet: (where?: TechsheetWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  user: (args: { where: UserWhereUniqueInput }) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<UserNode>>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  techsheet: (args: { where: TechsheetWhereUniqueInput }) => Techsheet;
  techsheets: (
    args?: {
      where?: TechsheetWhereInput;
      orderBy?: TechsheetOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<TechsheetNode>>;
  techsheetsConnection: (
    args?: {
      where?: TechsheetWhereInput;
      orderBy?: TechsheetOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TechsheetConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;
  createTechsheet: (data: TechsheetCreateInput) => Techsheet;
  updateTechsheet: (
    args: { data: TechsheetUpdateInput; where: TechsheetWhereUniqueInput }
  ) => Techsheet;
  updateManyTechsheets: (
    args: { data: TechsheetUpdateInput; where?: TechsheetWhereInput }
  ) => BatchPayload;
  upsertTechsheet: (
    args: {
      where: TechsheetWhereUniqueInput;
      create: TechsheetCreateInput;
      update: TechsheetUpdateInput;
    }
  ) => Techsheet;
  deleteTechsheet: (where: TechsheetWhereUniqueInput) => Techsheet;
  deleteManyTechsheets: (where?: TechsheetWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    args?: { where?: UserSubscriptionWhereInput }
  ) => UserSubscriptionPayloadSubscription;
  techsheet: (
    args?: { where?: TechsheetSubscriptionWhereInput }
  ) => TechsheetSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TechsheetOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "published_ASC"
  | "published_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Company = "DLFPICKSEED" | "SEEDRESEARCHOFOREGON";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface TechsheetCreateManyWithoutAuthorInput {
  create?:
    | TechsheetCreateWithoutAuthorInput[]
    | TechsheetCreateWithoutAuthorInput;
  connect?: TechsheetWhereUniqueInput[] | TechsheetWhereUniqueInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id?: ID_Input;
  email?: String;
}>;

export interface TechsheetCreateInput {
  title: String;
  published?: Boolean;
  author?: UserCreateOneWithoutTechsheetsInput;
}

export interface TechsheetUpdateWithWhereUniqueWithoutAuthorInput {
  where: TechsheetWhereUniqueInput;
  data: TechsheetUpdateWithoutAuthorDataInput;
}

export interface TechsheetUpsertWithWhereUniqueWithoutAuthorInput {
  where: TechsheetWhereUniqueInput;
  update: TechsheetUpdateWithoutAuthorDataInput;
  create: TechsheetCreateWithoutAuthorInput;
}

export interface UserUpdatecompaniesInput {
  set?: Company[] | Company;
}

export interface TechsheetSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TechsheetWhereInput;
  AND?: TechsheetSubscriptionWhereInput[] | TechsheetSubscriptionWhereInput;
  OR?: TechsheetSubscriptionWhereInput[] | TechsheetSubscriptionWhereInput;
  NOT?: TechsheetSubscriptionWhereInput[] | TechsheetSubscriptionWhereInput;
}

export interface UserUpsertWithoutTechsheetsInput {
  update: UserUpdateWithoutTechsheetsDataInput;
  create: UserCreateWithoutTechsheetsInput;
}

export interface UserCreateInput {
  email: String;
  name: String;
  companies?: UserCreatecompaniesInput;
  techsheets?: TechsheetCreateManyWithoutAuthorInput;
}

export interface UserUpdateOneWithoutTechsheetsInput {
  create?: UserCreateWithoutTechsheetsInput;
  update?: UserUpdateWithoutTechsheetsDataInput;
  upsert?: UserUpsertWithoutTechsheetsInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserCreatecompaniesInput {
  set?: Company[] | Company;
}

export interface UserCreateWithoutTechsheetsInput {
  email: String;
  name: String;
  companies?: UserCreatecompaniesInput;
}

export interface TechsheetUpdateWithoutAuthorDataInput {
  title?: String;
  published?: Boolean;
}

export interface UserCreateOneWithoutTechsheetsInput {
  create?: UserCreateWithoutTechsheetsInput;
  connect?: UserWhereUniqueInput;
}

export interface TechsheetUpdateManyWithoutAuthorInput {
  create?:
    | TechsheetCreateWithoutAuthorInput[]
    | TechsheetCreateWithoutAuthorInput;
  delete?: TechsheetWhereUniqueInput[] | TechsheetWhereUniqueInput;
  connect?: TechsheetWhereUniqueInput[] | TechsheetWhereUniqueInput;
  disconnect?: TechsheetWhereUniqueInput[] | TechsheetWhereUniqueInput;
  update?:
    | TechsheetUpdateWithWhereUniqueWithoutAuthorInput[]
    | TechsheetUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | TechsheetUpsertWithWhereUniqueWithoutAuthorInput[]
    | TechsheetUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  techsheets_every?: TechsheetWhereInput;
  techsheets_some?: TechsheetWhereInput;
  techsheets_none?: TechsheetWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserUpdateInput {
  email?: String;
  name?: String;
  companies?: UserUpdatecompaniesInput;
  techsheets?: TechsheetUpdateManyWithoutAuthorInput;
}

export interface TechsheetCreateWithoutAuthorInput {
  title: String;
  published?: Boolean;
}

export interface TechsheetWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  published?: Boolean;
  published_not?: Boolean;
  author?: UserWhereInput;
  AND?: TechsheetWhereInput[] | TechsheetWhereInput;
  OR?: TechsheetWhereInput[] | TechsheetWhereInput;
  NOT?: TechsheetWhereInput[] | TechsheetWhereInput;
}

export type TechsheetWhereUniqueInput = AtLeastOne<{
  id?: ID_Input;
}>;

export interface TechsheetUpdateInput {
  title?: String;
  published?: Boolean;
  author?: UserUpdateOneWithoutTechsheetsInput;
}

export interface UserUpdateWithoutTechsheetsDataInput {
  email?: String;
  name?: String;
  companies?: UserUpdatecompaniesInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TechsheetPreviousValuesNode {
  id: ID_Output;
  title: String;
  published: Boolean;
}

export interface TechsheetPreviousValues
  extends Promise<TechsheetPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface TechsheetPreviousValuesSubscription
  extends Promise<AsyncIterator<TechsheetPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface TechsheetSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface TechsheetSubscriptionPayload
  extends Promise<TechsheetSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Techsheet>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TechsheetPreviousValues>() => T;
}

export interface TechsheetSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TechsheetSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TechsheetSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TechsheetPreviousValuesSubscription>() => T;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  email: String;
  name: String;
  companies: Company[];
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  companies: () => Promise<Company[]>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  companies: () => Promise<AsyncIterator<Company[]>>;
}

export interface TechsheetNode {
  id: ID_Output;
  title: String;
  published: Boolean;
}

export interface Techsheet extends Promise<TechsheetNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  published: () => Promise<Boolean>;
  author: <T = User>() => T;
}

export interface TechsheetSubscription
  extends Promise<AsyncIterator<TechsheetNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface UserNode {
  id: ID_Output;
  email: String;
  name: String;
  companies: Company[];
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  companies: () => Promise<Company[]>;
  techsheets: <T = Promise<Array<TechsheetNode>>>(
    args?: {
      where?: TechsheetWhereInput;
      orderBy?: TechsheetOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  companies: () => Promise<AsyncIterator<Company[]>>;
  techsheets: <T = Promise<AsyncIterator<Array<TechsheetSubscription>>>>(
    args?: {
      where?: TechsheetWhereInput;
      orderBy?: TechsheetOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface AggregateTechsheetNode {
  count: Int;
}

export interface AggregateTechsheet
  extends Promise<AggregateTechsheetNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTechsheetSubscription
  extends Promise<AsyncIterator<AggregateTechsheetNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TechsheetEdgeNode {
  cursor: String;
}

export interface TechsheetEdge
  extends Promise<TechsheetEdgeNode>,
    Fragmentable {
  node: <T = Techsheet>() => T;
  cursor: () => Promise<String>;
}

export interface TechsheetEdgeSubscription
  extends Promise<AsyncIterator<TechsheetEdgeNode>>,
    Fragmentable {
  node: <T = TechsheetSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TechsheetConnectionNode {}

export interface TechsheetConnection
  extends Promise<TechsheetConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<TechsheetEdgeNode>>>() => T;
  aggregate: <T = AggregateTechsheet>() => T;
}

export interface TechsheetConnectionSubscription
  extends Promise<AsyncIterator<TechsheetConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<TechsheetEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateTechsheetSubscription>() => T;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  endpoint: "https://us1.prisma.sh/jared-peters-2fd802/dlf/dev"
});
export const prisma = new Prisma();
