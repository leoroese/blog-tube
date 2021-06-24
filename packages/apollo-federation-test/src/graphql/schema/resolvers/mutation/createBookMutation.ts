/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLNonNull } from 'graphql';
import { Book } from '@prisma/client';
import CreateBookInput from '@src/graphql/schema/typedefs/CreateBookInput';
import GraphQLBook from '@src/graphql/schema/typedefs/GraphQLBook';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createBook } from '@src/data/bookService';

const createBookMutation = {
  type: GraphQLBook,
  args: {
    input: {
      type: GraphQLNonNull(CreateBookInput),
      description: 'Book input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    { input: { title, author } }: any,
    _context: IApolloServerContext
  ): Promise<Book> => {
    const createdBook = await createBook(title, author);
    return createdBook;
  },
};

export default createBookMutation;
