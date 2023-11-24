import React, { useState } from "react";
import { BroszMore } from "./BroszMore";

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
      {klik ? (
        <BroszMore/>
      ) : (
        <button
          style={{
            width: 400,
            height: 150,
            backgroundColor: "palevioletred",
            padding: 20,
            textAlign: "center",
            borderRadius: "10px",
            border: "1px solid white",
            fontSize: 50,
            fontWeight: "bold",
          }}
          value={klik}
          onClick={() => setKlik((prev) => !prev)}
        >
          Broszury
        </button>
      )}

      {console.log(klik)}
    </article>
  );
};
