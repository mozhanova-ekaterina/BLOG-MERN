import React, { useEffect, useState } from "react";
import { Avatar, Text, Flex } from "@radix-ui/themes";

const Comment = (isLast, data) => {
  const [comment, setComment] = useState({
    text: "",
  });
  useEffect(() => {
    setComment(data);
  }, [data]);

  console.log(data);

  // if (comment.text)
  return (
    <>
      {comment.text}
      {/* <Flex gap={"2"}>
          <Avatar fallback="A" radius="full" />
          <Flex direction={"column"}>
            <Text weight={"bold"}>{data.author.fullname}</Text>
            <Text wrap="pretty" size={"1"}>
              {data.text}
            </Text>
          </Flex>
        </Flex>
        {!isLast && <div className="h-[1px] bg-[#DAD9D6]"></div>} */}
    </>
  );
};

export default Comment;
