import React, { useState } from "react";

export const HomePage = () => {
  const [read, setRead] = useState('')
  return (
    <article>
      <h3>HomePage</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem officiis quis! Iusto, hic, saepe sunt maxime nesciunt maiores quasi qui quisquam amet tempora iure distinctio, harum ipsa molestiae! Nemo.</p>
      <select name="" id="" value={read} onChange={(e) => setRead(e.target.value)}>
        <option value="" hidden>choose</option>
        <option value="less">Read less</option>
        <option value="more">Read more</option>
      </select>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  );
};
