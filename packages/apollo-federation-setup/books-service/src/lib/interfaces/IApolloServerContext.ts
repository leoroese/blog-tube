import { IPrismaContext } from './IPrismaContext';

export interface IApolloServerContext {
  prismaContext: IPrismaContext;
}
