import React from 'react'
import shopping from '../assets/shopping.png'
import { addToBasket, notEmptyBasket } from '../slice/DessertSlice'
import { useDispatch } from 'react-redux'

export const Dessert = (props) => {
  const { tekst, tekst2, cena, cake } = props
  const dispatch = useDispatch()

  const addToCardFunkcjon = () => {
    dispatch(addToBasket())
    dispatch(notEmptyBasket())
  }
  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <img src={cake} alt="cake" style={{ width: '100%', height: '80%', borderRadius: '10px' }} />
      <button onClick={addToCardFunkcjon}
        style={{ width: '70%', borderRadius: '50px', color: 'gray', backgroundColor: 'white', fontWeight: 'bold', border: '1px solid gray', position: 'absolute', bottom: '35%' }}>
        <img src={shopping} alt="icon-basket" style={{ width: '12%', height: '10%', padding: '1px' }} />
        Add to Card
      </button>
      <p style={{ marginBottom: '0px', marginTop: '45px' }}>{tekst}</p>
      <h5 style={{ marginTop: '5px', marginBottom: '0px' }}>{tekst2}</h5>
      <h5 style={{ color: 'red', marginTop: '5px' }}>{cena}</h5>
    </div>
  )
}
