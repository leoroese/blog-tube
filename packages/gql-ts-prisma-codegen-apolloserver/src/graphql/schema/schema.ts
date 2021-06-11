import { GraphQLSchema } from 'graphql';
import query from '@src/graphql/schema/resolvers/query/query';
import mutation from '@src/graphql/schema/resolvers/mutation/mutation';

const schema: GraphQLSchema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
