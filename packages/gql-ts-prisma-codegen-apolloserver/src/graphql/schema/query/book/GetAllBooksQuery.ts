import { GraphQLList } from 'graphql';
import { PrismaClient } from '@prisma/client';
import GraphQLBook from '@src/graphql/schema/typedefs/book/GraphQLBook';
import { Book } from '.prisma/client';

const getAllBooksQuery = {
  type: GraphQLList(GraphQLBook),
  resolve: async (_source: unknown): Promise<Book[]> => {
    const prisma = new PrismaClient();

    return prisma.book.findMany();
  },
};

export default getAllBooksQuery;
