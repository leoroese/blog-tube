import { GraphQLObjectType } from 'graphql';
import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
  },
});

export default query;
