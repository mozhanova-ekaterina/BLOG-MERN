import { Box, Button, Flex, Section } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

const isAuth = false;

const Header = () => {
  return (
    <Flex gap={"5"} justify={"between"} align={"center"} height={"70px"}>
      <Link to={'/'}><Button>BLOG</Button></Link>
      <Flex gap={"2"}>
        {isAuth ? (
          <>
            <Link to={'/add-post'}>
              <Button color="orange">Написать статью</Button>
            </Link>
            <Button variant="surface">Выйти</Button>
          </>
        ) : (
          <>
            <Link to={'/login'}><Button variant="surface">Войти</Button></Link>
            <Link to={'/registration'}><Button>Создать аккаунт</Button></Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
