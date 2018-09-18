const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { AuthPayload } = require('./AuthPayload')
const { User } = require('./User')
const { Techsheet } = require('./Techsheet')

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  User,
  Techsheet
}

module.exports = {
  resolvers,
}