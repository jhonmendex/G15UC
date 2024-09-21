import bookService from "../services/bookService.js";
const getBooks = async (req, res) => {
  const cookie = req.cookies["token"];
  if (!cookie) return res.status(401).json({ message: "Unauthorized" });
  const data = await bookService.getBooks();
  res.json(data);
};

const getBook = async (req, res) => {
  const data = await bookService.getBook(req.params.id);
  res.json(data);
};

const createBook = async (req, res) => {
  const data = await bookService.createBook(req.body);
  res.json(data);
};

const updateBook = async (req, res) => {
  const data = await bookService.updateBook(req.params.id, req.body);
  res.json(data);
};

const deleteBook = async (req, res) => {
  const data = await bookService.deleteBook(req.params.id);
  res.json(data);
};

export default { getBooks, getBook, createBook, updateBook, deleteBook };
