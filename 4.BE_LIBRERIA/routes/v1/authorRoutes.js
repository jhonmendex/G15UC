import { Router } from "express";
import authorController from "../../controllers/authorController.js";

const router = Router();

router
  .get("/", authorController.getAuthors)
  .get("/:id", authorController.getAuthor)
  .post("/", authorController.createAuthor)
  .put("/:id", authorController.updateAuthor)
  .delete("/:id", authorController.deleteAuthor);

export default router;
