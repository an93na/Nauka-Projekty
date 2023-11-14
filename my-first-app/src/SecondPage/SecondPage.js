import classes from "../style/SecondPageCSS.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { DodajZadanie } from "./DodajZadanie";
import { Zadania } from "./Zadania";
import { useState } from "react";
import { Home } from "./Home";

export const SecondPage = () => {
  const [tabTodo, setTabTodo] = useState([]);

  console.log(tabTodo)
  return (
    <article>
      <div className={classes.nawi}>
        <Link to="home">Home</Link>
        <Link to="add-task">Dodaj zadanie</Link>
        <Link to="lista">Lista</Link>
      </div>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route
          path="add-task"
          element={<DodajZadanie setTabTodo={setTabTodo} />}
        />
        <Route path="lista" element={<Zadania tabTodo={tabTodo} setTabTodo={setTabTodo} />} />
      </Routes>
    </article>
  );
};
