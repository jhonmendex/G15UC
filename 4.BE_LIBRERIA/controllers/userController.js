import userService from "../services/userService.js";

const getUser = async (req, res) => {
  const data = await userService.getUser(req.params.id);
  res.json(data);
};

const createUser = async (req, res) => {
  const data = await userService.createUser(req.body);
  res.json(data);
};

export default { getUser, createUser };
