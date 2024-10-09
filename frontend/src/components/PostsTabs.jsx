import React from "react";
import Post from "./Post/Post";
import { Flex, Tabs } from "@radix-ui/themes";

const PostsTabs = () => {
  return (
    <Tabs.Root defaultValue="new">
      <Tabs.List>
        <Tabs.Trigger value="new">Новые</Tabs.Trigger>
        <Tabs.Trigger value="pop">Популярные</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="new">
        <Flex direction={"column"} gap={"4"} py={"4"}>
          <Post
            imageUrl={
              "https://beautifoto.ru/wp-content/uploads/2019/07/14-4-1024x640.jpg"
            }
            title={"Новый пост"}
            author={"Виталий Романов"}
            createdAt={"02 февраля 2024г."}
            tags={["asd", "asd", "asd"]}
            viewsCount={10}
            commentsCount={2}
          />
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
            isLoading={false}
          />
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
