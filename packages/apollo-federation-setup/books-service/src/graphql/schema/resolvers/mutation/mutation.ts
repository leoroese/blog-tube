import { GraphQLObjectType } from 'graphql';
import createBookMutation from '@src/graphql/schema/resolvers/mutation/createBookMutation';
import createAuthorMutation from './createAuthorMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBook: createBookMutation,
    createAuthor: createAuthorMutation,
  },
});

export default mutation;
