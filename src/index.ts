import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Johan');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
