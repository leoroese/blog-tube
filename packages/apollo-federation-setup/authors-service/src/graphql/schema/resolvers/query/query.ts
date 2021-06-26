import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';

const query = {
  authors: {
    resolve: getAllAuthorsQuery,
  },
};

export default query;
