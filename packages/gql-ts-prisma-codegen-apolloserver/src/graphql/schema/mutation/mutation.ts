import { GraphQLObjectType } from 'graphql';
import createBookMutation from '@src/graphql/schema/mutation/book/CreateBook';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBook: createBookMutation,
  },
});

export default mutation;
