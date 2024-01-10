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
  const { pon, wt, sr, czw, pt, sob, ndz } = props;

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
          wys={20}
          day={"mon"}
          etykieta={etykieta}
          setEtykieta={setEtykieta}
        />
        <Wykres
          color={"red"}
          wys={32}
          day={"tue"}
          etykieta={etykieta1}
          setEtykieta={setEtykieta1}
        />
        <Wykres
          color={"blue"}
          wys={52}
          day={"wed"}
          etykieta={etykieta2}
          setEtykieta={setEtykieta2}
        />
        <Wykres
          color={"red"}
          wys={31}
          day={"thu"}
          etykieta={etykieta3}
          setEtykieta={setEtykieta3}
        />
        <Wykres
          color={"red"}
          wys={23}
          day={"fri"}
          etykieta={etykieta4}
          setEtykieta={setEtykieta4}
        />
        <Wykres
          color={"red"}
          wys={45}
          day={"sat"}
          etykieta={etykieta5}
          setEtykieta={setEtykieta5}
        />
        <Wykres
          color={"red"}
          wys={25}
          day={"sun"}
          etykieta={etykieta6}
          setEtykieta={setEtykieta6}
        />
      </div>
      <Podsumowanie suma={478.33} />
    </div>
  );
};
