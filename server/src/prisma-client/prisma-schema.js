module.exports = {
        typeDefs: /* GraphQL */ `type AggregateTechsheet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Company {
  DLFPICKSEED
  SEEDRESEARCHOFOREGON
}

scalar DateTime

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createTechsheet(data: TechsheetCreateInput!): Techsheet!
  updateTechsheet(data: TechsheetUpdateInput!, where: TechsheetWhereUniqueInput!): Techsheet
  updateManyTechsheets(data: TechsheetUpdateInput!, where: TechsheetWhereInput): BatchPayload!
  upsertTechsheet(where: TechsheetWhereUniqueInput!, create: TechsheetCreateInput!, update: TechsheetUpdateInput!): Techsheet!
  deleteTechsheet(where: TechsheetWhereUniqueInput!): Techsheet
  deleteManyTechsheets(where: TechsheetWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  techsheet(where: TechsheetWhereUniqueInput!): Techsheet
  techsheets(where: TechsheetWhereInput, orderBy: TechsheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Techsheet]!
  techsheetsConnection(where: TechsheetWhereInput, orderBy: TechsheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TechsheetConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  techsheet(where: TechsheetSubscriptionWhereInput): TechsheetSubscriptionPayload
}

type Techsheet {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  published: Boolean!
  author: User
}

type TechsheetConnection {
  pageInfo: PageInfo!
  edges: [TechsheetEdge]!
  aggregate: AggregateTechsheet!
}

input TechsheetCreateInput {
  title: String!
  published: Boolean
  author: UserCreateOneWithoutTechsheetsInput
}

input TechsheetCreateManyWithoutAuthorInput {
  create: [TechsheetCreateWithoutAuthorInput!]
  connect: [TechsheetWhereUniqueInput!]
}

input TechsheetCreateWithoutAuthorInput {
  title: String!
  published: Boolean
}

type TechsheetEdge {
  node: Techsheet!
  cursor: String!
}

enum TechsheetOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
}

type TechsheetPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  published: Boolean!
}

type TechsheetSubscriptionPayload {
  mutation: MutationType!
  node: Techsheet
  updatedFields: [String!]
  previousValues: TechsheetPreviousValues
}

input TechsheetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TechsheetWhereInput
  AND: [TechsheetSubscriptionWhereInput!]
  OR: [TechsheetSubscriptionWhereInput!]
  NOT: [TechsheetSubscriptionWhereInput!]
}

input TechsheetUpdateInput {
  title: String
  published: Boolean
  author: UserUpdateOneWithoutTechsheetsInput
}

input TechsheetUpdateManyWithoutAuthorInput {
  create: [TechsheetCreateWithoutAuthorInput!]
  delete: [TechsheetWhereUniqueInput!]
  connect: [TechsheetWhereUniqueInput!]
  disconnect: [TechsheetWhereUniqueInput!]
  update: [TechsheetUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TechsheetUpsertWithWhereUniqueWithoutAuthorInput!]
}

input TechsheetUpdateWithoutAuthorDataInput {
  title: String
  published: Boolean
}

input TechsheetUpdateWithWhereUniqueWithoutAuthorInput {
  where: TechsheetWhereUniqueInput!
  data: TechsheetUpdateWithoutAuthorDataInput!
}

input TechsheetUpsertWithWhereUniqueWithoutAuthorInput {
  where: TechsheetWhereUniqueInput!
  update: TechsheetUpdateWithoutAuthorDataInput!
  create: TechsheetCreateWithoutAuthorInput!
}

input TechsheetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [TechsheetWhereInput!]
  OR: [TechsheetWhereInput!]
  NOT: [TechsheetWhereInput!]
}

input TechsheetWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  companies: [Company!]!
  techsheets(where: TechsheetWhereInput, orderBy: TechsheetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Techsheet!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreatecompaniesInput {
  set: [Company!]
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  companies: UserCreatecompaniesInput
  techsheets: TechsheetCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTechsheetsInput {
  create: UserCreateWithoutTechsheetsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTechsheetsInput {
  email: String!
  password: String!
  name: String!
  companies: UserCreatecompaniesInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  companies: [Company!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdatecompaniesInput {
  set: [Company!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  companies: UserUpdatecompaniesInput
  techsheets: TechsheetUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutTechsheetsInput {
  create: UserCreateWithoutTechsheetsInput
  update: UserUpdateWithoutTechsheetsDataInput
  upsert: UserUpsertWithoutTechsheetsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTechsheetsDataInput {
  email: String
  password: String
  name: String
  companies: UserUpdatecompaniesInput
}

input UserUpsertWithoutTechsheetsInput {
  update: UserUpdateWithoutTechsheetsDataInput!
  create: UserCreateWithoutTechsheetsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  techsheets_every: TechsheetWhereInput
  techsheets_some: TechsheetWhereInput
  techsheets_none: TechsheetWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    