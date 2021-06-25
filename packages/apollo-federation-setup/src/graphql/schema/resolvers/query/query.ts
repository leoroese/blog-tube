import { getAllBooksQueryResolver } from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
import { getAllAuthorsResolver } from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';

const query = {
  books: {
    resolve: getAllBooksQueryResolver,
  },
  authors: {
    resolve: getAllAuthorsResolver,
  },
};

export default query;
