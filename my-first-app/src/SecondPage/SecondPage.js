import React, { useState } from "react";
import classes from "../style/SecondPageCSS.module.css";

export const SecondPage = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const [tabTodo, setTabTodo] = useState([]);
  console.log(tabTodo);
  return (
    <article>
      <h3>Dodaj zadanie</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const newTab = { todo, priority };
          setTabTodo((prev) => [...prev, newTab]);
          setTodo("");
          setPriority("");
        }}
      >
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
          value={priority}
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
