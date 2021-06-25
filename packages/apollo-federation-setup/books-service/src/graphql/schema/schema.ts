import { gql } from 'apollo-server';
import { GraphQLSchema, printSchema } from 'graphql';
import { buildFederatedSchema } from '@apollo/federation';
import mutationType from '@src/graphql/schema/typedefs/MutationType';
import queryType from '@src/graphql/schema/typedefs/QueryType';
import resolvers from '@src/graphql/schema/resolvers/resolvers';

const schema = buildFederatedSchema({
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
