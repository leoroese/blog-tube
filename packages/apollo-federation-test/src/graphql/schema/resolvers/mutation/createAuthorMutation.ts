import {
  GraphQLFieldConfig,
  GraphQLFieldConfigArgumentMap,
  GraphQLFieldResolver,
} from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createAuthor } from '@src/data/authorService';
import AuthorType from '../../typedefs/AuthorType';
import CreateAuthorInput from '../../typedefs/CreateAuthorInput';

export const createAuthorMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { username } },
  _context,
  _info
): Promise<Author> => {
  return createAuthor(username);
};

const createAuthorMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create author',
  type: AuthorType,
  args: {
    input: {
      type: CreateAuthorInput,
    },
  },
  resolve: createAuthorMutationResolver,
};

export default createAuthorMutation;
