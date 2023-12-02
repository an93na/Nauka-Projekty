import React, { useState } from "react";
import { Podstawowy } from "./Podstawowy/Podstawowy";
import { SrednioZaawansowany } from "./SrednioZaawansowany/SrednioZaawansowany";
import { Zaawansowany } from "./Zaawansowany/Zaawansowany";
import { OpisBtn } from "./Opis/OpisBtn";
import { PrzykladBtn } from "./Przyklad/PrzykladBtn";
import { Opis } from "./Opis/Opis";
import { Przykład } from "./Przyklad/Przykład";

export const BroszMore = () => {
  const [kliknieto, setKliknieto] = useState("");
  const [pokazOpis, setPokazOpis] = useState(false);
  const [pokazPrzyklad, setPokazPrzyklad] = useState(false);
  const [punkty, setPunkty] = useState(0);
  const styleBtn = {
    height: 80,
    backgroundColor: "palevioletred",
    padding: 15,
    textAlign: "center",
    borderRadius: "10px",
    border: "1px solid white",
    fontWeight: "bold",
    margin: 0,
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
          {pokazOpis === true && <Opis />}
          {pokazPrzyklad === true && <Przykład />}
          <Podstawowy />
        </div>
      );
    } else if (kliknieto === "średni") {
      return (
        <div>
          <div style={{ display: "flex", gap: 20 }}>
            {cofnijPoziomy("blue")}
            {
              <OpisBtn
                color={"blue"}
                pokaz={pokazOpis}
                setPokaz={setPokazOpis}
              />
            }
            {
              <PrzykladBtn
                color={"blue"}
                pokaz={pokazPrzyklad}
                setPokaz={setPokazPrzyklad}
              />
            }
          </div>
          {pokazOpis === true && <Opis />}
          {pokazPrzyklad === true && <Przykład />}
          <SrednioZaawansowany />
        </div>
      );
    } else if (kliknieto === "zaawansowany") {
      return (
        <div>
          <div style={{ display: "flex", gap: 20 }}>
            {cofnijPoziomy("red")}
            {
              <OpisBtn
                color={"red"}
                pokaz={pokazOpis}
                setPokaz={setPokazOpis}
              />
            }
            {
              <PrzykladBtn
                color={"red"}
                pokaz={pokazPrzyklad}
                setPokaz={setPokazPrzyklad}
              />
            }
          </div>
          {pokazOpis === true && <Opis />}
          {pokazPrzyklad === true && <Przykład />}
          <Zaawansowany />
        </div>
      );
    }
    return poziom;
  };

  return <div>{wyswietl()}</div>;
};
