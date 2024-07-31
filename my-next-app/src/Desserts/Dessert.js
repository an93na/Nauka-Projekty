import React from 'react'

export const Dessert = (props) => {
  const { tekst, tekst2, cena, cake } = props
  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}>
      <img src={cake} alt="cake" style={{width: '230px', height: '230px', borderRadius: '10px'}}/>
      <button>Add to Card</button>
      <p>{tekst}</p>
      <h5>{tekst2}</h5>
      <h5 style={{ color: 'red' }}>{cena}</h5>
    </div>
  )
}
