import { GraphQLList } from 'graphql';
import GqlBook from '@src/graphql/schema/typedefs/GqlBook';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllBooks } from '@src/data/bookService';
import { Book } from '.prisma/client';

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Book[]> => {
    return getAllBooks();
  },
};

export default getAllBooksQuery;
