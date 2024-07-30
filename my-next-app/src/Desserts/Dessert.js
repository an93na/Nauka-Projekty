import React from 'react'

export const Dessert = (props) => {
  const { tekst, tekst2, cena, cake } = props
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
