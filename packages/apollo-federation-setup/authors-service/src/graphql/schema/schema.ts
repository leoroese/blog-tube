import { buildFederatedSchema } from '@apollo/federation';
import resolvers from '@src/graphql/schema/resolvers/resolvers';
import typeDefs from '@src/graphql/schema/typedefs/typeDefs';

const schema = buildFederatedSchema({
  typeDefs,
  resolvers,
});

export default schema;
