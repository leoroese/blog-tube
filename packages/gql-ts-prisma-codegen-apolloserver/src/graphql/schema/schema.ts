import { GraphQLSchema } from 'graphql';
import query from '@src/graphql/schema/query/query';
import mutation from '@src/graphql/schema/mutation/mutation';

const schema: GraphQLSchema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
