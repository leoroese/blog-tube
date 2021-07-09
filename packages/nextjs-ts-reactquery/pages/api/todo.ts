import { NextApiRequest, NextApiResponse } from 'next';
import { ITodo } from '@src/lib/interfaces/ITodo';

export default (_req: NextApiRequest, res: NextApiResponse<ITodo>): void => {
  res.status(200).json({ message: 'I am a todo' });
};
