import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

const getUser = async (req, res) => {
  const cookie = req.cookies["token"];
  if (!cookie) return res.status(401).json({ message: "Unauthorized" });

  try {
    auth = jwt.verify(cookie.token, process.env.SECRET_KEY);
    if (!auth) return res.status(401).json({ message: "Unauthorized" });
    const data = await userService.getUser(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const data = await userService.createUser(req.body);
  res.json(data);
};

const login = async (req, res) => {
  const data = await userService.login(req.body);
  if (data.data === "fail") {
    res.status(401).json({ message: data.message });
  } else {
    const token = jwt.sign(
      {
        _id: data.data._id,
        username: data.data.username,
        email: data.data.email,
      },
      process.env.SECRET_KEY
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 24 * 60 * 24,
      })
      .json({ message: "success", token: token });
  }
};

const logout = async (req, res) => {
  const data = await userService.logout();
  res.json(data);
};

export default { getUser, createUser, login, logout };
