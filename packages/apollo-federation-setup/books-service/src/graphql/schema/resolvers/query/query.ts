import { GraphQLObjectType } from 'graphql';
import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
import getAllAuthorsQuery from './getAllAuthorsQuery';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
    authors: getAllAuthorsQuery,
  },
});

export default query;
