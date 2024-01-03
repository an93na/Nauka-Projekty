import React, { useState } from "react";

export const Wykres = (props) => {
  const { color, wys, day, etykieta, setEtykieta } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
        <div
          style={{
            marginBottom: 5,
            height: 10,
            width: 20,
            padding: 5,
            borderRadius: 5,
            textAlign: "center",
          }}
        ></div>
      )}
      <button
        style={{
          display: "block",
          backgroundColor: isHovered ? color : `dark${color}`,
          height: `${wys}px`,
          padding: 5,
          borderRadius: 5,
          border: "none",
          width: "35px",
          cursor: "pointer",
        }}
        onClick={() => setEtykieta((prev) => !prev)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></button>
      {day}
    </div>
  );
};
