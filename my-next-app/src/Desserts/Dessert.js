import React from 'react'
import cake from '../assets/cake.jpg'

export const Dessert = (props) => {
  const { tekst, tekst2, cena } = props
  return (
    <div style={{ padding: '10px' }}>
      <img src={cake} alt="cake" />
      <button>Add to Card</button>
      <p>{tekst}</p>
      <h5>{tekst2}</h5>
      <h5 style={{ color: 'red' }}>{cena}</h5>
    </div>
  )
}
