import React, { useState } from "react";
import { Wykresy } from "./Wykresy";

export const Srodek = () => {
  const [day, setDay] = useState("");
  const [wydatek, setWydatek] = useState("");
  const [wydatekDnia, setWydatekDnia] = useState([]);
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
            const suma = {day , wydatek}
            console.log(suma);
          }}
        >
          <div style={{display: 'flex', gap:5}}>
            <input
              type="text"
              name=""
              id=""
              placeholder="wydatek danego dnia"
              value={wydatek}
              onChange={(e) => setWydatek(e.target.value)}
            />
            <select
              name=""
              id=""
              value={day}
              onChange={(e) => setDay(e.target.value)}
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
            <button type="submit">Dodaj</button>
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
      <Wykresy />
    </div>
  );
};
