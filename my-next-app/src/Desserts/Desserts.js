import React, { useEffect, useState } from 'react'
import { Dessert } from './Dessert'
import cake from '../assets/cake.jpg'
import cake1 from '../assets/cake1.jpg'
import cake2 from '../assets/cake2.jpg'
import cake3 from '../assets/cake3.jpg'
import cake4 from '../assets/cake4.jpg'
import cake5 from '../assets/cake5.jpg'
import cake6 from '../assets/cake6.jpg'
import cake7 from '../assets/cake7.jpg'
import cake8 from '../assets/cake8.jpg'
import cake9 from '../assets/cake9.jpg'
import cake10 from '../assets/cake10.jpg'
import cake11 from '../assets/cake11.jpg'
import cake12 from '../assets/cake12.jpg'
import cake13 from '../assets/cake13.jpg'
import cake14 from '../assets/cake14.jpg'
import cake15 from '../assets/cake15.jpg'

export const Desserts = () => {
  const [menu, SetMenu] = useState([])
  const [doKoszyka, setDokoszyka] = useState([])
  const getMenu = () => {
    // fetch("http://localhost:3010/menu").then((response) => response.json())
    //   .then((data) => {
    //     SetMenu(data);
    //   });
  }
  useEffect(() => {
    getMenu();
  }, []);
  console.log(doKoszyka)
  return (
    <div>
      <h3>
        Desserts
      </h3>
      <div>
        {menu.map((d) =>
          <div>
            <p>{d.name}</p>
            <p>{d.price}</p>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Cake'} tekst2={'Cake with Cherry'} cena={'$6.50'} cake={cake} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Pink Cake'} tekst2={'Cake with Pink Cream'} cena={'$6.50'} cake={cake1} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake2} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake3} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake4} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake5} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake6} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake7} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake8} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake9} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake10} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake11} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake12} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake13} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake14} doKoszyka={doKoszyka} setDokoszyka={setDokoszyka} />
        </div>
      </div>
    </div>
  )
}
