import { createBookMutationResolver } from '@src/graphql/schema/resolvers/mutation/createBookMutation';
import { createAuthorMutationResolver } from './createAuthorMutation';

const mutation = {
  createBook: {
    resolve: createBookMutationResolver,
  },
  createAuthor: {
    resolve: createAuthorMutationResolver,
  },
};

export default mutation;
