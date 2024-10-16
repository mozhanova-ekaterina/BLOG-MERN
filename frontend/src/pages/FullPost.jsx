import { Container, Flex, Theme } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import CommentBlock from "../components/CommentBlock";
import Post from "../components/Post/Post";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { useSelector } from "react-redux";

const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const theme = useSelector((state) => state.theme.color);
  const authUserId = useSelector((state) => state.auth.data?._id);

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

  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={"6"}>
        {isLoading ? (
          <>
            <Header />
            <Post isLoading={true} />
          </>
        ) : (
          <>
            <Header />
            <Flex direction={"column"} gap={"5"} py={"5"}>
              <Post
                _id={data._id}
                isLoading={false}
                isFullPost={true}
                title={data.title}
                imageUrl={data.imageUrl}
                author={data.author.fullname}
                createdAt={data.createdAt}
                tags={data.tags}
                viewsCount={data.viewsCount}
                text={data.text}
                theme={theme}
                isEditable={authUserId === data.author._id}
              />
              <CommentBlock addComment={true} />
            </Flex>
          </>
        )}
      </Container>
    </Theme>
  );
};

export default FullPost;
