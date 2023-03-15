import { AuthChecker } from 'type-graphql';
import type { ResolverContext } from './types';

/**
 * Handles @Authorized decorator in type-graphql
 */
const authChecker: AuthChecker<ResolverContext> = (args: {
  context: ResolverContext;
}) => {
  const { req, session } = args.context;
  console.log('SESSION', session, (args.context.req as any).test);
  const user = session ? session.user : null;

  return Boolean(user);
};

export default authChecker;
