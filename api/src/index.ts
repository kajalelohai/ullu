import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { QnAResolver } from './graphql/resolvers/qna-resolver';
import { AuthResolver } from './graphql/resolvers/auth-resolver';
import authChecker from './lib/auth-checker';
import { ResolverContext } from './lib/types';
import dataSource from './datasource';

async function bootstrap() {
  await dataSource.initialize();

  const schema = await buildSchema({
    authChecker,
    resolvers: [QnAResolver, AuthResolver],
    validate: {
      forbidUnknownValues: false
    }
  });

  const server = new ApolloServer<ResolverContext>({
    schema
  });

  const { url } = await startStandaloneServer(server as any, {
    context: async ({ req, res }) => {
      return { req, res, session: {} };
    }
  });

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
