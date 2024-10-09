import {
  Avatar,
  Button,
  Card,
  Container,
  Flex,
  Heading,
} from "@radix-ui/themes";

import React from "react";
import Header from "../components/Header";

const Registration = () => {
  return (
    <Container size={3} px={"6"}>
      <Header />
      <Flex justify={"center"} mt={"9"}>
        <Card>
          <Flex direction={"column"} gap={"4"} py={"6"} px={"5"}>
            <Heading size={"6"} mx={"auto"}>
              Создание аккаунта
            </Heading>
            <Avatar fallback="A" radius="full" size={"8"} mx={"auto"}></Avatar>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Полное имя"
                className="border px-2 py-1 rounded-md min-w-[300px]"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Введите свой email"
                className="border px-2 py-1 rounded-md min-w-[300px]"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Введите пароль"
                className="border px-2 py-1 rounded-md min-w-[300px]"
              />
            </div>
            <Button>Зарегистрироваться</Button>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
};

export default Registration;
