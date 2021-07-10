import { ITodo } from './ITodo';

export interface IInfinitePage {
  nextCursor: number | undefined;
  page: {
    todos: ITodo[];
    hasMore: boolean;
  };
}
