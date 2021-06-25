import { gql, makeExecutableSchema } from 'apollo-server';
import { GraphQLSchema, printSchema } from 'graphql';
import mutationType from '@src/graphql/schema/typedefs/MutationType';
import queryType from '@src/graphql/schema/typedefs/QueryType';
import resolvers from '@src/graphql/schema/resolvers/resolvers';

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
