import React from "react";
import "./HomePage.css";
import { Buttons } from "../elements/Buttons";
import { PostsBlog } from "../elements/Posts";
import { postsArray } from "../shared/PostsArray";
import { Grid } from "@mui/material";
import { PostsPosition } from "../elements/Posts";

export const HomePage = ({}) => {
  return (
    <>
      <div className="preview">
        <div className="title">
          <h1>THE BOOK LOVER</h1>
          <p>READ ALL ABOUT IT</p>
        </div>
      </div>
      <div className="postsPart">
        <div className="container">
          <Buttons />
          <div className="pPosition">
            {postsArray.map(({ id, name, titles, image, text }) => (
              <Grid className="postsGrid" item xs={12} sm={6} md={6} key={id}>
                <PostsBlog
                  id={id}
                  name={name}
                  titles={titles}
                  image={image}
                  text={text}
                />
              </Grid>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
