import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";

mongoose
  .connect(
"mongodb+srv://pandafomka:linkinpark081294@cluster0.p3bfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json()); //учим express читать json, без этого
//запросы от клиента(request) распознаются как undefined

// app.get("/", (req, res) => { 
//   res.send("Hello world!");
// });

app.post('/auth/register', registerValidation, (req, res) => {

})
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
