import React from "react";

export const Podsumowanie = (props) => {
  const { suma } = props;
  return (
    <div style={{ borderTopStyle: "groove", marginTop: 10, padding: 10 }}>
      <p
        style={{ fontWeight: "lighter", fontFamily: "monospace", fontSize: 10 }}
      >
        Total this month
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <h3>${suma}</h3>
        <div>
          <h6>+%</h6>
          <p
            style={{
              fontWeight: "lighter",
              fontFamily: "monospace",
              fontSize: 10,
            }}
          >
            from last month
          </p>
        </div>
      </div>
    </div>
  );
};
