import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import schema from '@src/graphql/schema/schema';
import { performTypeScriptCodegen, performAstCodegen } from '@src/codegen';

const startServer = () => {
  performAstCodegen();
  performTypeScriptCodegen();

  const prisma = new PrismaClient();

  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context: () => {
      return {
        prisma,
      };
    },
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
};

startServer();
