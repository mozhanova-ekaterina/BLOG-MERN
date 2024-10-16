import {
  Badge,
  Button,
  Card,
  Container,
  Flex,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import React, { useRef, useState } from "react";
import * as Toolbar from "@radix-ui/react-toolbar";
import {
  Cross2Icon,
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import axios from "../../axios";

const AddPost = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.color);
  const isAuth = useSelector((state) => state.auth.data);
  const inputFileRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    title: "",
    text: "",
    tags: [],
    imageUrl: "",
  });

  const handleFileChange = async (e) => {
    try {
      const formData = new FormData(); //https://learn.javascript.ru/formdata
      const file = e.target.files[0];
      formData.append("image", file); //formData.append(name, value) – добавляет к объекту поле с именем name и значением value,
      const { data } = await axios.post("/upload", formData);
      setFields({ ...fields, imageUrl: data.url });
    } catch (error) {
      console.warn(error);
      alert("Ошибка при отправке файла");
    }
  };
  const handleFileRemove = () => {
    setFields({ ...fields, imageUrl: "" });
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/posts", fields);
      const id = data._id;
      navigate(`/posts/${id}`);
    } catch (error) {
      console.warn(error);
      alert("Не удалось создать статью");
    }
  };

  if (!isAuth && !window.localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={{ initial: "1", sm: "6" }}>
        <Header />
        <Card>
          <Flex direction={"column"} gap={"4"}>
            <Flex gap={"2"} wrap={"wrap"}>
              <Button
                onClick={() => inputFileRef.current.click()}
                variant="outline"
              >
                Загрузить превью
              </Button>
              <input
                ref={inputFileRef}
                onChange={handleFileChange}
                type="file"
                className="hidden"
              ></input>
              {fields.imageUrl && (
                <>
                  <Button variant="soft" onClick={handleFileRemove}>
                    Удалить
                  </Button>
                  <Flex maxHeight={'700px'} mt={'4'}>
                    <img
                      src={`http://localhost:4444/${fields.imageUrl}`}
                      alt="Uploaded"
                      className=" rounded-lg mx-auto"
                    />
                  </Flex>
                </>
              )}
            </Flex>
            <TextField.Root
              placeholder="Заголовок статьи..."
              variant="soft"
              size={"3"}
              onChange={(e) => setFields({ ...fields, title: e.target.value })}
              value={fields.title}
            ></TextField.Root>
            <TextField.Root
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setFields({
                    ...fields,
                    tags: [...fields.tags, e.target.value],
                  });
                  e.target.value = "";
                }
              }}
              placeholder="Тэги"
              variant="surface"
              size={"1"}
            ></TextField.Root>
            <Flex gap={"2"} wrap={"wrap"}>
              {fields.tags.map((tag, i) => (
                <Badge color="indigo" key={i}>
                  {tag}
                  <Cross2Icon
                    width={"10px"}
                    className=" cursor-pointer hover:scale-150 transition"
                    onClick={() =>
                      setFields({
                        ...fields,
                        tags: fields.tags.filter((_, j) => j != i),
                      })
                    }
                  />
                </Badge>
              ))}
            </Flex>

            <Toolbar.Root
              aria-label="Formatting options"
              className={styles.root}
            >
              <Flex>
                <Toolbar.ToggleGroup
                  type="multiple"
                  aria-label="Text formatting"
                >
                  <Toolbar.ToggleItem
                    value="bold"
                    aria-label="Bold"
                    className={styles.item}
                  >
                    <FontBoldIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    value="italic"
                    aria-label="Italic"
                    className={styles.item}
                  >
                    <FontItalicIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    className={styles.item}
                    value="strikethrough"
                    aria-label="Strike through"
                  >
                    <StrikethroughIcon />
                  </Toolbar.ToggleItem>
                </Toolbar.ToggleGroup>

                <Toolbar.Separator className={styles.separator} />

                <Toolbar.ToggleGroup
                  type="single"
                  defaultValue="center"
                  aria-label="Text alignment"
                >
                  <Toolbar.ToggleItem
                    value="left"
                    aria-label="Left aligned"
                    className={styles.item}
                  >
                    <TextAlignLeftIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    className={styles.item}
                    value="center"
                    aria-label="Center aligned"
                  >
                    <TextAlignCenterIcon />
                  </Toolbar.ToggleItem>
                  <Toolbar.ToggleItem
                    className={styles.item}
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
              value={fields.text}
              onChange={(e) => setFields({ ...fields, text: e.target.value })}
            ></TextArea>
            <Flex gap={"2"} align={"center"}>
              <Button onClick={onSubmit}>Опубликовать</Button>
              <Button variant="outline">Отмена</Button>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Theme>
  );
};

export default AddPost;
