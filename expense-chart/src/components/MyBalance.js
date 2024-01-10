import React from "react";
import { Header } from "./Header";
import { Srodek } from "./Srodek";

export const MyBalance = () => {
  return (
    <div
      style={{ backgroundColor: "wheat", padding: "20px", borderRadius: 10 }}
    >
      <Header />
      <Srodek />
    </div>
  );
};
