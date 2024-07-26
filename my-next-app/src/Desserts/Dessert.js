import React from 'react'

export const Dessert = (props) => {
  const { tekst, setTekst, tekst2, setTekst2, cena, setCena } = props
  return (
    <div style={{padding: '10px'}}>
      <img src="" alt="" />
      <button>Add to Card</button>
      <p>{tekst}</p>
      <h5>{tekst2}</h5>
      <h5>{cena}</h5>
    </div>
  )
}
