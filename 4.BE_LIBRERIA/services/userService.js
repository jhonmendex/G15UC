import DataAccess from "../dataAccess/db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET_KEY;

const dataAccess = new DataAccess();

(async () => {
  dataAccess.connect();
})();

const collectionName = "usuario";

const getUser = async (id) => {
  const data = await dataAccess.findOne(collectionName, id);
  return data;
};

const createUser = async (body) => {
  const user = {
    ...body,
    password: await generateHash(body.password),
  };
  const data = await dataAccess.createOne(collectionName, user);
  return data;
};

//function que permita genera un hash
async function generateHash(password) {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(password, saltRounds);
  return hashPassword;
}

export default { getUser, createUser };
