import classes from "../style/SecondPageCSS.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { DodajZadanie } from "./DodajZadanie";
import { Zadania } from "./Zadania";
import { NotFound } from "./NotFound";
import { useState } from "react";

export const SecondPage = () => {
  const [tabTodo, setTabTodo] = useState([]);
  return (
    <article>
      <div className={classes.nawi}>
        <Link to="second-page">Home</Link>
        <Link to="add-task">Dodaj zadanie</Link>
        <Link to="lista">Lista</Link>
      </div>
      <Routes>
        <Route path="second-page" element={<SecondPage />} />
        <Route path="add-task" element={<DodajZadanie />} />
        <Route path="lista" element={<Zadania />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
};
