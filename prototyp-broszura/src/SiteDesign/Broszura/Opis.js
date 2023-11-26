import React from "react";
import olowek from './Obrazki/iconmonstr-pencil-lined-240 (1).png'
import serce from './Obrazki/iconmonstr-heart-plus-lined-240.png'

export const Opis = () => {
  return (
    <div>
      <h5>Opis</h5>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
        praesentium harum recusandae, asperiores reprehenderit dolores
        repudiandae optio aliquam hic nam. Rerum commodi, veritatis sunt facilis
        repellat labore tenetur quae atque! Fuga in, expedita quasi obcaecati
        cum maxime nesciunt, nostrum quia odio voluptatem illo eligendi mollitia
        tempore. Aperiam, similique, vitae quas sapiente perspiciatis corporis
        tempora perferendis optio quibusdam a molestiae ab?
      </p>
      <div style={{display: "flex", gap: 20}}>
        <img src={olowek} alt="olowek" style={{width:50, height: 50}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni quasi laudantium beatae harum fugiat.</p>
      </div>
      <div style={{display: "flex", gap: 20}}>
        <img src={serce} alt="serce" style={{width:50, height: 50}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni quasi laudantium beatae harum fugiat.</p>
      </div>
    </div>
  );
};
