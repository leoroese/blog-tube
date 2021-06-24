/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLNonNull } from 'graphql';
import { Author } from '@prisma/client';
import CreateAuthorInput from '@src/graphql/schema/typedefs/CreateAuthorInput';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GraphQLAuthor from '@src/graphql/schema/typedefs/GraphQLAuthor';
import { createAuthor } from '@src/data/authorService';

const createAuthorMutation = {
  type: GraphQLAuthor,
  args: {
    input: {
      type: GraphQLNonNull(CreateAuthorInput),
      description: 'Author input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    { input: { name } }: any,
    _context: IApolloServerContext
  ): Promise<Author> => {
    const createdAuthor = await createAuthor(name);
    return createdAuthor;
  },
};

export default createAuthorMutation;
