import React, { useState } from "react";
import { Podstawowy } from "./Podstawowy/Podstawowy";
import { SrednioZaawansowany } from "./SrednioZaawansowany/SrednioZaawansowany";
import { Zaawansowany } from "./Zaawansowany/Zaawansowany";
import { OpisBtn } from "./OpisBtn";
import { PrzykladBtn } from "./PrzykladBtn";

export const BroszMore = (props) => {
  const [kliknieto, setKliknieto] = useState("");
  const [pokazOpis, setPokazOpis] = useState(false);
  const [pokazPrzyklad, setPokazPrzyklad] = useState(false);
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
  const wyswietl = () => {
    if (kliknieto === "podstawowy") {
      return (
        <div>
          <div style={{ display: "flex", gap: 20 }}>
            {cofnijPoziomy("green")}
            {
              <OpisBtn
                color={"green"}
                pokaz={pokazOpis}
                setPokaz={setPokazOpis}
              />
            }
            {
              <PrzykladBtn
                color={"green"}
                pokaz={pokazPrzyklad}
                setPokaz={setPokazPrzyklad}
              />
            }
          </div>
          {pokazOpis === true && <p>opis</p>}
          {pokazPrzyklad === true && <p>przyklad</p>}
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
