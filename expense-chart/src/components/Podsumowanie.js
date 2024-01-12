import React, { useState } from "react";

export const Podsumowanie = (props) => {
  const { suma } = props;
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)
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
        <label>
        <input type="checkbox" checked={isChecked} value={isChecked} onChange={() => setIsChecked(prev => !prev)}/>
        Pokaż sumę
        </label>
        {isChecked ? <h3 style={{marginTop: 0, fontSize: 'xx-large'}}>${suma}</h3> : <h3></h3>}

        <div>
          <h6 style={{ marginBottom: 2, marginTop: 0 }}>+2.4%</h6>
          <p
            style={{
              fontWeight: "lighter",
              fontFamily: "monospace",
              fontSize: 10,
              marginTop: 2,
            }}
          >
            from last month
          </p>
        </div>
      </div>
    </div>
  );
};
