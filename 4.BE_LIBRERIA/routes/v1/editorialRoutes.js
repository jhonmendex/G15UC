import { Router } from "express";
import editorialController from "../../controllers/editorialController.js";

const router = Router();

router
  .get("/", editorialController.getEditorials)
  .get("/:id", editorialController.getEditorial)
  .post("/", editorialController.createEditorial)
  .put("/:id", editorialController.updateEditorial)
  .delete("/:id", editorialController.deleteEditorial);

export default router;
