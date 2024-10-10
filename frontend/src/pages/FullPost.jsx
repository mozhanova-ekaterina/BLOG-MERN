import { Container, Flex } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import CommentBlock from "../components/CommentBlock";
import Post from "../components/Post/Post";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "../axios";

const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении статьи");
      });
  }, []);

  if (isLoading)
    return (
      <Container size={3} px={"6"}>
        <Header />
        <Post isLoading={true} />
      </Container>
    );

  return (
    <Container size={3} px={"6"}>
      <Header />
      <Flex direction={"column"} gap={"5"} py={"5"}>
        <Post
          _id={data._id}
          isLoading={false}
          isFullPost={true}
          title={data.title}
          imageUrl={data.imageUrl}
          author={data.fullname}
          createdAt={data.createdAt}
          tags={data.tags}
          viewsCount={data.viewsCount}
          text={data.text}
        />
        <CommentBlock addComment={true} />
      </Flex>
    </Container>
  );
};

export default FullPost;
