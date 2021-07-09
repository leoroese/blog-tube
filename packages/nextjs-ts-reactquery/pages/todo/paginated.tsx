/* eslint-disable import/no-cycle */
// index.tsx
import React, { FC, useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { IPaginatedTodos } from '@src/lib/interfaces/IPaginatedTodos';
import { ITodo } from '@src/lib/interfaces/ITodo';

const PaginatedTodoPage: FC = () => {
  const [page, setPage] = useState(0);

  const fetchTodos = (pageNumber = 0) => fetch(`/api/todo/${pageNumber}`).then((res) => res.json());

  const queryClient = useQueryClient();

  // is fetching dictates if currently fetching in the background
  // isPreviousData tells whether current data is previous or curren  t
  const { isLoading, data, isFetching, isPreviousData } = useQuery<IPaginatedTodos, Error>(
    ['todos', page], // key is ['todos', pageNumber]
    () => fetchTodos(page), // function is call fetchTodos with state page
    { keepPreviousData: true } // keepPreviousData adds cool stuff
  );

  // Prefetch the next 2 pages on every page load!
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['todos', page + 1], () => fetchTodos(page + 1));
      queryClient.prefetchQuery(['todos', page + 2], () => fetchTodos(page + 2));
    }
  }, [data, page, queryClient]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.todos.map((todo) => (
        <p key={todo.id}>{todo.message}</p>
      ))}
      <span>Current Page: {page + 1}</span>
      <br />
      <button type="button" onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          if (!isPreviousData && data?.hasMore) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </>
  );
};

export default PaginatedTodoPage;
