import { GraphQLObjectType } from 'graphql';
import getAllAuthorsQuery from '../resolvers/query/getAllAuthorsQuery';
import getAllBooksQuery from '../resolvers/query/getAllBooksQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
    authors: getAllAuthorsQuery,
  },
});

export default queryType;
