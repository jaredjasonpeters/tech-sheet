//Query

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

  //Mutations

  createUser(root, args, context) {
    return context.prisma.createUser(
      {
        name: args.name,
        email: args.email,
        password: args.password,
        companies: {
          connect: {
            id: args.id
          }
        },
        techsheets: {
          connect: {
            id: args.id
          }
        }
      }
    )
  },
  deleteUsers(root, args, context) {
    return context.prisma.deleteManyUsers()
  },
  createCompany(root, args, context) {
    return context.prisma.createCompany({
      companyName: args.companyName,
       members: {
         connect: {
           id: root.id
         }
      }
    })
  }

  //Other