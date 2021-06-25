import { GraphQLFieldResolver } from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAuthorById } from '@src/data/authorService';

const getAuthorByIdQuery: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, args, _context, _info): Promise<Author | null> => {
  const author = await getAuthorById(args.authorId);
  return author;
};

export default getAuthorByIdQuery;
