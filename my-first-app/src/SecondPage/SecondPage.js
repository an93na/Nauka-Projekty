import React, { useState } from "react";
import classes from "../style/SecondPageCSS.module.css";
import { Zadania } from "./Zadania";
import { Link } from "react-router-dom";

export const SecondPage = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const [tabTodo, setTabTodo] = useState([]);
  return (
    <article>
      <div className={classes.nawi}>
        <Link to="/second-page">Home</Link>
        <Link to="/add-task">Dodaj zadanie</Link>
        <Link to="/lista">Lista</Link>
      </div>
      <h3>Dodaj zadanie</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const newTab = { todo, priority, id: Math.random() };
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
          required
        />
        <select
          name="zadanie"
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
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
      <Zadania tabTodo={tabTodo} />
    </article>
  );
};
