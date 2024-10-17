import {
  ChatBubbleIcon,
  Cross1Icon,
  EyeOpenIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
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
import PostSkeleton from "./Skeleton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removePost } from "../../redux/slices/posts";
import Markdown from "react-markdown";

const Post = ({
  _id,
  title,
  imageUrl,
  author,
  createdAt,
  tags,
  viewsCount,
  commentsCount,
  isFullPost,
  isLoading,
  text,
  theme,
  isEditable,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const removePostHandler = (id) => {
    if (window.confirm("Вы действительно хотите удалить статью?")) {
      dispatch(removePost(id));
      if (location.pathname != "/") {
        navigate(`/`);
      }
    }
  };

  if (isLoading) {
    return <PostSkeleton />;
  }

  return (
    <Card>
      <Flex direction={"column"} gap={"4"}>
        {imageUrl && (
          <Flex>
            <img
              src={`http://localhost:4444/${imageUrl}`}
              alt="image"
              className="mx-auto rounded-xl"
            />
          </Flex>
        )}
        <Flex justify={"between"}>
          <Flex gap={"2"} align={"center"}>
            <Avatar radius="full" fallback="A" />
            <Box>
              <Text size={"1"} weight={"bold"} as="p">
                {author.fullname}
              </Text>
              <Text size={"1"} as="p" className=" text-[#1915014A]">
                {new Date(createdAt).toLocaleDateString()}
              </Text>
            </Box>
          </Flex>
          {isEditable && (
            <Flex gap={"2"}>
              <Cross1Icon
                onClick={() => removePostHandler(_id)}
                width={"25px"}
                height={"25px"}
                color="#3e63dd"
                className="hover:opacity-100 transition-all opacity-30 cursor-pointer"
              />
              <Pencil1Icon
                onClick={() => navigate(`/edit-post/${_id}`)}
                width={"25px"}
                height={"25px"}
                color="#3e63dd"
                className="hover:opacity-100 transition-all opacity-30 cursor-pointer"
              />
            </Flex>
          )}
        </Flex>
        {!isFullPost ? (
          <Link to={`/posts/${_id}`}>
            <Heading size={"8"}>{title}</Heading>
          </Link>
        ) : (
          <Heading size={"8"}>{title}</Heading>
        )}
        <Flex gap={"3"} wrap={"wrap"}>
          {tags.map((tag, i) => (
            <Button key={i} variant="ghost">
              #{tag}
            </Button>
          ))}
        </Flex>
        {isFullPost && <Markdown className="markdown">{text}</Markdown>}
        <Flex
          gap={"4"}
          className={theme === "dark" ? "text-white" : "text-[#1915014A]"}
        >
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

export default Post;

//TODO:
//https://www.radix-ui.com/themes/docs/components/badge
