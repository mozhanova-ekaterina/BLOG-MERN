import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import User from "./models/User.js";

mongoose
  .connect(
    "mongodb+srv://pandafomka:linkinpark081294@cluster0.p3bfj.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json()); //учим express читать json, без этого
//запросы от клиента(request) распознаются как undefined

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req); //содержит найденные ошибки,
    //если они есть
    if (errors.isEmpty()) {
      const password = req.body.password;
      // const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, 10);
      const doc = new User({
        email: req.body.email,
        fullname: req.body.fullname,
        passwordHash: hash,
        avatarUrl: req.body.avatarUrl,
      });
      const user = await doc.save();
      const token = jwt.sign(
        {
          _id: user._id,
        },
        "secret123",
        {
          expiresIn: "30d", //срок действия токена
        }
      );

      const {passwordHash, ...userData} = user._doc
      res.json({ ...userData, token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось зарегистрироваться",
    });
  }
});

// app.post("/auth/login", (req, res) => {
//   console.log(req.body); //получим undefined без express.json()

//   const token = jwt.sign(
//     //создали токен
//     {
//       email: req.body.email,
//       fullname: "Катя Можкина",
//     },
//     "secret123" //любая строка
//   );
//   res.json({ ...req.body, token });
// });

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
