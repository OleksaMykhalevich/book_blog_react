import { Button } from "@mui/material";
import React from "react";
import post1 from "../img/1post.webp";
import avatar from "../img/завантаження.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const PostsBlog = ({
  id,
  name,
  titles,
  image,
  text,
  liked,
  changeLikeState,
  isLiked,
}) => {
  return (
    <>
      <div className="post ">
        <img className="postImg" src={image} />
        <div className="postContent">
          <img className="avatar" src={avatar} />
          <p>
            {name}
            <br />
            Dec 9, 2021 1 min
          </p>
          <p className="postText">
            <span>{titles}</span>
            <br /> {text}.
          </p>
          <p className="line"> -</p>
          <div className="reactionButt">
            <div className="postStats">
              <p>0 views</p>
              <p>0 comments</p>
            </div>
            <div className="like">
              <p>{liked}</p>
              <Button onClick={() => changeLikeState(id)}>
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
