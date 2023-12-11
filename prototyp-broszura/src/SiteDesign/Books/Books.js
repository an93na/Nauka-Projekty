import React from "react";
import { useSelector } from "react-redux";

export const Books = () => {
  const value = useSelector((state) => state.book.value)
  return (
    <article>
      <h4>Books</h4>
      <button>+5</button>
      <input type="text" readOnly value={value}/>
      <button>-5</button>
    </article>
  );
};
