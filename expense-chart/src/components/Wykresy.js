import React, { useState } from "react";
import { Wykres } from "./Wykres";
import { Podsumowanie } from "./Podsumowanie";

export const Wykresy = (props) => {
  const [etykieta, setEtykieta] = useState(false);
  const [etykieta1, setEtykieta1] = useState(false);
  const [etykieta2, setEtykieta2] = useState(false);
  const [etykieta3, setEtykieta3] = useState(false);
  const [etykieta4, setEtykieta4] = useState(false);
  const [etykieta5, setEtykieta5] = useState(false);
  const [etykieta6, setEtykieta6] = useState(false);
  const { pon, wt, sr, czw, pt, sob, ndz, sumawydatkow, setSumaWydatkow } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "auto",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Wykres
          color={"red"}
          wys={Number(pon.wydatek)}
          day={pon.day}
          etykieta={etykieta}
          setEtykieta={setEtykieta}
        />
        <Wykres
          color={"red"}
          wys={Number(wt.wydatek)}
          day={wt.day}
          etykieta={etykieta1}
          setEtykieta={setEtykieta1}
        />
        <Wykres
          color={"blue"}
          wys={Number(sr.wydatek)}
          day={sr.day}
          etykieta={etykieta2}
          setEtykieta={setEtykieta2}
        />
        <Wykres
          color={"red"}
          wys={Number(czw.wydatek)}
          day={czw.day}
          etykieta={etykieta3}
          setEtykieta={setEtykieta3}
        />
        <Wykres
          color={"red"}
          wys={Number(pt.wydatek)}
          day={pt.day}
          etykieta={etykieta4}
          setEtykieta={setEtykieta4}
        />
        <Wykres
          color={"red"}
          wys={Number(sob.wydatek)}
          day={sob.day}
          etykieta={etykieta5}
          setEtykieta={setEtykieta5}
        />
        <Wykres
          color={"red"}
          wys={Number(ndz.wydatek)}
          day={ndz.day}
          etykieta={etykieta6}
          setEtykieta={setEtykieta6}
        />
      </div>
      <Podsumowanie         pon={pon}
        wt={wt}
        sr={sr}
        czw={czw}
        pt={pt}
        sob={sob}
        ndz={ndz}
        sumawydatkow={sumawydatkow}
        setSumaWydatkow={setSumaWydatkow}/>
    </div>
  );
};
