import React, { useState } from "react";

export const DodajPost = (props) => {
  const { posts, setPosts } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const liczba = posts.length+1
  const [lp, setLp] = useState(liczba)
  // console.log(lp)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLp(lp+1)
        const newPost = {
          id: lp,
          title,
          content,
        };
        setPosts((prev) => [...prev, newPost]);
        setContent("");
        setTitle("");
      }}
    >
      <input
        type="text"
        placeholder="title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};
