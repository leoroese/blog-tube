import { GraphQLObjectType } from 'graphql';
import createBookMutation from '@src/graphql/schema/resolvers/mutation/createBookMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBook: createBookMutation,
  },
});

export default mutation;
