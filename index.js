import express from "express";
import mongoose from "mongoose";
import checkAuth from "./utils/checkAuth.js";
import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://pandafomka:linkinpark081294@cluster0.p3bfj.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json()); //учим express читать json, без этого запросы от клиента(request) распознаются как undefined

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);
app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
// app.post('/posts', PostController.remove)
app.post("/posts", checkAuth, postCreateValidation, PostController.create);
// app.post('/posts', PostController.patch)

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
