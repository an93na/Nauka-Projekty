import React, { useState } from "react";
import { Podstawowy } from "./Podstawowy/Podstawowy";
import { SrednioZaawansowany } from "./SrednioZaawansowany/SrednioZaawansowany";
import { Zaawansowany } from "./Zaawansowany/Zaawansowany";

export const BroszMore = (props) => {
  const [kliknieto, setKliknieto] = useState("");
  const styleBtn = {
    width: 200,
    height: 150,
    backgroundColor: "palevioletred",
    padding: 20,
    textAlign: "center",
    borderRadius: "10px",
    border: "1px solid white",
    fontSize: 20,
    fontWeight: "bold",
  };
  const poziom = (
    <div>
      <h3 style={{ textAlign: "center" }}>Wybierz poziom:</h3>
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={styleBtn}
          value={kliknieto}
          onClick={() => setKliknieto("podstawowy")}
        >
          Podstawowy
        </button>
        <button
          style={styleBtn}
          value={kliknieto}
          onClick={() => setKliknieto("średni")}
        >
          Średnio Zaawansowany
        </button>
        <button
          style={styleBtn}
          value={kliknieto}
          onClick={() => setKliknieto("zaawansowany")}
        >
          Zaawansowany
        </button>
      </div>
    </div>
  );
  const cofnijPoziomy = (color) => (
    <button
      value={kliknieto}
      onClick={() => setKliknieto("")}
      style={{ backgroundColor: color }}
    >
      Zmień poziom
    </button>
  );
  const opis = (color) => (
    <button style={{ backgroundColor: color }}>Opis</button>
  );
  const przyklad = (color) => (
    <button style={{ backgroundColor: color }}>Przykład</button>
  );
  const wyswietl = () => {
    if (kliknieto === "podstawowy") {
      return (
        <div>
          <div style={{ display: "flex", gap: 20 }}>
            {cofnijPoziomy('green')}
            {opis("green")}
            {przyklad("green")}
          </div>
          <Podstawowy />
        </div>
      );
    } else if (kliknieto === "średni") {
      return (
        <div>
          {cofnijPoziomy}
          <SrednioZaawansowany />
        </div>
      );
    } else if (kliknieto === "zaawansowany") {
      return (
        <div>
          {cofnijPoziomy}
          <Zaawansowany />
        </div>
      );
    }
    return poziom;
  };

  return <div>{wyswietl()}</div>;
};
