import React, { useState } from "react";
import schemat from "../Obrazki/Zrzut ekranu 2023-12-05 192813.png";
import { useSelector, useDispatch } from "react-redux";
import { addPoints, selectCounterValue } from "../counterSlice";

export const Zadnie = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [resultOne, setResultOne] = useState("");
  const [resultTwo, setResultTwo] = useState("");
  const [resultThree, setResultThree] = useState("");
  const [resultFour, setResultFour] = useState("");
  const [klik, setKlik] = useState(false);
  
  const selectorPkt = useSelector(selectCounterValue);
  const dispatch = useDispatch();

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

  const sumaPkt =
    podliczPkt(one, "a") +
    podliczPkt(two, "b") +
    podliczPkt(three, "c") +
    podliczPkt(four, "c");

  const napisz = () => {
    if(sumaPkt <= 1 ){
      return <h4>Musisz jeszcze trochę popracować.</h4>
    }
    else if(sumaPkt <=2 ){
      return <h4>Poszło Ci całkiem nieźle!</h4>
    }
    else if(sumaPkt > 2 ){
      return <h4>Brawo świetny wynik!</h4>
    }
  }
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
              setKlik(true);
              dispatch(addPoints(sumaPkt));
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
            {klik ? (
              <div>
                <h4>Twój wynik to: {selectorPkt}/4pkt</h4>
                {napisz()}
              </div>
            ) : (
              <button style={{ marginTop: "20px", backgroundColor: "red" }}>
                Zatwierdź
              </button>
            )}
          </form>
        </div>
          <img
            src={schemat}
            alt="cat"
            style={{ height: "760px", width: "493px" }}
          />
      </div>
    </div>
  );
};
