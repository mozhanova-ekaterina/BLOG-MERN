import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations.js";
import { PostController, UserController } from "./controllers/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";

mongoose
  .connect(
    "mongodb+srv://pandafomka:linkinpark081294@cluster0.p3bfj.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();
const storage = multer.diskStorage({
  //There are two options available, destination and filename
  destination: (_, __, cb) => {
    //(req, file, cb)
    cb(null, "uploads"); //сохраняем файлы в папку uploads
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(express.json()); //учим express читать json, без этого запросы от клиента(request) распознаются как undefined//https://expressjs.com/en/5x/api.html#express.json
app.use("/uploads", express.static("uploads")); //https://expressjs.com/en/5x/api.html#express.static

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.post(
  "/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);
app.patch(
  "/posts/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  //req.file is the `image` file
  try {
    res.json({
      url: `uploads/${req.file.originalname}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось загрузить картинку",
    });
  }
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});

//jwt где хранится токен у клиента (req.headers.authorization), откуда берётся
//
