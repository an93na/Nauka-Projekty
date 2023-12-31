import React from "react";
import kartki from "./iconmonstr-layer-multiple-lined-240.png";
import { Link } from "react-router-dom";

export const TopMenu = () => {
  return (
    <div
      style={{
        backgroundColor: "deepskyblue",
        padding: 10,
        margin: 5,
        marginTop: 10,
        borderRadius: 10,
      }}
    >
      <h3 style={{ marginLeft: 40, marginBottom: 20, color: "black" }}>
        Czytaj bo tego potrzebujesz
      </h3>
      <div
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: "40px",
          marginTop: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: 10,
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <img src={kartki} alt="kartki" style={{ width: "20px" }} />
          <Link
            to="/"
            style={{ textAlign: "center", margin: "auto", color: "black" }}
          >
            home
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: 10,
            borderRadius: "10px",
          }}
        >
          <img src={kartki} alt="kartki" style={{ width: "20px" }} />
          <Link
            to="books"
            style={{ textAlign: "center", margin: "auto", color: "black" }}
          >
            books
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: 10,
            borderRadius: "10px",
          }}
        >
          <img src={kartki} alt="kartki" style={{ width: "20px" }} />
          <Link
            to="broszury"
            style={{ textAlign: "center", margin: "auto", color: "black" }}
          >
            broszury
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: 10,
            borderRadius: "10px",
          }}
        >
          <img src={kartki} alt="kartki" style={{ width: "20px" }} />
          <Link
            to="czasopisma"
            style={{ textAlign: "center", margin: "auto", color: "black" }}
          >
            czasopisma
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: 10,
            borderRadius: "10px",
          }}
        >
          <img src={kartki} alt="kartki" style={{ width: "20px" }} />
          <Link
            to="kartki"
            style={{ textAlign: "center", margin: "auto", color: "black" }}
          >
            Posty
          </Link>
        </div>
      </div>
    </div>
  );
};
