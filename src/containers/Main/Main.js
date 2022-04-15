import React from "react";
import { HomePage } from "../../componants/pages/HomePage";
import "../Main/grid.css";
import { AboutPage } from "../../componants/pages/AboutPage";
import { Route, link, Routes } from "react-router-dom";
import { Container } from "@mui/material";

export const Main = ({ changeLikeState, likeProductsState }) => {
  return (
    <>
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route
          path="/"
          element={
            <HomePage
              changeLikeState={changeLikeState}
              likeProductsState={likeProductsState}
            />
          }
        />
      </Routes>
    </>
  );
};
