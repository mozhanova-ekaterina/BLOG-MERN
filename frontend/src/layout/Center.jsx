import React from "react";
import { Flex, Section, Tabs } from "@radix-ui/themes";
import Post from "../components/Post";

const Center = () => {
  return (
    <Section flexGrow={"1"} flexBasis={"75%"}>
      <Tabs.Root defaultValue="new">
        <Tabs.List>
          <Tabs.Trigger value="new">Новые</Tabs.Trigger>
          <Tabs.Trigger value="pop">Популярные</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="new">
          <Flex direction={"column"} gap={"4"} py={"4"}>
            <Post
              title={"Новый пост"}
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt repudiandae quos, aspernatur animi eum inventore! Numquam mollitia quod cum animi error praesentium ullam libero obcaecati odit quia soluta expedita delectus nobis voluptates magnam, omnis accusamus facilis! Aliquid corporis, quo ad et perspiciatis neque velit, harum sit explicabo fugit voluptate."
              }
            />
            <Post
              title={"Новый пост"}
              text={
                "Lorem ipsum dolor sit amet consectetum ullam libero obcaecati odit quia soluta expedita delectus nobis voluptates magnam, omnis accusamus facilis! Aliquid corporis, quo ad et perspiciatis neque velit, harum sit explicabo fugit voluptate."
              }
            />
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="pop">
          <Flex direction={"column"} gap={"4"} py={"4"}>
            <Post
              title={"Новый пост"}
              text={
                "Lorem ipsum dolor sit amet consectetum ullam libero obcaecati odit quia soluta expedita delectus nobis voluptates magnam, omnis accusamus facilis! Aliquid corporis, quo ad et perspiciatis neque velit, harum sit explicabo fugit voluptate."
              }
            />
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </Section>
  );
};

export default Center;
