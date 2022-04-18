import React from "react";
import { HomePage } from "../../componants/pages/HomePage";
import "../Main/grid.css";
import { AboutPage } from "../../componants/pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "../../componants/pages/PostsPage";

export const Main = ({ changeLikeState, likeProductsState }) => {
  return (
    <>
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route
          exact
          path="/"
          element={
            <HomePage
              changeLikeState={changeLikeState}
              likeProductsState={likeProductsState}
            />
          }
        />
        <Route exact path="/the-book-lover/:title" element={PostsPage} />
      </Routes>
    </>
  );
};
