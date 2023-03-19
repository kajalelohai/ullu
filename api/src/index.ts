import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { QnAResolver } from './graphql/resolvers/qna-resolver';
import { AuthResolver } from './graphql/resolvers/auth-resolver';
import authChecker from './lib/auth-checker';
import { ResolverContext, Session } from './lib/types';
import dataSource from './datasource';
import cookie from 'cookie';
import { sessions } from './session';

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
      const sessionId = cookie.parse(req.headers.cookie || '').sessionId;
      let user = sessions[sessionId];
      let session: Partial<Session> = {};

      if (user) {
        session = { id: sessionId, user };
      }

      return { req, res, session };
    }
  });

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
