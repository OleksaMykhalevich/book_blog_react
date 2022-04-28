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
import { connect } from "react-redux";

const setNavLinkClass = ({ isActive }) => (isActive ? "nav-link" : "menu-link");

const PostsBlog = ({
  id,
  name,
  title,
  titles,
  image,
  text,
  liked,

  removeLike,
  addLike,
  isLiked = false,
}) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentPost(postsArray[id - 1]));
    history(`/the-book-lover/${title}`);
  };

  return (
    <>
      <div className="postItem">
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
          </div>
        </div>
        <div className="reactionButt">
          <div className="postStats">
            <p>0 views</p>
            <p>0 comments</p>
          </div>
          <div className="like">
            <Button onClick={() => (isLiked ? removeLike(id) : addLike(id))}>
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, { id }) => ({
  isLiked: state.productsLikeState[id],
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (id) =>
    dispatch({
      type: "LIKE",
      id,
    }),
  removeLike: (id) =>
    dispatch({
      type: "DISLIKE",
      id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsBlog);
