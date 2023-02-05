import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as path from "path";
import { buildSchema } from "type-graphql";

import { VocabResolver } from "./resolvers/vocab";
import { User } from "./entities/User";
import { DataSource } from "typeorm";
import { Vocab } from "./entities/Vocab";

export interface Context {
  user: User
}

const AppDataSource = new DataSource({
  type: "sqlite",
  synchronize: true,
  logging: true,
  database: "./ullu.db",
  entities: [User, Vocab]
})

async function bootstrap() {
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [VocabResolver],
    // automatically create `schema.gql` file with schema definition in current
    // folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server);

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
