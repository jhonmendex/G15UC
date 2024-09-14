import DataAccess from "../dataAccess/db.js";

const dataAccess = new DataAccess();

(async () => {
  dataAccess.connect();
})();

const collectionName = "libro";
const getBooks = async () => {
  const data = await dataAccess.findAll(collectionName);
  return data;
};

const getBook = async (id) => {
  const data = await dataAccess.findOne(collectionName, id);
  return data;
};

const createBook = async (body) => {
  const data = await dataAccess.createOne(collectionName, body);
  return data;
};

const updateBook = async (id, body) => {
  const data = await dataAccess.updateOne(collectionName, id, body);
  return data;
};

const deleteBook = async (id) => {
  const data = await dataAccess.deleteOne(collectionName, id);
  return data;
};

export default { getBooks, getBook, createBook, updateBook, deleteBook };
