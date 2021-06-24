/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLNonNull } from 'graphql';
import { Book } from '@prisma/client';
import CreateBookInput from '@src/graphql/schema/typedefs/CreateBookInput';
import BookType from '@src/graphql/schema/typedefs/BookType';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createBook } from '@src/data/bookService';

const createBookMutation = {
  type: BookType,
  args: {
    input: {
      type: GraphQLNonNull(CreateBookInput),
      description: 'Book input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    { input: { title, authorId } }: any,
    _context: IApolloServerContext
  ): Promise<Book> => {
    const createdBook = await createBook(title, authorId);
    return createdBook;
  },
};

export default createBookMutation;
