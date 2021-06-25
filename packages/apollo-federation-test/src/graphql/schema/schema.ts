import { GraphQLResolverMap } from 'apollo-graphql';
import { gql, makeExecutableSchema } from 'apollo-server';
import { GraphQLSchema, printSchema } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import mutation from './resolvers/mutation/mutation';
import query from './resolvers/query/query';
import { getBookById } from '@src/data/bookService';
import { getAuthorById } from '@src/data/authorService';
import queryType from '@src/graphql/schema/typedefs/QueryType';
import mutationType from './typedefs/MutationType';
import resolvers from './resolvers/resolvers';

const schema = makeExecutableSchema({
  typeDefs: gql(
    printSchema(
      new GraphQLSchema({
        query: queryType,
        mutation: mutationType,
      })
    )
  ),
  resolvers,
});

export default schema;
