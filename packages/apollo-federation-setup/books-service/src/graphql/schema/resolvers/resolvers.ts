import { GraphQLResolverMap } from 'apollo-graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import mutation from '@src/graphql/schema/resolvers/mutation/mutation';
import query from '@src/graphql/schema/resolvers/query/query';
import { getBookById, getBooksByAuthor } from '@src/data/bookService';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Book: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveReference(book: { bookId: number }): Promise<Book | null> {
      return getBookById(book.bookId);
    },
    author: book => {
      return { __typename: 'Author', authorId: book.authorId };
    },
  },
  Author: {
    books(author): Promise<Book[]> {
      // eslint-disable-next-line radix
      return getBooksByAuthor(parseInt(author.authorId));
    },
  },
};

export default resolvers;
