import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  authorId: Scalars['ID'];
  books?: Maybe<Array<Maybe<Book>>>;
  username?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  bookId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type CreateAuthorInput = {
  username: Scalars['String'];
};

export type CreateBookInput = {
  authorId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
};


export type MutationCreateAuthorArgs = {
  input?: Maybe<CreateAuthorInput>;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

export type Query = {
  __typename?: 'Query';
  authors?: Maybe<Array<Maybe<Author>>>;
  books?: Maybe<Array<Maybe<Book>>>;
  booksByAuthor?: Maybe<Array<Maybe<Book>>>;
};


export type QueryBooksByAuthorArgs = {
  authorId?: Maybe<Scalars['Int']>;
};

export type Test = {
  __typename?: 'Test';
  testId: Scalars['ID'];
};

export type CreateAuthorMutationVariables = Exact<{
  input?: Maybe<CreateAuthorInput>;
}>;


export type CreateAuthorMutation = (
  { __typename?: 'Mutation' }
  & { createAuthor: (
    { __typename?: 'Author' }
    & Pick<Author, 'authorId' | 'username'>
  ) }
);

export type GetAllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAuthorsQuery = (
  { __typename?: 'Query' }
  & { authors?: Maybe<Array<Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'authorId' | 'username'>
  )>>> }
);

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'bookId' | 'title'>
    & { author?: Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'authorId' | 'username'>
    )> }
  )>>> }
);

export type GetBooksByAuthorQueryVariables = Exact<{
  authorId?: Maybe<Scalars['Int']>;
}>;


export type GetBooksByAuthorQuery = (
  { __typename?: 'Query' }
  & { booksByAuthor?: Maybe<Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'bookId' | 'title'>
  )>>> }
);


export const CreateAuthorDocument = `
    mutation CreateAuthor($input: CreateAuthorInput) {
  createAuthor(input: $input) {
    authorId
    username
  }
}
    `;
export const useCreateAuthorMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateAuthorMutation, TError, CreateAuthorMutationVariables, TContext>
    ) => 
    useMutation<CreateAuthorMutation, TError, CreateAuthorMutationVariables, TContext>(
      (variables?: CreateAuthorMutationVariables) => fetcher<CreateAuthorMutation, CreateAuthorMutationVariables>(client, CreateAuthorDocument, variables)(),
      options
    );
export const GetAllAuthorsDocument = `
    query GetAllAuthors {
  authors {
    authorId
    username
  }
}
    `;
export const useGetAllAuthorsQuery = <
      TData = GetAllAuthorsQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: GetAllAuthorsQueryVariables, 
      options?: UseQueryOptions<GetAllAuthorsQuery, TError, TData>
    ) => 
    useQuery<GetAllAuthorsQuery, TError, TData>(
      ['GetAllAuthors', variables],
      fetcher<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(client, GetAllAuthorsDocument, variables),
      options
    );
export const GetAllBooksDocument = `
    query GetAllBooks {
  books {
    bookId
    title
    author {
      authorId
      username
    }
  }
}
    `;
export const useGetAllBooksQuery = <
      TData = GetAllBooksQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: GetAllBooksQueryVariables, 
      options?: UseQueryOptions<GetAllBooksQuery, TError, TData>
    ) => 
    useQuery<GetAllBooksQuery, TError, TData>(
      ['GetAllBooks', variables],
      fetcher<GetAllBooksQuery, GetAllBooksQueryVariables>(client, GetAllBooksDocument, variables),
      options
    );
export const GetBooksByAuthorDocument = `
    query GetBooksByAuthor($authorId: Int) {
  booksByAuthor(authorId: $authorId) {
    bookId
    title
  }
}
    `;
export const useGetBooksByAuthorQuery = <
      TData = GetBooksByAuthorQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: GetBooksByAuthorQueryVariables, 
      options?: UseQueryOptions<GetBooksByAuthorQuery, TError, TData>
    ) => 
    useQuery<GetBooksByAuthorQuery, TError, TData>(
      ['GetBooksByAuthor', variables],
      fetcher<GetBooksByAuthorQuery, GetBooksByAuthorQueryVariables>(client, GetBooksByAuthorDocument, variables),
      options
    );