import React from "react";
import { useSelector } from "react-redux";
import "./PostsPage.css";
import { postsArray } from "../shared/PostsArray";

export const PostsPage = ({ id }) => {
  const post = useSelector((state) => state.post.currentPost[id]);
  console.log(post);
  if (!post) return null;

  return (
    <div className="postPage">
      <h1>{post.titles}</h1>
    </div>
  );
};
