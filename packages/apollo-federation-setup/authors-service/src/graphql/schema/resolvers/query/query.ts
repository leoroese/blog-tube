import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';
import getAuthorByIdQuery from '@src/graphql/schema/resolvers/query/getAuthorByIdQuery';

const query = {
  authors: {
    resolve: getAllAuthorsQuery,
  },
  author: {
    resolve: getAuthorByIdQuery,
  },
};

export default query;
