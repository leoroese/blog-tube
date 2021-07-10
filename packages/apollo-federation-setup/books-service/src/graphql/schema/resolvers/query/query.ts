import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
import getBooksByAuthorQuery from '@src/graphql/schema/resolvers/query/getBooksByAuthorQuery';

const query = {
  books: {
    resolve: getAllBooksQuery,
  },
  booksByAuthor: {
    resolve: getBooksByAuthorQuery,
  },
};

export default query;
