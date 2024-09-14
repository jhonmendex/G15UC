import editorialService from "../services/editorialService.js";
const getEditorials = async (req, res) => {
  const data = await editorialService.getEditorials();
  res.json(data);
};

const getEditorial = async (req, res) => {
  const data = await editorialService.getEditorial(req.params.id);
  res.json(data);
};

const createEditorial = async (req, res) => {
  const data = await editorialService.createEditorial(req.body);
  res.json(data);
};

const updateEditorial = async (req, res) => {
  const data = await editorialService.updateEditorial(req.params.id, req.body);
  res.json(data);
};

const deleteEditorial = async (req, res) => {
  const data = await editorialService.deleteEditorial(req.params.id);
  res.json(data);
};

export default {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
