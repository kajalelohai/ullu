import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { User } from './entities/User';
import { DataSource } from 'typeorm';
import { QnAExercise } from './entities/QnAExercise';
import { Attachment } from './entities/Exercise';
import { QnAResolver } from './graphql/resolvers/qna-resolver';

export interface Context {
  user?: User;
}

const AppDataSource = new DataSource({
  type: 'sqlite',
  synchronize: true,
  logging: true,
  database: './ullu.db',
  entities: [User, Attachment, QnAExercise]
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
    resolvers: [QnAResolver],
    validate: {
      forbidUnknownValues: false
    }
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
