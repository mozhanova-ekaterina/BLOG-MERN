import React, { useEffect } from "react";
import Post from "./Post/Post";
import { Flex, Tabs } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/posts";

const PostsTabs = () => {

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const isLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Tabs.Root defaultValue="new">
      <Tabs.List>
        <Tabs.Trigger value="new">Новые</Tabs.Trigger>
        <Tabs.Trigger value="pop">Популярные</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="new">
        <Flex direction={"column"} gap={"4"} py={"4"}>
          {(isLoading ? [...Array(5)] : posts.items).map((post, i) =>
            isLoading ? (
              <Post key={i} isLoading={true} />
            ) : (
              <Post
                imageUrl={post.imageUrl}
                title={post.title}
                author={post.author.fullname}
                createdAt={post.createdAt}
                tags={post.tags}
                viewsCount={post.viewsCount}
                commentsCount={post.commentsCount}
                key={i}
                _id={post._id}
              />
            )
          )}
        </Flex>
      </Tabs.Content>
      <Tabs.Content value="pop">
        <Flex direction={"column"} gap={"4"} py={"4"}>
          {(isLoading ? [...Array(5)] : posts.items).map((post, i) =>
            isLoading ? (
              <Post key={i} isLoading={true} />
            ) : (
              <Post
                imageUrl={post.imageUrl}
                title={post.title}
                author={post.author.fullname}
                createdAt={post.createdAt}
                tags={post.tags}
                viewsCount={post.viewsCount}
                commentsCount={post.commentsCount}
                key={i}
                _id={post._id}
              />
            )
          )}
        </Flex>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default PostsTabs;
