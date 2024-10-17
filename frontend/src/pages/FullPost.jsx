import { Container, Flex, Theme } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import CommentBlock from "../components/CommentBlock";
import Post from "../components/Post/Post";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { useSelector } from "react-redux";
import CommentsList from "../components/CommentsList";

const FullPost = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const theme = useSelector((state) => state.theme.color);
  const authUser = useSelector((state) => state.auth.data);

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

  const updatePost = async (comments) => {
    try {
      const body = {
        ...data,
        comments: comments,
      };      
      const { res } = await axios.patch(`/posts/${id}`, body);
    } catch (error) {
      console.warn(error);
      alert("Не удалось обновить статью");
    }
  };

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
                isEditable={authUser?._id === data.author._id}
              />
              <CommentsList
                authUser={authUser}
                editable
                postId={data._id}
                data={data.comments}
                updatePost={updatePost}
              />
            </Flex>
          </>
        )}
      </Container>
    </Theme>
  );
};

export default FullPost;
