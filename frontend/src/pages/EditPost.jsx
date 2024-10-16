import { useSelector } from "react-redux";
import { Container, Theme } from "@radix-ui/themes";
import CreatePost from "../components/CreatePost/CreatePost";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

const EditPost = () => {
  const theme = useSelector((state) => state.theme.color);
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не удалось получить статью");
      });
  }, []);

  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={{ initial: "1", sm: "6" }}>
        <Header />
        <CreatePost data={data} isNewPost />;
      </Container>
    </Theme>
  );
};

export default EditPost;
