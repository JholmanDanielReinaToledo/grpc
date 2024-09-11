import express, { Request, Response } from 'express';
import { UserClient } from './proto/user_grpc_pb';
const Grpc = require('@grpc/grpc-js');
import { CreateUserRequest, UserModel } from './proto/user_pb';

console.log(UserClient);
const clientInsecureCreds = Grpc.credentials.createInsecure();
const userService = new UserClient('localhost:8089', clientInsecureCreds)

const user = new UserModel();
user.setName("Juancito")
user.setNumber("3213213211")

const req = new CreateUserRequest()
req.setUser(user)

userService.create(req, (err, res) => {
  console.log(err)
  console.log(res.hasUser())
  console.log(res.getUser()?.getId())
  console.log(res.getUser()?.getName())
  console.log(res.getUser()?.getNumber())
  console.log(res.getRes()?.getCode())
})

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
