import { GraphQLResolverMap } from 'apollo-graphql';
import { Author } from '@prisma/client';
import { getAuthorById } from '@src/data/authorService';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import mutation from '@src/graphql/schema/resolvers/mutation/mutation';
import query from '@src/graphql/schema/resolvers/query/query';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Author: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveReference(ref): Promise<Author | null> {
      // eslint-disable-next-line radix
      return getAuthorById(parseInt(ref.authorId));
    },
  },
};

export default resolvers;
