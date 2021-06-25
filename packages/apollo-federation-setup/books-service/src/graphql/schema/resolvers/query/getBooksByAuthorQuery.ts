import { GraphQLFieldResolver } from 'graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getBooksByAuthor } from '@src/data/bookService';

const getAllBooksByAuthorQuery: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, args, _context, _info): Promise<Book[]> => {
  const books = await getBooksByAuthor(args.authorId);
  return books;
};

export default getAllBooksByAuthorQuery;
