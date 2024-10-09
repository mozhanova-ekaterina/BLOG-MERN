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

const PostPreview = ({
  title,
  src,
  author,
  date,
  tags,
  viewsCount,
  commentsCount,
}) => {
  return (
    <Card>
      <Flex direction={"column"} gap={"4"}>
        <img src={src} alt="image" />
        <Flex gap={"2"} align={"center"}>
          <Avatar radius="full" fallback="A" />
          <Box>
            <Text size={"1"} weight={"bold"} as="p">
              {author}
            </Text>
            <Text size={"1"} as="p" className=" text-[#1915014A]">
              {date}
            </Text>
          </Box>
        </Flex>
        <Heading size={"8"}>{title}</Heading>
        <Flex gap={"3"} wrap={"wrap"}>
          {tags.map((tag) => (
            <Button variant="ghost">#{tag}</Button>
          ))}
        </Flex>
        <Flex gap={"4"} className=" text-[#1915014A]">
          <Flex gap={"2"}>
            <EyeOpenIcon />
            <Text size={"1"}>{viewsCount}</Text>
          </Flex>
          <Flex gap={"2"}>
            <ChatBubbleIcon />
            <Text size={"1"}>{commentsCount}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default PostPreview;
