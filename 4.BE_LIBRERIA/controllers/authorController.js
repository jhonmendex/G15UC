import authorService from "../services/authorService.js";

const getAuthors = async (req, res) => {
  const data = await authorService.getAuthors();
  res.json(data);
};

const getAuthor = async (req, res) => {
  const data = await authorService.getAuthor(req.params.id);
  res.json(data);
};

const createAuthor = async (req, res) => {
  const data = await authorService.createAuthor(req.body);
  res.json(data);
};

const updateAuthor = async (req, res) => {
  const data = await authorService.updateAuthor(req.params.id, req.body);
  res.json(data);
};

const deleteAuthor = async (req, res) => {
  const data = await authorService.deleteAuthor(req.params.id);
  res.json(data);
};

export default {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
