import React from "react";

export const Wykres = (props) => {
  const { color, wys, day, etykieta, setEtykieta } = props;
  return (
    <div
      style={{
        textAlign: "center",
        padding: 5,
        fontWeight: "lighter",
        fontFamily: "monospace",
        fontSize: 10,
      }}
    >
      {etykieta ? (
        <div
          style={{
            backgroundColor: "black",
            marginBottom: 5,
            height: 10,
            width: 20,
            padding: 5,
            color: "white",
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          ${wys}
        </div>
      ) : (
        <div></div>
      )}
      <button
        style={{
          display: "block",
          backgroundColor: color,
          height: `${wys}px`,
          padding: 5,
          borderRadius: 5,
          border: "none",
          width: "35px",
        }}
        onClick={() => setEtykieta((prev) => !prev)}
      ></button>
      {day}
    </div>
  );
};
