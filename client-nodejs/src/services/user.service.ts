import { User } from "../models/user.model";
import { UserClient } from "../proto/user_grpc_pb";
import { CreateUserRequest, UserModel } from "../proto/user_pb";
import { UserServiceI } from "./user.service.i";
const Grpc = require('@grpc/grpc-js');

class UserService implements UserServiceI {
  userServ: UserClient;

  constructor() {
    this.userServ = new UserClient('localhost:8089', Grpc.credentials.createInsecure())
  }

  private createUser({
    name, number,
  }: {
    name: string, number: string,
  }): UserModel {
    const user = new UserModel();

    user.setName(name)
    user.setNumber(number)

    return user;
  }

  async create(user: { name: string, number: string }): Promise<User> {
    const req = new CreateUserRequest();
    req.setUser(this.createUser(user));
  
    return new Promise((resolve, reject) => {
      this.userServ.create(req, (err, res) => {
        if (err != null) {
          return reject(err);
        }
  
        const userSerialized = res.getUser();
        const newUser: User = {
          id: userSerialized?.getId(),
          name: userSerialized?.getName() || '',
          number: userSerialized?.getNumber() || '',
        };
  
        resolve(newUser);
      });
    });
  }

  async delete(id: number): Promise<void> {
    
  }

  async getById(id: number): Promise<User> {
    const newUser: User = {
      name: '',
      number: '',
    };

    return newUser
  }
}

export const userService = new UserService();
