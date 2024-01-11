import React, { useState } from "react";
import { Header } from "./Header";
import { Srodek } from "./Srodek";

export const MyBalance = () => {
  const [balance, setBalance] = useState("");
  const [myBalance, setMyBalance] = useState("");
  return (
    <div
      style={{ backgroundColor: "wheat", padding: "20px", borderRadius: 10 }}
    >
      <Header
        balance={balance}
        setBalance={setBalance}
        myBalance={myBalance}
        setMyBalance={setMyBalance}
      />
      <Srodek balance={balance} myBalance={myBalance} />
    </div>
  );
};
