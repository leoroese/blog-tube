/* eslint-disable no-param-reassign */
import apolloServerContext from '@src/lib/config/apolloServerContext';
import schema from '@src/graphql/schema/schema';

const apolloServerConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
};

export default apolloServerConfig;
