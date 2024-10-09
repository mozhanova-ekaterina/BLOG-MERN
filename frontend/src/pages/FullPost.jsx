import { Container, Flex } from "@radix-ui/themes";
import React from "react";
import CommentBlock from "../components/CommentBlock";
import Post from "../components/Post/Post";
import Header from "../components/Header";

const post = {
  title: "Тестовая статья",
  src: "https://beautifoto.ru/wp-content/uploads/2019/07/14-4-1024x640.jpg",
  author: "Виталий Романов",
  date: "02 мая 2024г.",
  tags: ["react", "vue"],
  viewsCount: 10,
  commentsCount: 2,
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, non.",
};

const FullPost = () => {
  return (
    <Container size={3} px={"6"}>
      <Header />
      <Flex direction={"column"} gap={"5"} py={"5"}>
        <Post
          isLoading={false}
          isFullPost={true}
          title={post.title}
          imageUrl={post.src}
          author={post.author}
          createdAt={post.date}
          tags={post.tags}
          viewsCount={post.viewsCount}
          text={post.text}
        />
        <CommentBlock addComment={true} />
      </Flex>
    </Container>
  );
};

export default FullPost;
