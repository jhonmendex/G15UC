import DataAccess from "../dataAccess/db.js";

const dataAccess = new DataAccess();

(async () => {
  dataAccess.connect();
})();

const collectionName = "editorial";
const getEditorials = async () => {
  const data = await dataAccess.findAll(collectionName);
  return data;
};

const getEditorial = async (id) => {
  const data = await dataAccess.findOne(collectionName, id);
  return data;
};

const createEditorial = async (body) => {
  const data = await dataAccess.createOne(collectionName, body);
  return data;
};

const updateEditorial = async (id, body) => {
  const data = await dataAccess.updateOne(collectionName, id, body);
  return data;
};

const deleteEditorial = async (id) => {
  const data = await dataAccess.deleteOne(collectionName, id);
  return data;
};

export default {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
