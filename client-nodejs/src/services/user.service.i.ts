import { User } from "../models/user.model"

export interface UserServiceI {
  create(user: User): Promise<User>
  delete(id: number): Promise<void>
  getById(id: number): Promise<User>
}