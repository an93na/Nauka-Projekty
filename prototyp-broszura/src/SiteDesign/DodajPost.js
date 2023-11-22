import React from "react";

export const DodajPost = (props) => {
  const { posts, setPosts } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" placeholder="title" required/>
      <input type="text" placeholder="content" required/>
      <button type="submit">Dodaj</button>
    </form>
  );
};
