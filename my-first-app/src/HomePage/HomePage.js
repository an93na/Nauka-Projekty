import React, { useState } from "react";

export const HomePage = () => {
  const [read, setRead] = useState("");
  const artykul = "Lorem ipsum dolor sit amet.";
  const artylulLong =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid est harum, dolore, minima laborum dolorum omnis inventore ipsam iste libero esse molestiae saepe doloribus consequuntur animi mollitia eius? Modi, deleniti. Harum quasi sed dolore minus nobis ducimus accusamus maxime est. Nam sit consequuntur quod. Consequuntur, sequi. Dignissimos, voluptates omnis? Placeat quidem a dignissimos cumque reiciendis quibusdam adipisci eius modi facere.";
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
      <p></p>
    </article>
  );
};
