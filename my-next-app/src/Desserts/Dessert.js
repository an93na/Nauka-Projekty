import React from 'react'

export const Dessert = (props) => {
  const { tekst, setTekst } = props
  const { tekst2, setTekst2 } = props
  const { cena, setCena } = props
  return (
    <div>
      <img src="" alt="" />
      <button>Add to Card</button>
      <p>{tekst}</p>
      <h5>{tekst2}</h5>
      <h5>{tekst2}</h5>

    </div>
  )
}
