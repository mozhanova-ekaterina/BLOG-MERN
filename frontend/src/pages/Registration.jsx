import {
  Avatar,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (auth.data) {
      navigate("/");
      window.localStorage.setItem("token", auth.data.token);
    }
  }, [auth]);

  return (
    <Container size={3} px={"6"}>
      <Header />
      <Flex justify={"center"} mt={"9"}>
        <Card>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction={"column"} gap={"4"} py={"6"} px={"5"}>
              <Heading size={"6"} mx={"auto"}>
                Создание аккаунта
              </Heading>
              <Avatar
                fallback="A"
                radius="full"
                size={"8"}
                mx={"auto"}
              ></Avatar>
              <div>
                <input
                  {...register("fullname", { required: "Укажите имя" })}
                  id="name"
                  type="text"
                  placeholder="Полное имя"
                  className="border p-3 rounded-md min-w-[300px]"
                />
                <Text className=" mt-2 ml-2" as="p" color="red" size={"2"}>
                  {errors.fullname?.message}
                </Text>
              </div>
              <div>
                <input
                  {...register("email", { required: "Укажите почту" })}
                  id="email"
                  type="email"
                  placeholder="Введите свой email"
                  className="border p-3 rounded-md min-w-[300px]"
                />
                <Text className=" mt-2 ml-2" as="p" color="red" size={"2"}>
                  {errors.email?.message}
                </Text>
              </div>
              <div>
                <input
                  {...register("password", { required: "Укажите пароль" })}
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  className="border p-3 rounded-md min-w-[300px]"
                />
                <Text className=" mt-2 ml-2" as="p" color="red" size={"2"}>
                  {errors.password?.message}
                </Text>
              </div>
              <Button type="submit" size={"4"} disabled={isValid ? false : true} variant={!isValid ? 'ghost' : 'solid'}>
                Зарегистрироваться
              </Button>
            </Flex>
          </form>
        </Card>
      </Flex>
    </Container>
  );
};

export default Registration;

//https://react-hook-form.com/get-started#Quickstart

//TODO:
//загрузить аватар
