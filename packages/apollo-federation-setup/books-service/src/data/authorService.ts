import { Author } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

export const getAllAuthors = async (): Promise<Author[]> => {
  return prismaContext.prisma.author.findMany();
};

export const createAuthor = async (name: string): Promise<Author> => {
  const author = await prismaContext.prisma.author.create({ data: { name } });
  return author;
};
