import { gql } from 'apollo-server';

const typeDefs = gql`
  extend type Query {
    # get all books
    books: [Book]

    # get all books by author id
    booksByAuthor(authorId: Int): [Book]
  }

  extend type Mutation {
    # create book
    createBook(input: CreateBookInput!): Book!
  }

  type Book @key(fields: "bookId") {
    bookId: ID!
    title: String
    author: Author
  }

  extend type Author @key(fields: "authorId") {
    authorId: ID! @external
    books: [Book]
  }

  input CreateBookInput {
    title: String
    authorId: Int
  }
`;

export default typeDefs;
