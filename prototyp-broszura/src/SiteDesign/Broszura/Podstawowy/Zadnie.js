import React, { useState } from "react";

export const Zadnie = () => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  console.log(one);
  console.log("two", two);
  console.log("three", three);
  console.log("four", four);
  return (
    <div>
      <h5>Zadanie</h5>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
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
        <button style={{ marginTop: "20px", backgroundColor: "green" }}>
          Zatwierdź
        </button>
      </form>
    </div>
  );
};
