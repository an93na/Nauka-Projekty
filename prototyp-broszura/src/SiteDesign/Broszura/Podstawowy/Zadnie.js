import React, { useState } from "react";

export const Zadnie = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [podsumowanieOne, setPodsumowanieOne] = useState(false);
  const [resultOne, setResultOne] = useState("");
  const [resultTwo, setResultTwo] = useState("");
  const [resultThree, setResultThree] = useState("");
  const [resultFour, setResultFour] = useState("");
  const wynik = (value, odp) => {
    if (value === odp) {
      return <p>Gratulacje!</p>;
    }
    return <p>Niestety nie</p>;
  };

  return (
    <div>
      <h5>Zadanie</h5>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setPodsumowanieOne(true);
          setResultOne(wynik(one, "a"));
        }}
      >
        <p style={{ marginBottom: 2, marginTop: 4 }}>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input
            type="radio"
            name="pyt1"
            id="1a"
            value={"a"}
            onChange={(e) => setOne(e.target.value)}
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
        {podsumowanieOne === true && one === "a" && (
          <p>"Your anwswer is good"</p>
        )}
        {podsumowanieOne === true && one !== "a" && (
          <p>"Your anwswer is not good"</p>
        )}
        {resultOne}
        <p style={{ marginBottom: 2, marginTop: 10 }}>
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input
            type="radio"
            name="pyt2"
            id="2a"
            value={"a"}
            onChange={(e) => setTwo(e.target.value)}
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
        {podsumowanieOne === true && two === "a" && (
          <p>"Your anwswer is good"</p>
        )}
        {podsumowanieOne === true && two !== "a" && (
          <p>"Your anwswer is not good"</p>
        )}
        <p style={{ marginBottom: 2, marginTop: 10 }}>
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input
            type="radio"
            name="pyt3"
            id="3a"
            value={"a"}
            onChange={(e) => setThree(e.target.value)}
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
        {podsumowanieOne === true && three === "b" && (
          <p>"Your anwswer is good"</p>
        )}
        {podsumowanieOne === true && three !== "b" && (
          <p>"Your anwswer is not good"</p>
        )}
        <p style={{ marginBottom: 2, marginTop: 10 }}>
          4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input
            type="radio"
            name="pyt4"
            id="4a"
            value={"a"}
            onChange={(e) => setFour(e.target.value)}
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
        {podsumowanieOne === true && four === "c" && (
          <p>"Your anwswer is good"</p>
        )}
        {podsumowanieOne === true && four !== "c" && (
          <p>"Your anwswer is not good"</p>
        )}
        <button style={{ marginTop: "20px", backgroundColor: "green" }}>
          Zatwierdź
        </button>
        {podsumowanieOne === true && (
          <button
            onClick={() => {
              setOne("a");
              setTwo("a");
              setThree("a");
              setFour("a");
              setPodsumowanieOne(false);
              setResultOne("");
            }}
          >
            Wyczyść
          </button>
        )}
      </form>
    </div>
  );
};
