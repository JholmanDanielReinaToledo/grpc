import { Router } from "express";
import { userController } from "../controllers/user.controller";

const routerUser = Router()

routerUser.post(
  '/',
  (req, res) => userController.create(req, res),
);

export default routerUser;
