// index.tsx
import { FC } from 'react';
import { GetAllBooksQuery, useGetAllBooksQuery } from '@src/generated/graphql';
import graphqlRequestClient from '@src/lib/graphqlRequestClient';
import styles from '../styles/Home.module.css';

const GqlRequestQuery: FC = () => {
  const { isLoading, error, data } = useGetAllBooksQuery<GetAllBooksQuery, Error>(graphqlRequestClient, {});

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Boom boy{error.message}</p>;

  if (data && data.books) {
    return (
      <div className={styles.container}>
        <p>{data?.books[0]?.author?.authorId}</p>
        <p>{data?.books[0]?.author?.username}</p>
        <p>{data?.books[0]?.bookId}</p>
        <p>{data?.books[0]?.title}</p>
      </div>
    );
  }

  return <p>Wtf...</p>;
};

export default GqlRequestQuery;
