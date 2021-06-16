import prismaContext from '@src/lib/prisma/prismaContext';
import { Book } from '.prisma/client';

export const getAllBooks = async (): Promise<Book[]> => {
  return prismaContext.prisma.book.findMany();
};

export const createBook = async (title: string, author: string): Promise<Book> => {
  const book = await prismaContext.prisma.book.create({ data: { title, author } });
  return book;
};
