import React from "react";
import post1 from "../img/1post.webp";
import avatar from "../img/завантаження.jpg";

export const PostsBlog = ({ id, name, titles, image, text }) => {
  return (
    <>
      <div className="post col-xs-6">
        <img className="postImg" src={image} />
        <div className="postContent">
          <img className="avatar" src={avatar} />
          <p>{name}</p>
          <p className="postText">
            <span>{titles}</span>
            <br /> {text}.
          </p>
          `<p>----------------------------------------------------</p>
        </div>
      </div>
    </>
  );
};
// return (
//   <>
//     <div className="postPositon">
//       <div className="post col-xs-6">
//         <img className="postImg" src={post1} />
//         <div className="postContent">
//           <img className="avatar" src={avatar} />
//           <p>
//             Admin
//             <br />
//             Dec 9, 2021 1 min
//           </p>
//           <p className="postText">
//             <span>How reading changes your perspective</span>
//             <br /> Create a blog post subtitle that summarizes your post in a
//             few short, punchy sentences and entices your audience to continue
//             reading....
//           </p>
//           <p>----------------------------------------------------</p>
//         </div>
//       </div>
//     </div>
//   </>
// );
