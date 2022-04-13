import React from "react";
import post1 from "../img/1post.webp";
import avatar from "../img/завантаження.jpg";

export const PostsBlog = ({ id, name, titles, image, text }) => {
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
        </div>
      </div>
    </>
  );
};
