import React from 'react'
import { selectDessert, selectIsAnyInBasket } from '../slice/DessertSlice'
import { useSelector } from 'react-redux'

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert)
  const isAnyInBasket = useSelector(selectIsAnyInBasket)
  return (
    <div style={{position:'relative'}}>
      <h3>
        Basket
      </h3>
      <div style={{backgroundColor: 'red', borderRadius: '50%', width: '15px', height: '15px', position: 'absolute', left: '50%'}}>
      <p style={{fontSize: '10px', textAlign: 'center', fontWeight: 'bolder'}}>{numberOfProducts}</p>
      </div>
      {isAnyInBasket ? <p>tak</p>: <></>}
    </div>
  )
}
