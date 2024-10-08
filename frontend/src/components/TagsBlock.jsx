import React from "react";
import { Avatar, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";


const TagsBlock = () => {
  return (
    <Card>
      <Heading mb={"2"}>Тэги</Heading>
      <Flex gap={"2"} wrap={"wrap"}>
        <Button variant="soft">#react</Button>
        <Button variant="soft">#angular</Button>
        <Button variant="soft">#vue</Button>
        <Button variant="soft">#axios</Button>
        <Button variant="soft">#css</Button>
        <Button variant="soft">#js</Button>
      </Flex>
    </Card>
  );
};

export default TagsBlock;
