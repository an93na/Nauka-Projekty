import React from "react";
import olowek from "../Obrazki/iconmonstr-pencil-lined-240 (1).png";
import serce from "../Obrazki/iconmonstr-heart-plus-lined-240.png";

export const Przykład = () => {
  return (
    <div>
      <h5>Przykład</h5>
      <div>
        <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />
      </div>
      <img src={olowek} alt="olowek" style={{ width: 50, height: 50 }} />
      <img src={olowek} alt="olowek" style={{ width: 50, height: 50 }} />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eum?
        Cupiditate quod maiores eius commodi voluptatum dolor quia atque
        accusantium, similique fugiat inventore magnam ipsam autem saepe culpa
        earum tempora.
      </span>
      <div>
        <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />
      </div>
      <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />
      <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />
      <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />{" "}
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, labore.
      </span>
      <div>
        <img src={olowek} alt="olowek" style={{ width: 50, height: 50 }} />
      </div>
      <img src={olowek} alt="olowek" style={{ width: 50, height: 50 }} />
      <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />
      <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />{" "}
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, labore.
      </span>
      <div>
        <img src={serce} alt="serce" style={{ width: 50, height: 50 }} />
      </div>
    </div>
  );
};
