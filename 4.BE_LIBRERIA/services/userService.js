import DataAccess from "../dataAccess/db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

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

const login = async (body) => {
  const { email, password } = body;
  const user = await dataAccess.findByField(collectionName, "email", email);
  if (user) {
    const validate = await compareHash(password, user.password);
    if (!validate) {
      return { message: "contraseña incorrecta", data: "fail" };
    } else {
      user.password = "";
      return { message: "login exitoso", data: user };
    }
  } else {
    return { message: "usuario no existe", data: "fail" };
  }
};

const logout = async () => {
  return {
    message: "logout exitoso",
  };
};

//function que permita genera un hash
async function generateHash(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function compareHash(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

export default { getUser, createUser, login, logout };
