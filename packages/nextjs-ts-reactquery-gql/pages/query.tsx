// index.tsx
import { FC } from 'react';
import Head from 'next/head';
import { useQuery } from 'react-query';
import styles from '../styles/Home.module.css';

interface IPerson {
  id: string;
  name: string;
  age: number;
}

async function getPerson(id: number): Promise<IPerson> {
  const response = await fetch(`/api/person/${id}`);
  if (!response.ok) {
    throw new Error('Problem fetching data');
  }
  const person = await response.json();

  return person;
}

const Query: FC = () => {
  // const { isLoading, error, data } = useQuery<IPerson, Error>('person', async () => {
  //   const res = await fetch('/api/person');
  //   return res.json();
  // });
  const id = 1;
  const { isLoading, error, data } = useQuery<IPerson, Error>(['person', id], () => getPerson(id), {
    enabled: Boolean(id), // enabled will stop a query from running
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Boom boy{error.message}</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </div>
  );
};

export default Query;
