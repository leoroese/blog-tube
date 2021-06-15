import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import { performAstCodegen } from '@src/codegen';
import apolloServerConfig from '@src/lib/config/apolloServerConfig'
dotenv.config();

const startServer = () => {
  performAstCodegen();


  const server = new ApolloServer(apolloServerConfig);

  // The `listen` method launches a web server.
  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
};

startServer();
