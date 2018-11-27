const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { APP_SECRET } = require("../utils");
const { getUserId } = require("../utils");

const Mutation = {
  createTechsheet: async (parent, args, context, info) => {
    const userId = "test";
    const createTechsheet = await context.db.mutation.createTechsheet(
      {
        where: {
          data: {
            title: args.title,
            company: args.company,
            division: args.division,
            author: {
              connect: {
                id: userId
              }
            },
            isAlist: args.alist,
            classification: args.classification,
            species: args.species,
            tolerance: {
              create: {
                data: {
                  create: [args.rows]
                }
              }
            },
            image: args.image,
            quickfacts: args.quickfacts,
            adaptation: args.adaptation,
            ntepTables: {
              create: [args.ntepTables]
            },
            seedingRate: args.seedingRate,
            establishmentRate: args.establishmentRate,
            mowingFrequency: args.mowingFrequency,
            nitrogenReq: args.nitrogenReq,
            endophyteEnhanced: args.endophyteEnhanced
          }
        }
      },
      info
    );
    return createTechsheet;
  },
  deleteTechsheet: async (root, args, context, info) => {
    const techsheetId = args.id;
    const techsheet = await context.db.mutation.deleteTechsheet(
      {
        where: {
          id: techsheetId
        }
      },
      info
    );
    return techsheet;
  },
  deleteUsers: (root, args, context, info) => {
    return context.db.mutation.deleteManyUsers();
  },
  signup: async (root, { name, email, password, companies }, context) => {
    const hashedPassword = await hash(password, 10);
    const user = await context.db.mutation.createUser(
      {
        name,
        email,
        password: hashedPassword,
        companies: {
          set: companies
        }
      },
      info
    );
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  login: async (root, { email, password }, context, info) => {
    const user = await context.db.query.user({ email }, info);

    if (!user) {
      throw new Error(`No user found for with that email`);
    }

    const valid = await compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }

    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  updateTitle: async (root, { title }, context, info) => {
    const userId = await getUserId(context);
    return context.db.mutation.updateUser(
      {
        data: { title },
        where: {
          id: userId
        }
      },
      info
    );
  }
};

module.exports = {
  Mutation
};
