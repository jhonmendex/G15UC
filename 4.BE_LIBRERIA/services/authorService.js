import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAuthors = async () => {
  const data = await prisma.autor.findMany();
  return data;
};

const getAuthor = async (id) => {
  const data = await prisma.autor.findUnique({ where: { id } });
  return data;
};

const createAuthor = async (body) => {
  const data = await prisma.autor.create({ data: body });
  return data;
};

const updateAuthor = async (id, body) => {
  const data = await prisma.autor.update({ where: { id }, data: body });
  return data;
};

const deleteAuthor = async (id) => {
  const data = await prisma.autor.delete({ where: { id } });
  return data;
};

export default {
  getAuthors,
  getAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
