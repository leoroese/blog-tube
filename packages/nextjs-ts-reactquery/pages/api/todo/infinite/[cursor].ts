import { NextApiRequest, NextApiResponse } from 'next';
import { ITodo } from '@src/lib/interfaces/ITodo';

export default (
  req: NextApiRequest,
  res: NextApiResponse<{ page: { todos: ITodo[]; hasMore: boolean } } | Error>
): void => {
  const {
    query: { cursor },
  } = req;

  if (typeof cursor === 'string') {
    console.log(`getting infinite page cursor: ${cursor}`);
    const returnTodos: ITodo[] = [];
    // eslint-disable-next-line radix
    const numberCursor = parseInt(cursor);
    // eslint-disable-next-line radix
    const nums = numberCursor * 5;
    for (let i = nums; i < nums + 5; i += 1) {
      const returnTodo: ITodo = {
        id: i,
        message: `Todo number: ${i}`,
      };
      returnTodos.push(returnTodo);
    }

    const testPage: IInfinitePage = {
      nextCursor: numberCursor + 1 < 4 ? numberCursor + 1 : undefined,
      page: {
        todos: returnTodos,
        hasMore: cursor !== '4',
      },
    };

    res.status(200).json(testPage);
  } else {
    res.status(500).json(new Error('id is not of correct type'));
  }
};
