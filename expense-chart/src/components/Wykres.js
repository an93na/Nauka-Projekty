import React from "react";

export const Wykres = (props) => {
  const { color, wys, day } = props;
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          height: wys,
          padding: 5,
        }}
      ></div>
      {day}
    </div>
  );
};
