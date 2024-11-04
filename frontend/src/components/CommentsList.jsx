import React, { useEffect, useState } from "react";
import {
  Avatar,
  Flex,
  TextArea,
  Heading,
  Button,
  Card,
} from "@radix-ui/themes";
import Comment from "./Comment";

const CommentsList = ({ data, editable, authUser, updatePost }) => {
  const [value, setValue] = useState({
    text: "",
    author: authUser,
  });
  const [comments, setComments] = useState();

  useEffect(() => {
    setComments(data);
  }, [data]);

  useEffect(() => {
    value.text && updatePost && updatePost(comments);
  }, [comments]);

  const addComment = () => {
    setComments([...comments, value]);
  };

  return (
    <>
      <Card>
        <Heading mb={"2"}>Комментарии</Heading>
        <Flex direction={"column"} gap={"3"}>
          {comments &&
            comments.map((comment, i) => (
              <Comment
                data={comment}
                isLast={i === comments.length - 1}
                key={i}
              />
            ))}

          {editable && (
            <Flex gap={"2"}>
              <Avatar fallback="A" radius="full" />
              <Flex gap={"2"} direction={"column"} flexGrow={"1"}>
                <TextArea
                  resize={"none"}
                  placeholder="Написать комментарий"
                  value={value.text}
                  onChange={(e) => setValue({ ...value, text: e.target.value })}
                ></TextArea>
                <div>
                  <Button onClick={addComment}>Отправить</Button>
                </div>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Card>
    </>
  );
};

export default CommentsList;
