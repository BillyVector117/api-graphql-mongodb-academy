import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import "graphql-import-node";
import typeDefs from "./schema.graphql" // .graphql extensions only reads by "graphql-import-node" module
import resolvers from "../resolvers";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})
export default schema;

