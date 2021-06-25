import { GraphQLFieldResolver } from 'graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllBooks } from '@src/data/bookService';

const getAllBooksQuery: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Book[]> => {
  const books = await getAllBooks();
  return books;
};

export default getAllBooksQuery;
