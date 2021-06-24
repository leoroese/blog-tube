import { GraphQLObjectType } from 'graphql';
import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';
import getAuthorByIdQuery from '@src/graphql/schema/resolvers/query/getAuthorByIdQuery';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
    authors: getAllAuthorsQuery,
    author: getAuthorByIdQuery,
  },
});

export default query;
