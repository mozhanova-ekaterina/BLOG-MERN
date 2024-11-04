import {
  Avatar,
  Button,
  Callout,
  Card,
  Container,
  Flex,
  Heading,
  Text,
  Theme,
} from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.color);
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
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
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
                    className={`border p-3 rounded-md min-w-[300px]`}
                  />
                  {errors.fullname && (
                    <Callout.Root mt={"2"} size={"1"}>
                      <Callout.Icon>
                        <InfoCircledIcon />
                      </Callout.Icon>
                      <Callout.Text>{errors.fullname?.message}</Callout.Text>
                    </Callout.Root>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", { required: "Укажите почту" })}
                    id="email"
                    type="email"
                    placeholder="Введите свой email"
                    className="border p-3 rounded-md min-w-[300px]"
                  />
                  {errors.email && (
                    <Callout.Root mt={"2"} size={"1"}>
                      <Callout.Icon>
                        <InfoCircledIcon />
                      </Callout.Icon>
                      <Callout.Text>{errors.email?.message}</Callout.Text>
                    </Callout.Root>
                  )}
                </div>
                <div>
                  <input
                    {...register("password", { required: "Укажите пароль" })}
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    className="border p-3 rounded-md min-w-[300px]"
                  />
                  {errors.password && (
                    <Callout.Root mt={"2"} size={"1"}>
                      <Callout.Icon>
                        <InfoCircledIcon />
                      </Callout.Icon>
                      <Callout.Text>{errors.password?.message}</Callout.Text>
                    </Callout.Root>
                  )}
                </div>
                <Button
                  type="submit"
                  size={"4"}
                  disabled={isValid ? false : true}
                  variant={!isValid ? "ghost" : "solid"}
                >
                  Зарегистрироваться
                </Button>
              </Flex>
            </form>
          </Card>
        </Flex>
      </Container>
    </Theme>
  );
};

export default Registration;

//https://react-hook-form.com/get-started#Quickstart

//TODO:
//загрузить аватар
