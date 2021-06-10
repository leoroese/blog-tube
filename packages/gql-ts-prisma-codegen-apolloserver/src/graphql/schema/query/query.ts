import { GraphQLObjectType } from 'graphql';
import getAllBooksQuery from '@src/graphql/schema/query/book/GetAllBooksQuery';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
  },
});

export default query;
