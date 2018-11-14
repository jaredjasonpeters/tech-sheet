require("dotenv").config({ path: ".env" });

const { GraphQLServer } = require("graphql-yoga");
const prisma = require("./db");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => {
    return {
      ...req,
      db: prisma
    };
  }
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => console.log(`Server is running on ${deets.port}`)
);
