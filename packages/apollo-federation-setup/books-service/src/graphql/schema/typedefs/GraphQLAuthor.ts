import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
// import GraphQLBook from './GraphQLBook';

const GraphQLAuthor = new GraphQLObjectType({
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
    // Books: {
    //   type: GraphQLList(GraphQLBook),
    //   description: 'list of books',
    // },
  },
});

export default GraphQLAuthor;
