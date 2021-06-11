import { PrismaClient } from '@prisma/client';

export interface IApolloServerContext {
  prisma: PrismaClient;
}
