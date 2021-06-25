import createAuthorMutation from '@src/graphql/schema/resolvers/mutation/createAuthorMutation';

const mutation = {
  createAuthor: {
    resolve: createAuthorMutation,
  },
};

export default mutation;
