import React, { useState } from "react";

export const Podsumowanie = (props) => {
  const {
    pon,
    wt,
    sr,
    czw,
    pt,
    sob,
    ndz,
    sumawydatkow,
    setSumaWydatkow,
    myBalance,
  } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedBud, setIsCheckedBud] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [bilans, setBilans] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
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
      {isCheckedBud ? (
        <h3 style={{ marginTop: 0, fontSize: "xx-large" }}>${bilans}</h3>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsCheckedBud(true);
            let oblicz = myBalance - sumawydatkow;
            setBilans(oblicz);
          }}
        >
          <button
            type="submit"
            style={{
              marginTop: 5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: isHovered2 ? "salmon" : "darksalmon",
              color: "white",
              fontFamily: "monospace",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            Bilans
          </button>
        </form>
      )}
    </div>
  );
};
