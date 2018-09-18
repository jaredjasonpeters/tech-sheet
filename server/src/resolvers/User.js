const User = {
    id: root => root.id,
    email: root => root.email,
    name: root => root.name,
    companies: root => root.companies,
    techsheets: (root, args, context) => {
        return context.db.user({
          id: root.id
        }).techsheets()
      }
}

module.exports = {
    User,
}
