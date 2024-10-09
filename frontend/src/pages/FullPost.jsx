import { ChatBubbleIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import React from "react";
import CommentBlock from "../components/CommentBlock";

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
    <Flex direction={"column"} gap={"5"} py={"5"}>
      <Card>
        <Flex direction={"column"} gap={"4"}>
          <img src={post.src} alt="image" />
          <Flex gap={"2"} align={"center"}>
            <Avatar radius="full" fallback="A" />
            <Box>
              <Text size={"1"} weight={"bold"} as="p">
                {post.author}
              </Text>
              <Text size={"1"} as="p" className=" text-[#1915014A]">
                {post.date}
              </Text>
            </Box>
          </Flex>
          <Heading size={"8"}>{post.title}</Heading>
          <Flex gap={"3"} wrap={"wrap"}>
            {post.tags.map((tag, i) => (
              <Button key={i} variant="ghost">
                #{tag}
              </Button>
            ))}
          </Flex>
          <Text>{post.text}</Text>
          <Flex gap={"4"} className=" text-[#1915014A]">
            <Flex gap={"2"}>
              <EyeOpenIcon />
              <Text size={"1"}>{post.viewsCount}</Text>
            </Flex>
            <Flex gap={"2"}>
              <ChatBubbleIcon />
              <Text size={"1"}>{post.commentsCount}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
      <CommentBlock addComment={true} />
    </Flex>
  );
};

export default FullPost;
