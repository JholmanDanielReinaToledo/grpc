import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { UserServiceI } from "../services/user.service.i";

class UserController {
  private userService: UserServiceI

  constructor(
    userService: UserServiceI 
  ) {
    this.userService = userService;
  }

  create(req: Request, res: Response) {

  }
}

export const userController = new UserController(
  userService,
);
