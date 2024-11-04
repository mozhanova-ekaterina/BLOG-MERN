import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/slices/posts";
import CommentsList from "./CommentsList";

const CommentBlock = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.posts.comments.items);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  if (comments.length)
    return (
      <>
        <CommentsList data={comments} />
      </>
    );
};

export default CommentBlock;
