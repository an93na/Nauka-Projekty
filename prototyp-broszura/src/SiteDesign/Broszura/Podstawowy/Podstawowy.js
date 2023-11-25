import React, { useState } from "react";
import { Opis } from "./Opis";
import { Przykład } from "./Przykład";
import { Zadnie } from "./Zadnie";

export const Podstawowy = () => {
  const [wybor, setWybor] = useState("");
  return (
    <div>
      <h3 style={{ color: "green" }}>Poziom podstawowy</h3>
      <select value={wybor} onChange={(e) => setWybor(e.target.value)}>
        <option value="" hidden>
          Wybierz z listy
        </option>
        <option value="opis">Opis</option>
        <option value="przyklad">Przykład</option>
        <option value="zadanie">Zadanie</option>
      </select>
      {wybor === "opis" && <Opis />}
      {wybor === "przyklad" && <Przykład />}
      {wybor === "zadanie" && <Zadnie />}
    </div>
  );
};
