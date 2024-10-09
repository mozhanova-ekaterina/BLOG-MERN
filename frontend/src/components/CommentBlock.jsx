import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { TextArea } from "@radix-ui/themes/dist/cjs/index.js";

const CommentBlock = ({ addComment }) => {
  return (
    <Card>
      <Heading mb={"2"}>Комментарии</Heading>
      <Flex direction={"column"} gap={"3"}>
        <Flex gap={"2"}>
          <Avatar fallback="A" radius="full" />
          <Flex direction={"column"}>
            <Text weight={"bold"}>Елена Кошкина</Text>
            <Text wrap="pretty" size={"1"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
              delectus.
            </Text>
          </Flex>
        </Flex>
        <div className="h-[1px] bg-[#DAD9D6]"></div>
        <Flex gap={"2"}>
          <Avatar fallback="A" radius="full" />
          <Flex direction={"column"}>
            <Text weight={"bold"}>Андрей Иванов</Text>
            <Text wrap="pretty" size={"1"}>
              Lorem ipsum, dolor sit
            </Text>
          </Flex>
        </Flex>
        <div className="h-[1px] bg-[#DAD9D6]"></div>
        <Flex gap={"2"}>
          <Avatar fallback="A" radius="full" />
          <Flex direction={"column"}>
            <Text weight={"bold"}>Владимир Невпутин</Text>
            <Text wrap="pretty" size={"1"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem cum cupiditate maiores alias vitae.
            </Text>
          </Flex>
        </Flex>
        <div className="h-[1px] bg-[#DAD9D6]"></div>
        {addComment && (
          <Flex gap={"2"}>
            <Avatar fallback="A" radius="full" />
            <Flex gap={"2"} direction={"column"} flexGrow={"1"}>
              <TextArea
                resize={"none"}
                placeholder="Написать комментарий"
              ></TextArea>
              <div>
                <Button>Отправить</Button>
              </div>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Card>
  );
};

export default CommentBlock;
