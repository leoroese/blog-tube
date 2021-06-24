import { GraphQLList } from 'graphql';
import { Book } from '@prisma/client';
import BookType from '@src/graphql/schema/typedefs/BookType';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllBooks } from '@src/data/bookService';

const getAllBooksQuery = {
  type: GraphQLList(BookType),
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
