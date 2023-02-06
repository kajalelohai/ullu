import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as path from 'path';
import { buildSchema } from 'type-graphql';

import { NounResolver } from './graphql/resolvers/noun';
import { User } from './entities/User';
import { DataSource } from 'typeorm';
import { Noun } from './entities/Noun';

export interface Context {
  user?: User;
}

const AppDataSource = new DataSource({
  type: 'sqlite',
  synchronize: true,
  logging: true,
  database: './ullu.db',
  entities: [User, Noun]
});

async function bootstrap() {
  await AppDataSource.initialize();
  let user: User;
  try {
    user = await User.findOneByOrFail({ email: 'test@test.com' });
  } catch (err) {
    user = new User();
    user.email = 'test@test.com';
    user.password = 'test';
    user.roles = ['user'];
    user.username = 'test';
    await user.save();
  }

  const schema = await buildSchema({
    resolvers: [NounResolver],
    // automatically create `schema.gql` file with schema definition in current
    // folder
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  });

  const server = new ApolloServer<Context>({
    schema
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const ctx: Context = { user };

      return ctx;
    }
  });

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
