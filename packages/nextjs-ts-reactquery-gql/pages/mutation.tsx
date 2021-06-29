// index.tsx
import { FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface IPerson {
  id: string;
  name: string;
  age: number;
}

const Mutation: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <p>{data?.name}</p>
      <p>{data?.age}</p> */}
    </div>
  );
};

export default Mutation;
