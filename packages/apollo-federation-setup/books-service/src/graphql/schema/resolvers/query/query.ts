import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';

const query = {
  books: {
    resolve: getAllBooksQuery,
  },
};

export default query;
