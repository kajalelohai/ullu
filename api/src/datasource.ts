import { DataSource } from 'typeorm';
import { QnAExercise } from './entities/QnAExercise';
import { Attachment } from './entities/Exercise';
import { User } from './entities/User';

const AppDataSource = new DataSource({
  type: 'sqlite',
  synchronize: true,
  logging: true,
  database: './ullu.db',
  entities: [User, Attachment, QnAExercise]
});

export default AppDataSource;
