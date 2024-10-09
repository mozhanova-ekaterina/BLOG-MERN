import React, { useEffect } from "react";
import Center from "../layout/Center";
import SideBlock from "../layout/SideBlock";
import { Container, Flex } from "@radix-ui/themes";
import TagsBlock from "../components/TagsBlock";
import CommentBlock from "../components/CommentBlock";
import PostsTabs from "../components/PostsTabs";
import Header from "../components/Header";

const Home = () => {
  return (
    <Container size={3} px={"6"}>
      <Header />
      <Flex gap={"30px"} direction={{ initial: "column", sm: "row" }}>
        <Center>
          <PostsTabs />
        </Center>
        <SideBlock>
          <CommentBlock addComment={false} />
          <TagsBlock />
        </SideBlock>
      </Flex>
    </Container>
  );
};

export default Home;
