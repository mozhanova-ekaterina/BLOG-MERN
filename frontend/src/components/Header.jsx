import { Box, Button, Flex, Section } from "@radix-ui/themes";
import React from "react";

const Header = () => {
  return (
    <Flex gap={'5'} justify={"between"} align={'center'} height={'70px'}>
      <Button>BLOG</Button>
      <Flex gap={'2'}>
        <Button variant="surface">Войти</Button>
        <Button>Создать аккаунт</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
