import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { UseQueryResult, useQuery } from 'react-query';
import { fetchPerson } from '@pages/person';
import { IPerson } from '@src/lib/interfaces/IPerson';

interface InitialDataExamplePageProps {
  person: IPerson;
}

const InitialDataExamplePage: FC<InitialDataExamplePageProps> = ({ person }: InitialDataExamplePageProps) => {
  const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
    'person',
    fetchPerson,
    { initialData: person }
  );

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
      <h1>Person</h1>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: { person: IPerson } }> => {
  const person = await fetchPerson();
  return { props: { person } };
};

export default InitialDataExamplePage;
