import express from 'express';
import dotenv from 'dotenv-safe';

dotenv.config();

const app: express.Express = express();
const port = 3000;

console.log('name is', process.env.NAME);

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
