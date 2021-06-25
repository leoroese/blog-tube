import { GraphQLFieldResolver } from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createAuthor } from '@src/data/authorService';

const createAuthorMutation: GraphQLFieldResolver<
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

export default createAuthorMutation;
