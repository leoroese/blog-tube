import { GraphQLList } from 'graphql';
import { Author } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { getAllAuthors } from '@src/data/authorService';
import AuthorType from '../../typedefs/AuthorType';

const getAllAuthorsQuery = {
  type: GraphQLList(AuthorType),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Author[]> => {
    return getAllAuthors();
  },
};

export default getAllAuthorsQuery;
