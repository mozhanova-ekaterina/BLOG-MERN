import React, { useEffect } from "react";
import { Button, Card, Flex, Heading, Spinner } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../redux/slices/posts";

const TagsBlock = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.posts);
  const isLoading = tags.status === "loading";

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  if (isLoading) {
    return (
      <>
        <Card>
          <Heading mb={"2"}>Тэги</Heading>
          <Spinner />
        </Card>
      </>
    );
  }
  return (
    <>
      {tags.items.length && (
        <Card>
          <Heading mb={"2"}>Тэги</Heading>
          <Flex gap={"2"} wrap={"wrap"}>
            {tags.items.map((tag, i) => (
              <Button key={i} variant="soft">
                #{tag}
              </Button>
            ))}
          </Flex>
        </Card>
      )}
    </>
  );
};

export default TagsBlock;

//TODO:
//skeleton
//вывод страницы с постами по тэгу
