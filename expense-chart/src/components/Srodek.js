import React, { useState } from "react";
import { Wykresy } from "./Wykresy";

export const Srodek = () => {
  const [day, setDay] = useState("");
  const [wydatek, setWydatek] = useState("");
  const [pon, setPon] = useState({});
  const [wto, setWto] = useState({});
  const [srod, setSrod] = useState({});
  const [czw, setCzw] = useState({});
  const [pt, setPt] = useState({});
  const [sob, setSob] = useState({});
  const [niedz, setNiedz] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [sumawydatkow, setSumaWydatkow] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // console.log(sumawydatkow)
  return (
    <div
    style={{
      backgroundColor: "white",
        marginTop: "10px",
        padding: "20px",
        borderRadius: "10px",
        width: "350px",
      }}
    >
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const suma = { day, wydatek };
            if (day === "mon") {
              setPon(suma);
            }
            if (day === "tue") {
              setWto(suma);
            }
            if (day === "wed") {
              setSrod(suma);
            }
            if (day === "thu") {
              setCzw(suma);
            }
            if (day === "fri") {
              setPt(suma);
            }
            if (day === "sat") {
              setSob(suma);
            }
            if (day === "sun") {
              setNiedz(suma);
            }
            setDay("");
            setWydatek("");
          }}
        >
          <div style={{ display: "flex", gap: 5 }}>
            <input
              type="text"
              name=""
              id=""
              placeholder="wydatek danego dnia"
              style={{
                marginTop: 5,
                padding: 5,
                borderRadius: 5,
                fontFamily: "monospace",
              }}
              value={wydatek}
              onChange={(e) => setWydatek(e.target.value)}
              required
            />
            <select
              name=""
              id=""
              style={{
                marginTop: 5,
                padding: 5,
                borderRadius: 5,
                fontFamily: "monospace",
              }}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              <option value="" hidden>
                wybierz dzień
              </option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
            <button
              type="submit"
              style={{
                marginTop: 5,
                padding: 5,
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
              Dodaj
            </button>
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          Spending - Last 7 days
        </h3>
      </div>
      <Wykresy
        pon={pon}
        wt={wto}
        sr={srod}
        czw={czw}
        pt={pt}
        sob={sob}
        ndz={niedz}
        sumawydatkow={sumawydatkow}
        setSumaWydatkow={setSumaWydatkow}
      />
    </div>
  );
};
