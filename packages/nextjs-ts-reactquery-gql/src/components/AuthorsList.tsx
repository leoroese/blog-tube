// index.tsx
import { FC } from 'react';
import { GetAllAuthorsQuery, useGetAllAuthorsQuery } from '@src/generated/graphql';
import graphqlRequestClient from '@src/lib/clients/graphqlRequestClient';
import BooksByAuthorList from './BooksByAuthorList';

const AuthorsList: FC = () => {
  const { isLoading, error, data } = useGetAllAuthorsQuery<GetAllAuthorsQuery, Error>(graphqlRequestClient, {});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Boom boy{error.message}</p>;

  return (
    <>
      {data?.authors?.map((author) => {
        return (
          <div key={author?.authorId}>
            <h1>{author?.username}</h1>
            <p>AuthorId: {author?.authorId}</p>
            <BooksByAuthorList authorId={author!.authorId} />
          </div>
        );
      })}
    </>
  );
};

export default AuthorsList;
