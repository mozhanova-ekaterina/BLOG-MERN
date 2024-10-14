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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost } from "../../redux/slices/posts";

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
}) => {
  const authUserId = useSelector((state) => state.auth.data?._id);
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removePost(id));
    dispatch(fetchPosts());
  };

  if (isLoading) {
    return <PostSkeleton />;
  }

  return (
    <Card>
      <Flex direction={"column"} gap={"4"}>
        {imageUrl && <img src={imageUrl} alt="image" />}
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
          {authUserId === author._id && (
            <Flex gap={"2"}>
              <Cross1Icon
                onClick={() => removeHandler(_id)}
                width={"25px"}
                height={"25px"}
                color="#3e63dd"
                className="hover:opacity-100 transition-all opacity-30 cursor-pointer"
              />
              <Pencil1Icon
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
        {isFullPost && <Text>{text}</Text>}
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

export default Post;
