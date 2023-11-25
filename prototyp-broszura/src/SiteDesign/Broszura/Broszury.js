import React, { useState } from "react";
import { BroszMore } from "./BroszMore";

export const Broszury = () => {
  const [klik, setKlik] = useState(false);
  const styleBtn = {
    width: 400,
    height: 150,
    backgroundColor: "palevioletred",
    padding: 20,
    textAlign: "center",
    borderRadius: "10px",
    border: "1px solid white",
    fontSize: 50,
    fontWeight: "bold",
  };
  return (
    <article>
      {klik ? (
        <BroszMore />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={styleBtn}
            value={klik}
            onClick={() => setKlik((prev) => !prev)}
          >
            Broszury
          </button>
        </div>
      )}
    </article>
  );
};
