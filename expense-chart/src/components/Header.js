import React, { useState } from "react";

export const Header = () => {
  const [balance, setBalance] = useState("");
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rebeccapurple",
        padding: "20px",
        borderRadius: "10px",
        width: "350px",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <form action="">
          <p style={{ color: "white", marginTop: 5, fontFamily: "monospace" }}>
            My balance
          </p>
          <input
            style={{
              borderRadius: 5,
              color: "red",
              fontWeight: "bold",
              padding: "5px",
            }}
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Wpisz swoje środki $"
          />
          <button
            type="submit"
            style={{
              marginTop: 5,
              padding: 10,
              borderRadius: 5,
              backgroundColor: "darksalmon",
              color: "white",
              border: "none",
            }}
          >
            Zatwierdź
          </button>
        </form>
      </div>
      <div style={{ padding: 10, display: "flex" }}>
        <div
          style={{
            width: "49px",
            height: "49px",
            border: "1px solid white",
            borderRadius: "50%",
            position: "relative",
            left: "25px",
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "black",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};
