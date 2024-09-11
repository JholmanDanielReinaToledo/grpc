import express, { Request, Response } from 'express';
import { CreateUserRequest, UserModel } from './proto/user_pb';
import { userService } from './services/user.service';

userService.create({
  name: "Pedrooooo",
  number: "321321321321"
}).then((user) => {
  console.log(user)
}).catch((err) => {
  console.log(err)
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
