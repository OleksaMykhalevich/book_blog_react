import React from "react";
import { HomePage } from "../../componants/pages/HomePage";
import "../Main/grid.css";
import { AboutPage } from "../../componants/pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import PostsPage from "../../componants/pages/PostsPage";
import { postsArray } from "../../componants/shared/PostsArray";
import { useSelector } from "react-redux";

export const Main = ({ changeLikeState, likeProductsState, id }) => {
  const post = useSelector((state) => state.post.currentPost);
  return (
    <>
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/the-book-lover/:title"
          element={<PostsPage post={post} id={id} />}
        />
      </Routes>
    </>
  );
};
