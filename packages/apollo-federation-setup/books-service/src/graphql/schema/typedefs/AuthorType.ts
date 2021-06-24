import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'The Author',
  fields: {
    authorId: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the author',
    },
    name: {
      type: GraphQLString,
      description: 'name of the author',
    },
  },
});

export default AuthorType;
