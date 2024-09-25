import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEditorials = async () => {
  const data = await prisma.editorial.findMany();
  return data;
};

const getEditorial = async (id) => {
  const data = await prisma.editorial.findUnique({ where: { id } });
  return data;
};

const createEditorial = async (body) => {
  const data = await prisma.editorial.create({ data: body });
  return data;
};

const updateEditorial = async (id, body) => {
  const data = await prisma.editorial.update({ where: { id }, data: body });
  return data;
};

const deleteEditorial = async (id) => {
  const data = await prisma.editorial.delete({ where: { id } });
  return data;
};

export default {
  getEditorials,
  getEditorial,
  createEditorial,
  updateEditorial,
  deleteEditorial,
};
