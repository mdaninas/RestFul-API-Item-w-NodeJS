import { Router } from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new Router();

// Route untuk registrasi user
publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);

export { publicRouter };
