import { GraphQLObjectType } from 'graphql';
import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';
import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
    authors: getAllAuthorsQuery,
  },
});

export default queryType;
