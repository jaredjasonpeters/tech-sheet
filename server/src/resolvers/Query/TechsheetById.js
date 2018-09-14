const techsheetById = (root, args, context) => {
    return context.prisma.techsheet({ id: args.techsheetId })
  }

  module.export = {
      techsheetById
  }