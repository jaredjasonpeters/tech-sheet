const { getUserId } = require("../utils");

const Query = {
  me: (parent, args, context, info) => {
    return context.db.query.user({ id: getUserId(context) }, info);
  },
  users: (root, args, context, info) => {
    return context.db.query.users({}, info);
  },
  techsheet: (root, args, context, info) => {
    return context.db.query.techsheet({ id: args.techsheetId }, info);
  },
  techsheets: async (root, args, context, info) => {
    const techsheets = await context.db.query.techsheets({}, info);
    return techsheets;
  },
  techsheetsByUser: (root, args, context, info) => {
    return context.db.query
      .user(
        {
          id: args.userId
        },
        info
      )
      .techsheets();
  }
};

module.exports = {
  Query
};
