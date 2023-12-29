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
      <Wykres color={'red'} wys={'20px'} day={'mon'}/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
      <Wykres/>
    </div>
  );
};
