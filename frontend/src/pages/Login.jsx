import {
  Button,
  Callout,
  Card,
  Container,
  Flex,
  Heading,
  Text,
  Theme,
} from "@radix-ui/themes";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const Login = () => {
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
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const res = await dispatch(fetchUserData(data));
    if (!res.payload) {
      return alert("Не удалось авторизоваться!");
    }
  };

  useEffect(() => {
    if (auth.data) {
      navigate("/");
      window.localStorage.setItem("token", auth.data.token);
    }
  }, [auth]);

  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={{ initial: "3", sm: "6" }}>
        <Header />
        <Flex justify={"center"} mt={"9"}>
          <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction={"column"} gap={"4"} py={"6"} px={"5"}>
                <Heading size={"6"}>Вход в аккаунт</Heading>
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
                  Войти
                </Button>
              </Flex>
            </form>
          </Card>
        </Flex>
      </Container>
    </Theme>
  );
};

export default Login;

//https://react-hook-form.com/get-started#Quickstart
