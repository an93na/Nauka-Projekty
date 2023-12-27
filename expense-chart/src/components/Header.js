import React, { useState } from "react";

export const Header = () => {
  const [balance, setBalance] = useState("");
  return (
    <div style={{display: 'flex', backgroundColor: "rebeccapurple",
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
          alignContent: 'center',
          justifyContent: 'space-between'
    }}>
      <div>
        <p style={{ color: "white", marginTop: 5, fontFamily: "monospace" }}>
          My balance
        </p>
        <p style={{ color: "white", fontWeight: "bold" }}>${balance}</p>
      </div>
    <div style={{padding: 10}}>
        <div style={{width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%'}}></div>
    </div>
    </div>
  );
};
