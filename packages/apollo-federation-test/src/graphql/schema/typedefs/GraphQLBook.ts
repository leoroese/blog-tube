import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const GraphQLBook = new GraphQLObjectType({
  name: 'Book',
  description: 'A book',
  fields: {
    bookId: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the book',
    },
    title: {
      type: GraphQLString,
      description: 'title of book',
    },
    author: {
      type: GraphQLString,
      description: 'author of book',
    },
  },
});

export default GraphQLBook;
