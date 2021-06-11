import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import schema from '@src/graphql/schema/schema';
import { performAstCodegen } from '@src/codegen';
import prisma from '@src/prisma/client';
import { IApolloServerContext } from './interfaces/IApolloServerContext';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV !== 'production',
    context,
  });

  // The `listen` method launches a web server.
  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
};

startServer();
