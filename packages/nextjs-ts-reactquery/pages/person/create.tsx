/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { FC, FormEventHandler, useState } from 'react';
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { IPerson } from '@src/lib/interfaces/IPerson';
import { fetchPerson } from './index';

/* React 17 and newer can try something like this
 const CreateTodo = () => {
   const mutation = useMutation(event => {
     event.preventDefault()
     return fetch('/api', new FormData(event.target))
   })
 
   return <form onSubmit={mutation.mutate}>...</form>
 }

  mutate can also have 2nd hand side effects if wanted 

  mutate(todo, {
   onSuccess: (data, variables, context) => {
     // I will fire second!
   },
   onError: (error, variables, context) => {
     // I will fire second!
   },
   onSettled: (data, error, variables, context) => {
     // I will fire second!
   },
 })
*/

const createPerson = async (id: string, name: string, age: number): Promise<IPerson> => {
  const res: Response = await fetch('/api/person/create', {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      age,
    }),
  });
  if (res.ok) {
    return res.json();
  }
  throw new Error('Error create person');
};

interface ICreatePersonParams {
  id: string;
  name: string;
  age: number;
}

interface IContext {
  id: string;
}

const CreatePage: FC = () => {
  const { data: queryData }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>('person', fetchPerson);

  const queryClient = useQueryClient();

  const mutation: UseMutationResult<IPerson, Error, ICreatePersonParams> = useMutation<
    IPerson,
    Error,
    ICreatePersonParams,
    IContext | undefined
  >('createPerson', async ({ id, name, age }) => createPerson(id, name, age), {
    // before mutation
    onMutate: (variables: ICreatePersonParams) => {
      console.log('mutation variables', variables);
      return { id: '7' };
    },
    // on success of mutation
    onSuccess: (data: IPerson, _variables: ICreatePersonParams, _context: IContext | undefined) => {
      queryClient.setQueryData('person', data);
      return console.log('mutation data', data);
    },
    // if mutation errors
    onError: (error: Error, _variables: ICreatePersonParams, context: IContext | undefined) => {
      console.log('error: ', error.message);
      return console.log(`rolling back optimistic update with id: ${context?.id}`);
    },
    // no matter if error or success run me
    onSettled: (
      _data: IPerson | undefined,
      _error: Error | null,
      _variables: ICreatePersonParams | undefined,
      _context: IContext | undefined
    ) => {
      return console.log('complete mutation!');
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      age: { value: number };
    };
    const id = '1';
    const name = target.name.value;
    const age = target.age.value;
    mutation.mutate({ id, name, age });
  };

  return (
    <>
      {mutation.isLoading ? (
        <p>Adding todo</p>
      ) : (
        <>
          {mutation.isError ? <div>An error occurred: {mutation?.error?.message}</div> : null}

          {mutation.isSuccess ? (
            <div>
              Todo added! Person name is {mutation?.data?.name} and he is {mutation?.data?.age}
            </div>
          ) : null}
        </>
      )}

      <button
        type="button"
        onClick={() => {
          queryClient.invalidateQueries('person');
        }}
      >
        Invalidate Cache
      </button>

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" name="age" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      {queryData && (
        <>
          <h1>Person is</h1>
          <p>Name: {queryData?.name}</p>
          <p>Age: {queryData?.age}</p>
        </>
      )}
    </>
  );
};

export default CreatePage;
