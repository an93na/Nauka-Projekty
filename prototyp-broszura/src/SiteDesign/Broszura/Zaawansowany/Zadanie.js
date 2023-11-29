import React from "react";

export const Zadnie = () => {
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
          <input type="radio" name="pyt1" id="1a" />
          Lorem ipsum dolor sit amet.
        </label>
        <label>
          <input type="radio" name="pyt1" id="1b" />
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </label>
        <label>
          <input type="radio" name="pyt1" id="1c" />
          Lorem, ipsum dolor.
        </label>
        <p style={{ marginBottom: 2, marginTop: 10 }}>
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input type="radio" name="pyt2" id="1a" />
          Lorem ipsum dolor sit amet.
        </label>
        <label>
          <input type="radio" name="pyt2" id="1b" />
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </label>
        <label>
          <input type="radio" name="pyt2" id="1c" />
          Lorem, ipsum dolor.
        </label>
        <p style={{ marginBottom: 2, marginTop: 10 }}>
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input type="radio" name="pyt3" id="1a" />
          Lorem ipsum dolor sit amet.
        </label>
        <label>
          <input type="radio" name="pyt3" id="1b" />
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </label>
        <label>
          <input type="radio" name="pyt3" id="1c" />
          Lorem, ipsum dolor.
        </label>
        <p style={{ marginBottom: 2, marginTop: 10 }}>
          4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
        </p>
        <label>
          <input type="radio" name="pyt4" id="1a" />
          Lorem ipsum dolor sit amet.
        </label>
        <label>
          <input type="radio" name="pyt4" id="1b" />
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </label>
        <label>
          <input type="radio" name="pyt4" id="1c" />
          Lorem, ipsum dolor.
        </label>
        <button style={{ marginTop: "20px", backgroundColor: "green" }}>
          Zatwierdź
        </button>
      </form>
    </div>
  );
};
