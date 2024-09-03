import express, { Request, Response } from 'express';
import { loadSync } from '@grpc/proto-loader'; 
import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import path from 'path';

const PROTO_PATH = path.join(__dirname, './../../proto/user.proto');

const packageDefinition = loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
})

const protoService: any = loadPackageDefinition(packageDefinition);

const client = new protoService.user.UserService('localhost:8089', credentials.createInsecure());

client.Create(
  {
    user: {
      name: "Juan",
      number: "321",
    },
  },
  (error: any, response: any) => {
    console.log(error, response)
  },
);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
