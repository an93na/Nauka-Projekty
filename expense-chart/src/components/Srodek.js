import React from "react";
import { Wykresy } from "./Wykresy";

export const Srodek = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginTop: "10px",
        padding: "20px",
        borderRadius: "10px",
        width: "350px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          Spending - Last 7 days
        </h3>
      </div>
      <Wykresy />
    </div>
  );
};
