import { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLScalarType } from 'graphql';
import * as GraphQLAuthor from '@src/graphql/schema/typedefs/GraphQLAuthor';

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
    // author: {
    //   type: new Graphql(),
    //   description: 'author of book',
    //   resolve: book => {
    //     Book;
    //   },
    // },
    authorId: {
      type: GraphQLInt,
      description: 'Id of the author who wrote book',
    },
  },
});

export default GraphQLBook;
