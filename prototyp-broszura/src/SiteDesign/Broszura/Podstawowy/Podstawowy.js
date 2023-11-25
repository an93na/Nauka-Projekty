import React, { useState } from "react";

export const Podstawowy = () => {
  const [Wybore, setWybor]=useState('')
  return (
    <div>
      <h3 style={{ color: "green" }}>Poziom podstawowy</h3>
      <select>
        <option value="" hidden>Wybierz z listy</option>
        <option value="opis">Opis</option>
        <option value="przyklad">Przykład</option>
        <option value="zadanie">Zadanie</option>
      </select>
      {}
    </div>
  );
};
