import { GraphQLFieldResolver } from 'graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllBooks, getBooksByAuthor } from '@src/data/bookService';

const getBooksByAuthorQuery: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, { authorId }, _context, _info): Promise<Book[]> => {
  const books = await getBooksByAuthor(authorId);
  return books;
};

export default getBooksByAuthorQuery;
