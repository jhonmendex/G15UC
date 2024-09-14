import DataAccess from "../dataAccess/db.js";

const dataAccess = new DataAccess();

(async () => {
  dataAccess.connect();
})();

const collectionName = "autor";
const getAuthors = async () => {
  const data = await dataAccess.findAll(collectionName);
  return data;
};

const getAuthor = async (id) => {
  const data = await dataAccess.findOne(collectionName, id);
  return data;
};

const createAuthor = async (body) => {
  const data = await dataAccess.createOne(collectionName, body);
  return data;
};

const updateAuthor = async (id, body) => {
  const data = await dataAccess.updateOne(collectionName, id, body);
  return data;
};

const deleteAuthor = async (id) => {
  const data = await dataAccess.deleteOne(collectionName, id);
  return data;
};

export default {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
