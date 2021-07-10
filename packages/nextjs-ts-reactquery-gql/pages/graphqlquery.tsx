// index.tsx
import { FC } from 'react';
import { GetAllBooksQuery, useGetAllBooksQuery } from '@src/generated/graphql';
import graphqlRequestClient from '@src/lib/clients/graphqlRequestClient';

const GqlRequestQuery: FC = () => {
  const { isLoading, error, data } = useGetAllBooksQuery<GetAllBooksQuery, Error>(graphqlRequestClient, {});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Boom boy{error.message}</p>;

  return (
    <>
      {data?.books?.map((book) => {
        return (
          <div key={book?.bookId}>
            <h1>{book?.title}</h1>
            <p>AuthorId: {book?.author?.authorId}</p>
            <p>Username: {book?.author?.username}</p>
            <p>BookId: {book?.bookId}</p>
          </div>
        );
      })}
    </>
  );
};

export default GqlRequestQuery;
