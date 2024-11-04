import React from "react";
import Center from "../layout/Center";
import SideBlock from "../layout/SideBlock";
import { Container, Flex, Theme } from "@radix-ui/themes";
import TagsBlock from "../components/TagsBlock";
import CommentBlock from "../components/CommentBlock";
import PostsTabs from "../components/PostsTabs";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector(state => state.theme.color)

  return (
    <Theme accentColor="indigo" grayColor="sand" appearance={theme}>
      <Container size={3} px={{ initial: "3", sm: "6" }}>
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
    </Theme>
  );
};

export default Home;
