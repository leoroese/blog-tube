import schema from '@src/graphql/schema/schema';
import apolloServerContext from '@src/lib/config/apolloServerContext';

const apolloServerConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
};

export default apolloServerConfig;
