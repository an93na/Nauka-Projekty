import React from "react";
import { Wykres } from "./Wykres";

export const Wykresy = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        alignItems: "baseline",
      }}
    >
      <Wykres color={"red"} wys={"20px"} day={"mon"} />
      <Wykres color={"red"} wys={"32px"} day={"tue"} />
      <Wykres color={"blue"} wys={"52px"} day={"wed"} />
      <Wykres color={"red"} wys={"31px"} day={"thu"} />
      <Wykres color={"red"} wys={"23px"} day={"fri"} />
      <Wykres color={"red"} wys={"45px"} day={"sat"} />
      <Wykres color={"red"} wys={"25px"} day={"sun"} />
    </div>
  );
};
