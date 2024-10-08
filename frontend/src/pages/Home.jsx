import React from "react";
import Header from "../components/Header";
import Center from "../layout/Center";
import SideBlock from "../layout/SideBlock";
import { Flex } from "@radix-ui/themes";
import TagsBlock from "../components/TagsBlock";
import CommentBlock from "../components/CommentBlock";

const Home = () => {
  return (
    <div>
      <Header />
      <Flex gap={"30px"} direction={{ initial: "column", sm: "row" }}>
        <Center />
        <SideBlock>
          <CommentBlock />
          <TagsBlock />
        </SideBlock>
      </Flex>
    </div>
  );
};

export default Home;
