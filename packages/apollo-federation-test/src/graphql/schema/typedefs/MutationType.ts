import { GraphQLObjectType } from 'graphql';
import createAuthorMutation from '../resolvers/mutation/createAuthorMutation';
import createBookMutation from '../resolvers/mutation/createBookMutation';
import getAllAuthorsQuery from '../resolvers/query/getAllAuthorsQuery';
import getAllBooksQuery from '../resolvers/query/getAllBooksQuery';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBook: createBookMutation,
    createAuthor: createAuthorMutation,
  },
});

export default mutationType;
