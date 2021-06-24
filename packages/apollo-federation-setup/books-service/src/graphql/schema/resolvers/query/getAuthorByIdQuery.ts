import { GraphQLInt, GraphQLNonNull } from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAuthorById } from '@src/data/authorService';
import AuthorType from '@src/graphql/schema/typedefs/AuthorType';

const getAuthorByIdQuery = {
  type: AuthorType,
  args: {
    authorId: {
      type: GraphQLNonNull(GraphQLInt),
      description: 'AuthorId',
    },
  },
  resolve: async (
    _source: unknown,
    { authorId }: any,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Author | null> => {
    return getAuthorById(authorId);
  },
};

export default getAuthorByIdQuery;
