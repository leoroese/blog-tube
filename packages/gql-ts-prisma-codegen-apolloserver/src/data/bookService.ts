import { Book } from '@prisma/client';
import prismaContext from '@src/lib/prisma/prismaContext';

export const getAllBooks = async (): Promise<Book[]> => {
  const books = await prismaContext.prisma.book.findMany();
  return books;
};

export const getBookById = async (bookId: number): Promise<Book | null> => {
  return prismaContext.prisma.book.findFirst({
    where: {
      bookId,
    },
  });
};

export const getBooksByAuthor = async (authorId: number): Promise<Book[]> => {
  return prismaContext.prisma.book.findMany({
    where: {
      authorId,
    },
  });
};

export const createBook = async (
  title: string,
  authorId: number
): Promise<Book> => {
  const book = await prismaContext.prisma.book.create({
    data: { title, authorId },
  });
  return book;
};
