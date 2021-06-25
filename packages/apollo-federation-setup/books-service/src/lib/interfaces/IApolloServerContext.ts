import { IPrismaContext } from '@src/lib/interfaces/IPrismaContext';

export interface IApolloServerContext {
  prismaContext: IPrismaContext;
}
