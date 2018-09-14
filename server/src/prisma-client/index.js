"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaBindingClass({
  typeDefs,
  endpoint: "https://us1.prisma.sh/jared-peters-2fd802/dlf/dev",
  secret: 'Oregonseed2018',
});
exports.prisma = new exports.Prisma();