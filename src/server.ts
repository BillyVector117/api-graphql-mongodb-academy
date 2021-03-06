import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http"
import "./database.js"
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema"
import expressPlayGround from "graphql-playground-middleware-express"
const app = express();

app.use(cors())
app.use(compression())
const server = new ApolloServer({
    schema,
    introspection: true
})
server.applyMiddleware({ app });
app.get("/", expressPlayGround({
    endpoint: "/graphql"
}))

const httpServer = createServer(app)

const PORT = 3000;

httpServer.listen({
    port: process.env.PORT || PORT
}, () => console.log(`Academy server on port: http://localhost:${PORT}`))