import { PrismaClient } from '@prisma/client';

export interface IPrismaContext {
  prisma: PrismaClient;
}
