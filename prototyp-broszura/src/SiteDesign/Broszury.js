import React, { useState } from "react";

export const Broszury = () => {
  const [klik, setKlik] = useState(false);
  return (
    <article
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          width: 300,
          backgroundColor: "palevioletred",
          padding: 20,
          textAlign: "center",
          borderRadius: "10px",
        }}
        value={klik}
        onClick={(prev) => setKlik(!prev)}
      >
        Broszury
      </button>
    </article>
  );
};
