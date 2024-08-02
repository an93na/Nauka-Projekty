import React from 'react'

export const Dessert = (props) => {
  const { tekst, tekst2, cena, cake } = props
  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <img src={cake} alt="cake" style={{width: '230px', height: '230px', borderRadius: '10px'}}/>
      <button style={{width: '180px', borderRadius: '50px', color: 'gray', backgroundColor: 'white', fontWeight: 'bold', border: '1px solid gray', position: 'absolute', bottom: '970px'}}>Add to Card</button>
      <p style={{marginBottom: '0px', marginTop: '45px'}}>{tekst}</p>
      <h5 style={{marginTop: '5px', marginBottom: '0px'}}>{tekst2}</h5>
      <h5 style={{ color: 'red', marginTop: '5px' }}>{cena}</h5>
    </div>
  )
}
