import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { UseQueryResult, useQuery, QueryClient } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { fetchPerson } from '@pages/person';
import { IPerson } from '@src/lib/interfaces/IPerson';

const HydrationExamplePage: FC = () => {
  const { isLoading, isError, error, data }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
    'person',
    fetchPerson
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

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('person', fetchPerson);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default HydrationExamplePage;
