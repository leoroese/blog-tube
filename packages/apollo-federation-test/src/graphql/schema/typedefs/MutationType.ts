import { GraphQLObjectType } from 'graphql';
import createAuthorMutation from '@src/graphql/schema/resolvers/mutation/createAuthorMutation';
import createBookMutation from '@src/graphql/schema/resolvers/mutation/createBookMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBook: createBookMutation,
    createAuthor: createAuthorMutation,
  },
});

export default mutationType;
