/* eslint-disable import/no-cycle */
// index.tsx
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Query, QueryKey, useQueries, useQuery, useQueryClient, UseQueryResult } from 'react-query';
import person from '@pages/api/person';
import PersonComponent from '@src/components/PersonComponent';
import { IPerson } from '@src/lib/interfaces/IPerson';
import { ITodo } from '@src/lib/interfaces/ITodo';

export const fetchPerson = async (): Promise<IPerson> => {
  const res = await fetch(`/api/person`);
  // need to do this with fetch since doesn't automatically throw errors axios and graphql-request do
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network response not ok'); // need to throw because react-query functions need to have error thrown to know its in error state
};

const fetchTodo = async (): Promise<ITodo> => {
  const res = await fetch(`/api/todo`);
  // need to do this with fetch since doesn't automatically throw errors axios and graphql-request do
  if (res.ok) {
    return res.json();
  }
  throw new Error('Network response not ok'); // need to throw because react-query functions need to have error thrown to know its in error state
};

const PersonPage: FC = () => {
  const [enabled, setEnabled] = useState(true);
  const { isLoading, isError, isSuccess: personSuccess, error, data }: UseQueryResult<IPerson, Error> = useQuery<
    IPerson,
    Error
  >('person', fetchPerson, {
    enabled,
  });

  const { isSuccess: todoSuccess, data: todoData }: UseQueryResult<ITodo, Error> = useQuery<ITodo, Error>(
    'todo',
    fetchTodo,
    {
      enabled,
    }
  );

  // dynamic parallel queries wooooo
  const userQueries = useQueries(
    ['1', '2', '3'].map((id) => {
      return {
        queryKey: ['todo', { page: id }],
        queryFn: () => {
          return id;
        },
        enabled,
      };
    })
  );

  const queryClient = useQueryClient();

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

  // if (personSuccess && todoSuccess) {
  //   queryClient.invalidateQueries();
  // }

  if (personSuccess && todoSuccess && enabled) {
    setEnabled(false);
  }

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
      <br />
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          queryClient.invalidateQueries();
        }}
      >
        Invalidate Queries
      </button>
      <br />
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          queryClient.invalidateQueries('person');
        }}
      >
        Invalidate Person
      </button>
      <br />
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          queryClient.invalidateQueries({
            predicate: (query) => {
              // eslint-disable-next-line radix
              return parseInt(query.queryKey[1].page) % 2 === 1;
            },
          });
        }}
      >
        Invalidate Todo
      </button>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
      <h1>Person component</h1>
    </>
  );
};

export default PersonPage;
