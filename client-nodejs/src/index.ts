import express, { Request, Response } from 'express';
import routerUser from './routes/user.router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use(routerUser);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
