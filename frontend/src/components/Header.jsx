import { Box, Button, Flex, Section, Switch } from "@radix-ui/themes";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../redux/slices/auth";
import axios from "../axios";
import { MoonIcon, Pencil2Icon, SunIcon } from "@radix-ui/react-icons";
import { switchTheme } from "../redux/slices/theme";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.color);
  const handleLogOut = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };
  const switchThemeHandler = () => {
    dispatch(switchTheme());
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
    <Flex gap={"2"} justify={"between"} align={"center"} height={"70px"}>
      <Link to={"/"}>
        <Button>BLOG</Button>
      </Link>
      <Flex gap={{ initial: "2", xs: "3" }}>
        {isAuth.data ? (
          <>
            <Link to={"/add-post"}>
              <Button color="orange">
                <Box display={{initial: 'none', xs: 'block'}}>Написать статью</Box>
                <Pencil2Icon/>
              </Button>
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
        <Flex align={"center"} gap={"2"}>
          {theme === "dark" && <MoonIcon />}
          {theme === "light" && <SunIcon />}
          <Switch className="cursor-pointer" onClick={switchThemeHandler} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
