import createBookMutation from '@src/graphql/schema/resolvers/mutation/createBookMutation';

const mutation = {
  createBook: {
    resolve: createBookMutation,
  },
};

export default mutation;
