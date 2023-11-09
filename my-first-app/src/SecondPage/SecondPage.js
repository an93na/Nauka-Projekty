import React, { useState } from "react";
import classes from "../style/SecondPageCSS.module.css";

export const SecondPage = () => {
  const [todo, setTodo] = useState([]);
  const [priority, setPriority] = useState("");
  return (
    <article>
      <h3>Dodaj zadanie</h3>
      <form action="" onSubmit={(e) => {
        e.preventDefault()

      }}>
        <input
          type="text"
          name="zadanie"
          id=""
          placeholder="zadanie"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <select
          name="zadanie"
          id=""
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Wybierz priorytet
          </option>
          <option value="hight">hight</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
