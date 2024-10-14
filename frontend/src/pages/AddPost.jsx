import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import React from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AddPost = () => {
  const theme = useSelector((state) => state.theme.color);
  const isAuth = useSelector((state) => state.auth.data);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={"6"}>
        <Header />
        <Card>
          <Flex direction={"column"} gap={"4"}>
            <div>
              <Button variant="outline">Загрузить превью</Button>
            </div>
            <TextField.Root
              placeholder="Заголовок статьи..."
              variant="soft"
              size={"3"}
            ></TextField.Root>
            <TextField.Root
              placeholder="Тэги"
              variant="surface"
              size={"1"}
            ></TextField.Root>

            <Toolbar.Root aria-label="Formatting options">
              <Flex>
                <Toolbar.ToggleGroup
                  type="multiple"
                  aria-label="Text formatting"
                >
                  <Toolbar.ToggleItem value="bold" aria-label="Bold">
                    <FontBoldIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem value="italic" aria-label="Italic">
                    <FontItalicIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    value="strikethrough"
                    aria-label="Strike through"
                  >
                    <StrikethroughIcon />
                  </Toolbar.ToggleItem>
                </Toolbar.ToggleGroup>
                <Toolbar.ToggleGroup
                  type="single"
                  defaultValue="center"
                  aria-label="Text alignment"
                >
                  <Toolbar.ToggleItem value="left" aria-label="Left aligned">
                    <TextAlignLeftIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    value="center"
                    aria-label="Center aligned"
                  >
                    <TextAlignCenterIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    className="ToolbarToggleItem"
                    value="right"
                    aria-label="Right aligned"
                  >
                    <TextAlignRightIcon />
                  </Toolbar.ToggleItem>
                </Toolbar.ToggleGroup>
              </Flex>
            </Toolbar.Root>

            <TextArea
              placeholder="Введите текст..."
              size={"3"}
              className=" h-[500px]"
            ></TextArea>
            <Flex gap={"2"} align={"center"}>
              <Button>Опубликовать</Button>
              <Button variant="outline">Отмена</Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Theme>
  );
};

export default AddPost;
