import express from 'express';
import dotenv from 'dotenv-safe';
import fetch from 'node-fetch';

dotenv.config();

const app: express.Express = express();
const port = 3000;

console.log('name is', process.env.NAME);

app.get('/boop', async (_req: express.Request, res: express.Response) => {
  try {
    const response = await fetch('http://server2:3000/sup');
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log('error ', err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
