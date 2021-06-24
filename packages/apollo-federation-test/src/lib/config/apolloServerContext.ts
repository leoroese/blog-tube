import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import prismaContext from '@src/lib/prisma/prismaContext';

const apolloServerContext: IApolloServerContext = {
  prismaContext,
};

export default apolloServerContext;
