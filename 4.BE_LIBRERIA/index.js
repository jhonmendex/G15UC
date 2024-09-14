import express from "express";
import dotenv from "dotenv";
import bookRouter from "./routes/v1/bookRoutes.js";
import authorRouter from "./routes/v1/authorRoutes.js";
import editorialRouter from "./routes/v1/editorialRoutes.js";
import userRouter from "./routes/v1/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

//midleware
app.use(express.json());
//midleware cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "Content-Type",
    credentials: true,
  })
);
//midleware routes
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/author", authorRouter);
app.use("/api/v1/editorial", editorialRouter);
app.use("/api/v1/user", userRouter);
//midleware not found
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("servidor andando en ", PORT);
});
