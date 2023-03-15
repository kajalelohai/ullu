import { BaseContext } from '@apollo/server';
import { Response, Request } from 'express';
import { User } from 'src/entities/User';

export interface ResolverContext extends BaseContext {
  req: Request;
  res: Response;
  session?: {
    user: User;
  };
}
