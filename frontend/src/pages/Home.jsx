import React from "react";
import Center from "../layout/Center";
import SideBlock from "../layout/SideBlock";
import { Flex } from "@radix-ui/themes";
import TagsBlock from "../components/TagsBlock";
import CommentBlock from "../components/CommentBlock";
import PostsTabs from "../components/PostsTabs";

const Home = () => {
  return (
    <Flex gap={"30px"} direction={{ initial: "column", sm: "row" }}>
      <Center>
        <PostsTabs />
      </Center>
      <SideBlock>
        <CommentBlock addComment={false} />
        <TagsBlock />
      </SideBlock>
    </Flex>
  );
};

export default Home;
