import React, { useState } from "react";

export const Wykres = (props) => {
  const { color, wys, day, etykieta, setEtykieta } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setEtykieta(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setEtykieta(false);
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
      <div
        style={{
          display: "block",
          backgroundColor: isHovered ? color : `dark${color}`,
          height: `${wys}px`,
          padding: 5,
          borderRadius: 5,
          border: "none",
          width: "30px",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      {day}
    </div>
  );
};
