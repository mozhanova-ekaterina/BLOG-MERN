import React, { useEffect } from "react";
import Post from "./Post/Post";
import { Flex, Tabs } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/posts";
import PostSkeleton from "./Post/Skeleton";

const PostsTabs = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const isLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(posts.items);
  

  return (
    <Tabs.Root defaultValue="new">
      <Tabs.List>
        <Tabs.Trigger value="new">Новые</Tabs.Trigger>
        <Tabs.Trigger value="pop">Популярные</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="new">
        <Flex direction={"column"} gap={"4"} py={"4"}>
          {(isLoading
            ? [...Array(5)]
            : posts.items).map((post, i) =>
                isLoading ? (
                  <Post isLoading={true}/>
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
          <Post
            imageUrl={
              "https://sun9-79.userapi.com/impf/c841535/v841535724/3f928/Ul4muytNUDM.jpg?size=1280x800&quality=96&sign=6fe9695deff2f11ef41a3e1c85038084&c_uniq_tag=BWlH4efc0Ob4aQJTwNlrqJTQbit9GCwdIGsW0zW-1Mo&type=album"
            }
            title={"Новый пост"}
            author={"Виталий Романов"}
            createdAt={"02 февраля 2024г."}
            tags={["asd", "asd", "asd"]}
            viewsCount={10}
            commentsCount={2}
          />
        </Flex>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default PostsTabs;
