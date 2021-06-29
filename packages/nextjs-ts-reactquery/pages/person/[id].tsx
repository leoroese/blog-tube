// index.tsx
import React, { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { IPerson } from '@src/lib/interfaces/IPerson';

const getPersonById = async (id: string | string[] | undefined): Promise<IPerson> => {
  if (typeof id === 'string') {
    const res = await fetch(`/api/person/${id}`);
    return res.json();
  }
  throw new Error('invalid id');
};

const PersonPage: FC = () => {
  const {
    query: { id },
  } = useRouter();

  // example of dependent query
  const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id], () => getPersonById(id), {
    enabled: !!id, // enabled will stop a query from running, so will only call when id is available (dependent query)
  });

  /* 
    parallel queries can be run async side by side
      const usersQuery = useQuery('users', fetchUsers)
      const teamsQuery = useQuery('teams', fetchTeams)

    Cached key would be ['person', ]
    useQuery(['todos', { status, page }], ...) => will be cached as useQuery(['todos', status, page], ...)
    ['todos', { page, status, other: undefined}] -> will be cached as ['todos', { undefined, page, status}]
    const name = 'Tl';
    const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id, name], () => getPersonById(id, name), {
        enabled: !!id,
    }); 
  */

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
