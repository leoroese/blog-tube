/* eslint-disable no-underscore-dangle */
import { ApolloServer, gql } from 'apollo-server';
import apolloServerConfig from '@src/lib/config/apolloServerConfig';
import { CreateBookInput } from '@src/graphql/generated/graphql';
import prismaContext from '@src/lib/prisma/prismaContext';

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($input: CreateBookInput!) {
    createBook(input: $input) {
      __typename
      id
      title
      author
    }
  }
`;

describe('tests', () => {
  let server: ApolloServer;
  const typename = 'Book';

  beforeAll(() => {
    server = new ApolloServer(apolloServerConfig);
  });

  afterAll(async () => {
    prismaContext.prisma.book.deleteMany();
    await prismaContext.prisma.$disconnect();
  });

  it('should pass', async () => {
    const mockBook: CreateBookInput = {
      title: 'dumb title',
      author: 'smart author',
    };

    const result = await server.executeOperation({
      query: CREATE_BOOK_MUTATION,
      variables: { input: mockBook },
    });

    expect(result.data).toBeDefined();
    expect(result?.data?.createBook).toBeDefined();
    const createdBook = result?.data?.createBook;
    expect(createdBook.__typename).toBe(typename);
    expect(createdBook.id).toBeDefined();
    expect(createdBook.title).toBe(mockBook.title);
    expect(createdBook.author).toBe(mockBook.author);
  });
});
