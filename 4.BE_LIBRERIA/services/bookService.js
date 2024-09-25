import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getBooks = async () => {
  const data = await prisma.libro.findMany();
  return data;
};

const getBook = async (id) => {
  const data = await prisma.libro.findUnique({ where: { id } });
  return data;
};

const createBook = async (body) => {
  const data = await prisma.libro.create({ data: body });
  return data;
};

const updateBook = async (id, body) => {
  const data = await prisma.libro.update({ where: { id }, data: body });
  return data;
};

const deleteBook = async (id) => {
  const data = await prisma.libro.delete({ where: { id } });
  return data;
};

export default { getBooks, getBook, createBook, updateBook, deleteBook };
