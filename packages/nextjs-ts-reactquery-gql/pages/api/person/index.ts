import { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse<{ id: string; name: string; age: number }>): void => {
  res.status(200).json({ id: '12', name: 'John Doe', age: 25 });
};
