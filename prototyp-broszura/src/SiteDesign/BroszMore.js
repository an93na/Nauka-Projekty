import React, { useState } from "react";

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
  const poziom = <div>
        <h3>Wybierz poziom:</h3>
        <div style={{ display: "flex", gap: 20 }}>
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
  const wyswietl = () => {
    if (kliknieto === "podstawowy") {
        return <div>
            <button value={kliknieto} onClick={() => setKliknieto('')}>Cofnij</button>
        </div>
    } else if (kliknieto === "średni") {
        return <p>sr</p>
    } else if (kliknieto === "zaawansowany") {
        return <p>za</p>
    }
    return poziom;
  };

  return (
    <div>
      {wyswietl()}
    </div>
  );
};
