import { ITodo } from './ITodo';

export interface IPaginatedTodos {
  todos: ITodo[];
  hasMore: boolean;
}
