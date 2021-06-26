import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    # get all authors
    authors: [Author]
  }

  extend type Mutation {
    # create author mutation
    createAuthor(input: CreateAuthorInput): Author!
  }

  type Author @key(fields: "authorId") {
    # the author id
    authorId: ID!

    # the authors username
    username: String
  }

  input CreateAuthorInput {
    # the authors username
    username: String!
  }
`;

export default typeDefs;
