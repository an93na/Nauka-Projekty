import React from "react";

export const Wykres = (props) => {
  const { color, wys, day } = props;
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
      <button
        style={{
          display: "block",
          backgroundColor: color,
          height: wys,
          padding: 5,
          borderRadius: 5,
          border: "none",
          width: "35px",
        }}
      ></button>
      {day}
    </div>
  );
};
