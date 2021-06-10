/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql';
import GraphQLBook from '@src/graphql/schema/typedefs/book/GraphQLBook';
import CreateBookInput from '@src/graphql/schema/typedefs/book/CreateBookInput';
import { Book } from '.prisma/client';

const createBookMutation = {
  type: GraphQLBook,
  args: {
    input: {
      type: GraphQLNonNull(CreateBookInput),
      description: 'Book input to be created',
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  resolve: async (_source: unknown, { input }: any): Promise<Book> => {
    const prisma = new PrismaClient();
    return prisma.book.create({
      data: {
        title: input.title,
        author: input.author,
      },
    });
  },
};

export default createBookMutation;
