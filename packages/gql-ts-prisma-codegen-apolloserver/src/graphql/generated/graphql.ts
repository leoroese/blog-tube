export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
};

/** A book */
export type Book = {
  __typename?: 'Book';
  /** id of the book */
  id: Scalars['ID'];
  /** title of book */
  title?: Maybe<Scalars['String']>;
  /** author of book */
  author?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<Book>;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

/** Create book input */
export type CreateBookInput = {
  /** An arbitrary integer. */
  title: Scalars['String'];
  /** An arbitrary integer. */
  author: Scalars['String'];
};
