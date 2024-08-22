import React from 'react'
import { selectDessert, selectIsAnyInBasket } from '../slice/DessertSlice'
import { useSelector } from 'react-redux'
import basketIcon from '../assets/basket2.png'

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert)
  const isAnyInBasket = useSelector(selectIsAnyInBasket)
  return (
    <div>
      <button style={{position: 'relative'}}>
      <img src={basketIcon} alt="koszyk" />
      <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '15px', height: '15px', position: 'absolute', left: '50%', top: '30%' }}>
        <p style={{ fontSize: '10px', textAlign: 'center', fontWeight: 'bolder' }}>{numberOfProducts}</p>
      </div>
      </button>
      {isAnyInBasket ? <p>tak</p> : <></>}
    </div>
  )
}
