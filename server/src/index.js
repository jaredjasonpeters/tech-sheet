const { prisma } = require('./prisma-client')
const { GraphQLServer } = require('graphql-yoga')


const resolvers = {
  Query: {
    techsheet(root, args, context) {
      return context.prisma.techsheet({ id: args.techsheetId })
    },
    techsheetsByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).techsheets()
    },
    users(root, args, context) {
      return context.prisma.users()
    },
    techsheets(root, args, context) {
      return context.prisma.techsheets()
    }
  },
  Mutation: {
    createTechsheet(root, args, context) {
      return context.prisma.createTechsheet(
        {
          title: args.title,
        },
      )
    },
    createUser(root, args, context) {
      return context.prisma.createUser(
        {
          name: args.name,
          email: args.email,
          password: args.password,
          companies: {
            set: args.companies
          }
        }
      )
    },
    deleteUsers(root, args, context) {
      return context.prisma.deleteManyUsers()
    }
  },
  User: {
    techsheets(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).techsheets()
    }
  },
  Techsheet: {
    author(root, args, context) {
      return context.prisma.techsheet({
        id: root.id
      }).author()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))