import { GraphQLFieldResolver } from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllAuthors } from '@src/data/authorService';

const getAllAuthorsQuery: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Author[]> => {
  const authors = await getAllAuthors();
  return authors;
};

export default getAllAuthorsQuery;
