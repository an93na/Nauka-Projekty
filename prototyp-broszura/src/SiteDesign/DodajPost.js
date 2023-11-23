import React, { useState } from "react";

export const DodajPost = (props) => {
  const { setPosts } = props;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [lp, setLp] = useState(101);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLp(lp + 1);
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
