import React, { useState } from "react";
import "./HomePage.css";
import { Buttons } from "../elements/Buttons";
import PostsBlog from "../elements/Posts";
import { postsArray } from "../shared/PostsArray";
import { Grid } from "@mui/material";

import "../pages/grid.css";

export const HomePage = ({ status }) => {
  const [filtered, setFiltered] = useState(postsArray);

  const postsFilter = (status) => {
    if (status === "all") {
      setFiltered(postsArray);
    } else {
      const newPostsArray = [...postsArray].filter(
        (item) => item.status === status
      );
      setFiltered(newPostsArray);
    }
  };
  return (
    <>
      <div className="preview">
        <div className="title">
          <p>THE BOOK LOVER</p>
          <p>READ ALL ABOUT IT</p>
        </div>
      </div>
      <div className="postsPart">
        <div className="container">
          <Buttons postsFilter={postsFilter} />
          <div className="pPosition">
            {filtered.map(
              ({ id, name, title, titles, image, text, liked, status }) => (
                <Grid
                  className="postsGrid col-xs-12 col-md-6 col-sm-6  "
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  key={id}
                >
                  <PostsBlog
                    postsFilter={postsFilter}
                    status={status}
                    id={id}
                    name={name}
                    titles={titles}
                    image={image}
                    text={text}
                    liked={liked}
                    title={title}
                  />
                </Grid>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
