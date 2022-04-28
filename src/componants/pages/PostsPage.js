import React from "react";
import { useSelector } from "react-redux";
import "./PostsPage.css";
import { Link } from "react-router-dom";
import avatar from "../img/завантаження.jpg";
import twiter from "../img/twiter.webp";
import facebook from "../img/facebook.webp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";
import { connect } from "react-redux";

const PostsPage = ({ removeLike, addLike, isLiked = false }) => {
  const post = useSelector((state) => state.post.currentPost);
  console.log(post.id);
  if (!post) return null;

  return (
    <div className="container">
      <Link to="/">
        <button>All posts</button>
      </Link>
      <div className="postPage">
        <div className="postPagePosition">
          <div className="postAvtor">
            <img className="avatar" src={avatar} />
            <p className="">{post.name} Dec 9, 2021 1 min read</p>
          </div>
          <h1>{post.titles}</h1>
          <p className="avatarText">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading.
          </p>
        </div>
        <img className="openPagePostImg" src={post.image}></img>
        <p className="openPostText">{post.openPostText1}</p>
        <p className="openPostText1">{post.openPostText2}</p>
        <p className="openPostText">{post.openPostText3}</p>
        <p className="openPostTitle">{post.openPostTitle}</p>
        <p className="openPostText">{post.openPostText4}</p>
        <p className="openPostText">{post.openPostText5}</p>
      </div>
      <div className="openPostSocial">
        <p className="line">-</p>
        <img src={twiter} />
        <img src={facebook} />
        <p className="line">-</p>
      </div>
      <div className="reactionButt">
        <div className="postStats">
          <p>0 views</p>
          <p>0 comments</p>
        </div>
        <div className="like">
          <Button
            onClick={() => (isLiked ? removeLike(post.id) : addLike(post.id))}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, { post }) => ({
  isLiked: state.productsLikeState[post.id],
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
export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
