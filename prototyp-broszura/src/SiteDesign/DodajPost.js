import React from "react";

export const DodajPost = (props) => {
  const { posts, setPosts } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" placeholder="title" />
      <input type="text" placeholder="content" />
      <button type="submit">Dodaj</button>
    </form>
  );
};
