import React, { useState } from "react";
import classes from "../style/SecondPageCSS.module.css";

export const SecondPage = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  return (
    <article>
      <h3>Dodaj zadanie</h3>
      <form action="">
        <input
          type="text"
          name="zadanie"
          id=""
          placeholder="zadanie"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <select name="zadanie" id="">
          <option value="" hidden>
            Wybierz priorytet
          </option>
        </select>
      </form>
    </article>
  );
};
