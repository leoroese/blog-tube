/* eslint-disable radix */
import { GraphQLResolverMap } from 'apollo-graphql';
import { Book } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import mutation from '@src/graphql/schema/resolvers/mutation/mutation';
import query from '@src/graphql/schema/resolvers/query/query';
import { getBookById, getBooksByAuthor } from '@src/data/bookService';
import { Author } from '@src/graphql/generated/graphql';

interface IBookReference {
  __typename: 'Book';
  bookId: string;
  authorId: string;
}

interface IAuthorReference {
  __typename: 'Author';
  authorId: string;
}

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Book: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveReference: async (book: IBookReference): Promise<Book | null> => {
      return getBookById(parseInt(book.bookId));
    },
    author: async (book: IBookReference): Promise<Author> => {
      return { __typename: 'Author', authorId: book.authorId };
    },
  },
  Author: {
    books: async (author: IAuthorReference): Promise<Book[]> => {
      return getBooksByAuthor(parseInt(author.authorId));
    },
  },
};

export default resolvers;
