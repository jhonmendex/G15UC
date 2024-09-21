import { Router } from "express";
import userController from "../../controllers/userController.js";

const router = Router();

router
  .get("/:id", userController.getUser)
  .post("/", userController.createUser)
  .post("/login", userController.login)
  .post("/logout", userController.logout);

export default router;
