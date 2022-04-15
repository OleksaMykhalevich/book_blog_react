import React from "react";

export const Buttons = ({ postsFilter, status }) => {
  return (
    <>
      <button className="categoryButt" onClick={() => postsFilter("all")}>
        All posts
      </button>
      <button className="categoryButt" onClick={() => postsFilter("new")}>
        New posts
      </button>
      <button className="categoryButt" onClick={() => postsFilter("old")}>
        Old posts
      </button>
    </>
  );
};
