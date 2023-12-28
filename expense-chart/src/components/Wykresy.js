import React from "react";
import { Wykres } from "./Wykres";

export const Wykresy = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
    </div>
  );
};
