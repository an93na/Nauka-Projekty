import React from 'react'
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
  return (
    <div>
      <h3>
        Desserts
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake1} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake2} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake3} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake4} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake5} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake6} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake7} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake8} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake9} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake10} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake11} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake12} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake13} />
          <Dessert tekst={'Waffle'} tekst2={'Waffle with Berries'} cena={'$6.50'} cake={cake14} />
        </div>
      </div>
    </div>
  )
}
