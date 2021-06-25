import { GraphQLResolverMap } from 'apollo-graphql';
import { Author, Book } from '@prisma/client';
import { getAuthorById } from '@src/data/authorService';
import { getBooksByAuthor } from '@src/data/bookService';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import mutation from '@src/graphql/schema/resolvers/mutation/mutation';
import query from '@src/graphql/schema/resolvers/query/query';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Book: {
    author(book: Book): Promise<Author | null> {
      return getAuthorById(book.authorId);
    },
  },
  Author: {
    books(author: Author): Promise<Book[]> {
      return getBooksByAuthor(author.authorId);
    },
  },
  // User: {
  //   // eslint-disable-next-line no-underscore-dangle
  //   __resolveReference(book, _args, context: IApolloServerContext) {
  //     console.log('calling resolveRefearance');
  //     return context.prismaContext.prisma.user.findUnique({
  //       where: {
  //         id: book.userId,
  //       },
  //     });
  //   },
  // },
};

export default resolvers;
