import { GraphQLNonNull } from 'graphql';
import { Author } from '@prisma/client';
import CreateAuthorInput from '@src/graphql/schema/typedefs/CreateAuthorInput';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import AuthorType from '@src/graphql/schema/typedefs/AuthorType';
import { createAuthor } from '@src/data/authorService';

const createAuthorMutation = {
  type: AuthorType,
  args: {
    input: {
      type: GraphQLNonNull(CreateAuthorInput),
      description: 'Author input to be created',
    },
  },
  resolve: async (_source: unknown, { input: { name } }: any, _context: IApolloServerContext): Promise<Author> => {
    const createdAuthor = await createAuthor(name);
    return createdAuthor;
  },
};

export default createAuthorMutation;
