import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
  body("fullname", "Укажите имя").isLength({ min: 3 }),
  body("avatarUrl", "Неверная ссылка на аватарку").optional().isURL(),
];

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Введите заголовок статьи").isLength({ min: 1 }).isString(),
  body("text", "Введите текст статьи").isLength({ min: 1 }).isString(),
  body("tags", "Неверный формат тэгов(укажите массив)").optional().isArray(),
  body("imageUrl", "Неверная ссылка на изображение").optional().isString(),
];
