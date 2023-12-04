import React, { useState } from "react";
import cat from "../Obrazki/gacek.jpg";

export const Zadnie = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [resultOne, setResultOne] = useState("");
  const [resultTwo, setResultTwo] = useState("");
  const [resultThree, setResultThree] = useState("");
  const [resultFour, setResultFour] = useState("");
  const [punkty, setPunkty] = useState(0);

  const wynik = (value, odp) => {
    if (value === odp) {
      return <p>Gratulacje!</p>;
    }
    return <p>Niestety nie</p>;
  };

  const podliczPkt = (value, odp) => {
    if (value === odp) {
      return 1;
    }
    return 0;
  };

  return (
    <div>
      <h5>Zadanie</h5>
      <div style={{ display: "flex", gap: 30 }}>
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              setResultOne(wynik(one, "a"));
              setResultTwo(wynik(two, "b"));
              setResultThree(wynik(three, "c"));
              setResultFour(wynik(four, "c"));
              setPunkty(() => {});
            }}
          >
            <p style={{ marginBottom: 2, marginTop: 4 }}>
              1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              est?
            </p>
            <label>
              <input
                type="radio"
                name="pyt1"
                id="1a"
                value={"a"}
                onChange={(e) => setOne(e.target.value)}
                required
              />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input
                type="radio"
                name="pyt1"
                id="1b"
                value={"b"}
                onChange={(e) => setOne(e.target.value)}
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </label>
            <label>
              <input
                type="radio"
                name="pyt1"
                id="1c"
                value={"c"}
                onChange={(e) => setOne(e.target.value)}
              />
              Lorem, ipsum dolor.
            </label>
            {resultOne}
            <p style={{ marginBottom: 2, marginTop: 10 }}>
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              est?
            </p>
            <label>
              <input
                type="radio"
                name="pyt2"
                id="2a"
                value={"a"}
                onChange={(e) => setTwo(e.target.value)}
                required
              />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input
                type="radio"
                name="pyt2"
                id="2b"
                value={"b"}
                onChange={(e) => setTwo(e.target.value)}
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </label>
            <label>
              <input
                type="radio"
                name="pyt2"
                id="2c"
                value={"c"}
                onChange={(e) => setTwo(e.target.value)}
              />
              Lorem, ipsum dolor.
            </label>
            {resultTwo}
            <p style={{ marginBottom: 2, marginTop: 10 }}>
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              est?
            </p>
            <label>
              <input
                type="radio"
                name="pyt3"
                id="3a"
                value={"a"}
                onChange={(e) => setThree(e.target.value)}
                required
              />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input
                type="radio"
                name="pyt3"
                id="3b"
                value={"b"}
                onChange={(e) => setThree(e.target.value)}
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </label>
            <label>
              <input
                type="radio"
                name="pyt3"
                id="3c"
                value={"c"}
                onChange={(e) => setThree(e.target.value)}
              />
              Lorem, ipsum dolor.
            </label>
            {resultThree}
            <p style={{ marginBottom: 2, marginTop: 10 }}>
              4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              est?
            </p>
            <label>
              <input
                type="radio"
                name="pyt4"
                id="4a"
                value={"a"}
                onChange={(e) => setFour(e.target.value)}
                required
              />
              Lorem ipsum dolor sit amet.
            </label>
            <label>
              <input
                type="radio"
                name="pyt4"
                id="4b"
                value={"b"}
                onChange={(e) => setFour(e.target.value)}
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </label>
            <label>
              <input
                type="radio"
                name="pyt4"
                id="4c"
                value={"c"}
                onChange={(e) => setFour(e.target.value)}
              />
              Lorem, ipsum dolor.
            </label>
            {resultFour}
            <button style={{ marginTop: "20px", backgroundColor: "green" }}>
              Zatwierdź
            </button>
          </form>
        </div>
        <img src={cat} alt="cat" style={{ height: "760px", width: "493px" }} />
      </div>
      <p>{punkty}</p>
    </div>
  );
};
