import { Avatar, Flex, Text, Skeleton } from "@radix-ui/themes";
import React from "react";

const PostSkeleton = () => {
  return (
    <>
      <Skeleton minHeight={"400px"} loading="true" />
      <Flex gap={"2"} align={"center"}>
        <Skeleton>
          <Avatar radius="full" />
        </Skeleton>
        <Flex direction={"column"} gap={"2"}>
          <Text>
            <Skeleton width={"100px"}></Skeleton>
          </Text>
          <Text>
            <Skeleton width={"70px"}></Skeleton>
          </Text>
        </Flex>
      </Flex>
      <Skeleton width={"300px"} height={"30px"} />
      <Flex gap={"2"}>
        <Skeleton height={"10px"} width={"20px"} />
        <Skeleton height={"10px"} width={"20px"} />
        <Skeleton height={"10px"} width={"20px"} />
        <Skeleton height={"10px"} width={"20px"} />
      </Flex>
      <Flex gap={"2"}>
        <Skeleton height={"10px"} width={"30px"} />
        <Skeleton height={"10px"} width={"30px"} />
      </Flex>
    </>
  );
};

export default PostSkeleton;
