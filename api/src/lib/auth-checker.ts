import { AuthChecker } from 'type-graphql';
import type { ResolverContext } from './types';

/**
 * Handles @Authorized decorator in type-graphql
 */
const authChecker: AuthChecker<ResolverContext> = (args: {
  context: ResolverContext;
}) => {
  const { session } = args.context;
  const user = session ? session.user : null;

  return Boolean(user);
};

export default authChecker;
