import React from "react";

export const PrzykladBtn = (props) => {
  const { color, pokaz, setPokaz } = props;
  return (
    <button
      style={{ backgroundColor: color }}
      value={pokaz}
      onClick={() => setPokaz("przyklad")}
    >
      Przykład
    </button>
  );
};
