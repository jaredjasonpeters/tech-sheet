const { getUserId } = require('../utils')

const Query = {
    me: (parent, args, context, info) => {
    return context.db.user({ id: getUserId(context) })
    },
    users: (root, args, context) => {
        return context.db.users()
    },
    techsheet: (root, args, context) => {
        return context.db.techsheet({ id: args.techsheetId })
    },
    techsheets: (root, args, context) => {
        return context.db.techsheets()
    },
    techsheetsByUser: (root, args, context) => {
        return context.db.user({
          id: args.userId
        }).techsheets()
    },
}

module.exports = {
    Query,
}