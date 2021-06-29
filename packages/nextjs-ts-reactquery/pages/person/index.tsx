// index.tsx
import { FC } from 'react';
import Link from 'next/link';
import { useQuery, UseQueryResult } from 'react-query';
import { IPerson } from '@src/lib/interfaces/IPerson';

const fetchPerson = async (): Promise<IPerson> => {
  const res = await fetch(`/api/person`);
  // need to do this with fetch since doesn't automatically throw errors axios and graphql-request do
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network response not ok'); // need to throw because react-query functions need to have error thrown to know its in error state
};

const PersonPage: FC = () => {
  const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
    'person',
    fetchPerson
    // {
    //   staleTime: 5 * 1000, // 5 seconds
    // }
  );

  //   const { status, error, data }: UseQueryResult<string, Error> = useQuery<IPerson, Error, string>(
  //     'person',
  //     async () => {
  //       const res = await fetch('/api/person');
  //       return res.json();
  //     },
  //     {
  //       select: (person) => person.name,
  //     }
  //   );

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) return <p>Boom boy: Error is -- {error?.message}</p>;

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </>
  );
};

export default PersonPage;
