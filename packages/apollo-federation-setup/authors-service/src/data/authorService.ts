import { Author } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

export const getAllAuthors = async (): Promise<Author[]> => {
  const authors = await prismaContext.prisma.author.findMany();
  return authors;
};

export const getAuthorById = async (
  authorId: number
): Promise<Author | null> => {
  const author = await prismaContext.prisma.author.findUnique({
    where: {
      authorId,
    },
  });
  return author;
};

export const createAuthor = async (username: string): Promise<Author> => {
  const author = await prismaContext.prisma.author.create({
    data: { username },
  });
  return author;
};
