import { Router } from "express";
import userController from "../../controllers/userController.js";

const router = Router();

router
  .get("/:id", userController.getUser)
  .post("/", userController.createUser)
  .post("/login")
  .get("/logout");

export default router;
