import React, { useState } from "react";

export const Podsumowanie = (props) => {
  const { pon, wt, sr, czw, pt, sob, ndz, sumawydatkow, setSumaWydatkow } =
    props;
  const [isChecked, setIsChecked] = useState(false);
  // console.log(isChecked);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
        {isChecked ? (
          <h3 style={{ marginTop: 0, fontSize: "xx-large" }}>
            ${sumawydatkow}
          </h3>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let zsumuj =
                Number(pon.wydatek) +
                Number(wt.wydatek) +
                Number(sr.wydatek) +
                Number(czw.wydatek) +
                Number(pt.wydatek) +
                Number(sob.wydatek) +
                Number(ndz.wydatek);
              setSumaWydatkow(zsumuj);
              setIsChecked(true);
            }}
          >
            <button
              type="submit"
              style={{
                marginTop: 5,
                padding: 10,
                borderRadius: 5,
                backgroundColor: isHovered ? "salmon" : "darksalmon",
                color: "white",
                fontFamily: "monospace",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Pokaż sumę
            </button>
          </form>
        )}

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
      <p
        style={{ fontWeight: "lighter", fontFamily: "monospace", fontSize: 10 }}
      >
        Bilans budżet-wydatki
      </p>
      <form></form>
    </div>
  );
};
