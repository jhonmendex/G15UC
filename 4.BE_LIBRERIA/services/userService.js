import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUser = async (id) => {
  const data = await prisma.user.findUnique({ where: { id } });
  return data;
};

const createUser = async (body) => {
  const user = {
    ...body,
    password: await generateHash(body.password),
  };

  const data = await prisma.user.create({ data: user });
  return data;
};

const login = async (body) => {
  const { email, password } = body;
  const user = await prisma.user.findUnique({ where: { email } });
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
