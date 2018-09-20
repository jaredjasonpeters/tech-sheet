const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')


const Mutation = {
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
    signup: async (root, { name, email, password, companies }, context) => {
        const hashedPassword = await hash(password, 10)
        const user = await context.db.createUser({
            name,
            email,
            password: hashedPassword,
            companies: {
              set: companies
            }
        })
        return {
            token: sign({ userId: user.id }, APP_SECRET),
            user,
        }
    },
    login: async (root, { email, password }, context) => {
        const user = await context.db.user({ email })
    
        if (!user) {
          throw new Error(`No user found for with that email`)
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