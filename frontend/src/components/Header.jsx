import { Box, Button, Flex, Section } from "@radix-ui/themes";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../redux/slices/auth";
import axios from "../axios";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const handleLogOut = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    axios
      .get("/auth/me")
      .then((res) => {
        dispatch(login(res.data));
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <Flex gap={"5"} justify={"between"} align={"center"} height={"70px"}>
      <Link to={"/"}>
        <Button>BLOG</Button>
      </Link>
      <Flex gap={"2"}>
        {isAuth.data ? (
          <>
            <Link to={"/add-post"}>
              <Button color="orange">Написать статью</Button>
            </Link>
            <Button onClick={handleLogOut} variant="surface">
              Выйти
            </Button>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button variant="surface">Войти</Button>
            </Link>
            <Link to={"/registration"}>
              <Button>Создать аккаунт</Button>
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
