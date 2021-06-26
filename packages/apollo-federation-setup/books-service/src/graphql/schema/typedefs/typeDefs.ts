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
    #  the book id
    bookId: ID!

    # the book title
    title: String

    # the book author
    author: Author
  }

  extend type Author @key(fields: "authorId") {
    # the author id
    authorId: ID! @external

    # the authors list of books
    books: [Book]
  }

  input CreateBookInput {
    # the book title
    title: String

    # the author id
    authorId: Int
  }
`;

export default typeDefs;
