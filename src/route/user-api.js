import { Router } from "express";
import itemController from "../controller/item-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";


const userRouter = new Router();
userRouter.use(authMiddleware)
userRouter.post('/api/items', itemController.additemControler);
userRouter.post('/api/items/:id', itemController.detailitem);
userRouter.post('/api/items/:id/update', itemController.updateitem);
userRouter.post('/api/items/:id/delete', itemController.deleteitem);

export { userRouter };
