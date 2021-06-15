import { ApolloServerExpressConfig } from 'apollo-server-express';
import schema from '@src/graphql/schema/schema';
import apolloServerContext from '@src/lib/config/apolloServerContext';

const ApolloServerConfig: ApolloServerExpressConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
};

export default ApolloServerConfig;
