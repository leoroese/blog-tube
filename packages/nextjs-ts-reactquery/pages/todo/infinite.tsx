/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
// index.tsx
import React, { FC } from 'react';
import { useInfiniteQuery } from 'react-query';
import { IInfinitePage } from '@src/lib/interfaces/IInfinitePage';

const fetchTodos = ({ pageParam = 0 }) => fetch(`/api/todo/infinite/${pageParam}`).then((res) => res.json());

const PaginatedTodoPage: FC = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<IInfinitePage, Error>(
    'infinite',
    fetchTodos,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <>
      {data?.pages.map((infinitePage, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            {infinitePage.page.todos.map((todo) => (
              <p key={todo.id}>{todo.message}</p>
            ))}
          </React.Fragment>
        );
      })}

      <button type="button" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
      </button>
    </>
  );
};

export default PaginatedTodoPage;
