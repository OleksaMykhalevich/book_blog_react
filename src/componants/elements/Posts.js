import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import avatar from "../img/завантаження.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { postsArray } from "../shared/PostsArray";
import { setCurrentPost } from "../../redux/Posts/reducer";
import { useNavigate } from "react-router-dom";

const setNavLinkClass = ({ isActive }) => (isActive ? "nav-link" : "menu-link");

export const PostsBlog = ({
  id,
  name,
  title,
  titles,
  image,
  text,
  liked,
  changeLikeState,
  isLiked,
}) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPost(postsArray));
    history(`/the-book-lover/${title}`);
  };

  return (
    <>
      <div className="post " onClick={handleClick}>
        <img className="postImg" alt="img" src={image} />
        <div className="postContent">
          <img className="avatar" alt="avatar" src={avatar} />
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
