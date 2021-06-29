// index.tsx
import React, { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { IPerson } from '@src/lib/interfaces/IPerson';

const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
  if (typeof id === 'string') {
    const res = await fetch(`/api/person/${id}`);
    if (res.ok) {
      // need to do this with fetch since doesn't automatically throw errors axios and graphql-request do
      return res.json();
    }
    throw new Error('Network response not ok');
  }
  throw new Error('invalid id'); // need to throw because react-query functions need to have error thrown to know its in error state
};

const PersonPage: FC = () => {
  const {
    query: { id },
  } = useRouter();

  // inline functions are now the suggested way tof passing parameters to query functions
  const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id], () => getPersonById(id), {
    enabled: !!id, // enabled will stop a query from running, so will only call when id is available
  });

  // Cached key would be ['person', ]
  // const name = 'Tlw';
  // const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id, name], () => getPersonById(id, name), {
  //   enabled: Boolean(id), // enabled will stop a query from running, so will only call when id is available
  // });

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
