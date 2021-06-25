/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createBook } from '@src/data/bookService';

const createBookMutation: GraphQLFieldResolver<
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

export default createBookMutation;
