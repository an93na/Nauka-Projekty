import React, { useState } from "react";
import { Wykres } from "./Wykres";
import { Podsumowanie } from "./Podsumowanie";

export const Wykresy = () => {
  const [etykieta, setEtykieta] = useState(false)
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
        <Wykres color={"red"} wys={20} day={"mon"} etykieta={etykieta} setEtykieta={setEtykieta}/>
        <Wykres color={"red"} wys={32} day={"tue"} etykieta={etykieta} setEtykieta={setEtykieta}/>
        <Wykres color={"blue"} wys={52} day={"wed"} etykieta={etykieta} setEtykieta={setEtykieta}/>
        <Wykres color={"red"} wys={31} day={"thu"} />
        <Wykres color={"red"} wys={23} day={"fri"} />
        <Wykres color={"red"} wys={45} day={"sat"} />
        <Wykres color={"red"} wys={25} day={"sun"} />
      </div>
      <Podsumowanie suma={478.33} />
    </div>
  );
};
