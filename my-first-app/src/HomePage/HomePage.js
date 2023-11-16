import React, { useState } from "react";
import CAT from "./assets/cacek.jpg";
import DOG from "./assets/gacek.jpg";
import BOTH from "./assets/mapa.png";

export const HomePage = () => {
  const [read, setRead] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [animal, setAnimal] = useState("kot");
  const artykul = "Lorem ipsum dolor sit amet.";
  const artylulLong =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid est harum, dolore, minima laborum dolorum omnis inventore ipsam iste libero esse molestiae saepe doloribus consequuntur animi mollitia eius? Modi, deleniti. Harum quasi sed dolore minus nobis ducimus accusamus maxime est. Nam sit consequuntur quod. Consequuntur, sequi. Dignissimos, voluptates omnis? Placeat quidem a dignissimos cumque reiciendis quibusdam adipisci eius modi facere.";

  const handleChange = (event) => setAnimal(event.target.value);
  return (
    <article>
      <h3>HomePage</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem
        officiis quis! Iusto, hic, saepe sunt maxime nesciunt maiores quasi qui
        quisquam amet tempora iure distinctio, harum ipsa molestiae! Nemo.
      </p>
      <select
        name=""
        id=""
        value={read}
        onChange={(e) => setRead(e.target.value)}
      >
        <option value="" hidden>
          choose
        </option>
        <option value="less">Read less</option>
        <option value="more">Read more</option>
      </select>
      {read === "less" && <p>{artykul}</p>}
      {read === "more" && <p>{artylulLong}</p>}
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prevState) => !prevState)}
        />
        {isChecked ? "Read less" : "Read more"}
      </label>
      {isChecked ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
          asperiores magni? Laborum assumenda distinctio ratione mollitia.
          Eaque, obcaecati. Voluptatum, nobis tenetur sint veritatis quas nisi
          quis in corporis eligendi vero.
        </p>
      ) : (
        <p>Lorem ipsum dolor sit amet.</p>
      )}
      <label>
        <input
          type="radio"
          name="animal"
          id=""
          value="kot"
          onChange={handleChange}
          checked={animal === "kot"}
        />
        kot
      </label>
      <label>
        <input
          type="radio"
          name="animal"
          id=""
          value="pies"
          onChange={handleChange}
          checked={animal === "pies"}
        />
        pies
      </label>
      <label>
        <input
          type="radio"
          name="animal"
          id=""
          value="both"
          onChange={handleChange}
          checked={animal === "both"}
        />
        kot i pies
      </label>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {(animal === "kot" || animal === "both") && (
          <img
            style={{
              width: "200px",
              border: "1px solid white",
              borderRadius: 10,
            }}
            src={CAT}
            alt="kot"
          />
        )}
        {(animal === "pies" || animal === "both") && (
          <img
            style={{
              width: "200px",
              border: "1px solid white",
              borderRadius: 10,
            }}
            src={DOG}
            alt="pies"
          />
        )}
        {animal === "both" && (
          <img
            style={{
              width: "200px",
              border: "1px solid white",
              borderRadius: 10,
            }}
            src={BOTH}
            alt="both"
          />
        )}
      </div>
    </article>
  );
};
