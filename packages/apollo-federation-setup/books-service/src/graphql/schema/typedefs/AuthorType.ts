import { Author } from '@prisma/client';
import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import { getAllBooksByAuthor } from '@src/data/bookService';
// can ignore this because of lazy loading
// eslint-disable-next-line import/no-cycle
import BookType from './BookType';

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'The Author',
  fields: () => ({
    // thunk for lazy loading other types
    authorId: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the author',
    },
    name: {
      type: GraphQLString,
      description: 'name of the author',
    },
    books: {
      type: GraphQLList(BookType),
      description: 'list of authors books',
      resolve: (author: Author) => {
        return getAllBooksByAuthor(author.authorId);
      },
    },
  }),
});

export default AuthorType;
