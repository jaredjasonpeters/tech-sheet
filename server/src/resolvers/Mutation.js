const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')


const Mutation = {
    createUser: (root, args, context, info) => {
        return context.db.createUser(
          {
            name: args.name,
            email: args.email,
            password: args.password,
            companies: {
              set: args.companies
            }
          },
        )
    },
    createTechsheet: (root, args, context) => {
        return context.prisma.createTechsheet(
          {
            title: args.title,
          },
        )
    },
    deleteUsers: (root, args, context) => {
        return context.db.deleteManyUsers()
    },
    signup: async (root, { name, email, password }, context) => {
        const hashedPassword = await hash(password, 10)
        const user = await context.db.createUser({
            name,
            email,
            password: hashedPassword,
        })
        return {
            token: sign({ userId: user.id }, APP_SECRET),
            user,
        }
    },
    login: async (root, { email, password }, context) => {
        const user = await context.db.user({ email })
    
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
    
        const valid = await compare(password, user.password)
        if (!valid) {
          throw new Error('Invalid password')
        }
    
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        }
      },
}

module.exports = {
    Mutation,
}