import React, { useState } from "react";

export const Header = () => {
  const [balance, setBalance] = useState("");
  return (
    <div
      style={{
        backgroundColor: "rebeccapurple",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <p style={{ color: "white", marginTop: 5, fontFamily: "monospace" }}>
        My balance
      </p>
      <p style={{color: "white", fontWeight: 'bold'}}>${balance}</p>
    </div>
  );
};
