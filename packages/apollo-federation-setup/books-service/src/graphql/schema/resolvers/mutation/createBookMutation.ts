/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createBook } from '@src/data/bookService';
import BookType from '@src/graphql/schema/typedefs/BookType';
import CreateBookInput from '@src/graphql/schema/typedefs/CreateBookInput';

export const createBookMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { title, authorId } },
  _context,
  _info
): Promise<Book> => {
  return createBook(title, authorId);
};

const createBookMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create book',
  type: BookType,
  args: {
    input: {
      type: CreateBookInput,
    },
  },
  resolve: createBookMutationResolver,
};

export default createBookMutation;
