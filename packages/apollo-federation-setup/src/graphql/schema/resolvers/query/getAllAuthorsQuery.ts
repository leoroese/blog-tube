import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllAuthors } from '@src/data/authorService';
import AuthorType from '@src/graphql/schema/typedefs/AuthorType';

export const getAllAuthorsResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Author[]> => {
  const authors = await getAllAuthors();
  return authors;
};

const getAllAuthorsQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all authors query',
  type: GraphQLList(AuthorType),
  resolve: getAllAuthorsResolver,
};

export default getAllAuthorsQuery;
