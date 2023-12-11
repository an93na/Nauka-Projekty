import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSliceBook";

export const Books = () => {
  const value = useSelector((state) => state.book.value)
  const dispatch = useDispatch()
  return (
    <article>
      <h4>Books</h4>
      <button onClick={()=> dispatch(increment(5))}>+5</button>
      <input type="text" readOnly value={value}/>
      <button>-5</button>
    </article>
  );
};