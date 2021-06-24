import { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import { Book } from '@prisma/client';
import { getAuthorById } from '@src/data/authorService';
import AuthorType from './AuthorType';

const BookType = new GraphQLObjectType({
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
      type: AuthorType,
      description: 'author of book',
      resolve: (book: Book) => {
        return getAuthorById(book.authorId);
      },
    },
    authorId: {
      type: GraphQLInt,
      description: 'Id of the author who wrote book',
    },
  },
});

export default BookType;
