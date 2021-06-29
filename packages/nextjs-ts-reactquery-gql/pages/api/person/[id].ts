import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse<{ id: string; name: string; age: number }>): void => {
  const {
    query: { id },
  } = req;
  const stringId = id as string;
  res.status(200).json({ id: stringId, name: 'John Doe', age: 25 });
};
