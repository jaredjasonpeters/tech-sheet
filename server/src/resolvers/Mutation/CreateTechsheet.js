const createTechsheet = (root, args, context) => {
      return context.prisma.createTechsheet(
        {
          title: args.title,
        },
      )
    }

    module.export = {
      createTechsheet
    }