import { Router } from "express";
import bookController from "../../controllers/bookController.js";

const router = Router();

router
  .get("/", bookController.getBooks)
  .get("/:id", bookController.getBook)
  .post("/", bookController.createBook)
  .put("/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);

export default router;
