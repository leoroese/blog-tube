import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
import getAllBooksByAuthorQuery from './getBooksByAuthorQuery';

const query = {
  books: {
    resolve: getAllBooksQuery,
  },
  booksByAuthor: {
    resolve: getAllBooksByAuthorQuery,
  },
};

export default query;
