/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLNonNull } from 'graphql';
import CreateBookInput from '@src/graphql/schema/typedefs/CreateBookInput';
import GqlBook from '@src/graphql/schema/typedefs/GqlBook';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { createBook } from '@src/data/bookService';
import { Book } from '.prisma/client';

const createBookMutation = {
  type: GqlBook,
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
    return createBook(title, author);
  },
};

export default createBookMutation;
