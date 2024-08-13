import React from 'react'
import { selectDessert, selectIsAnyInBasket } from '../slice/DessertSlice'
import { useSelector } from 'react-redux'

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert)
  const isAnyInBasket = useSelector(selectIsAnyInBasket)
  return (
    <div>
      <h3>
        Basket
      </h3>
      <p>{numberOfProducts}</p>
      {isAnyInBasket ? <p>tak</p>: <></>}
    </div>
  )
}
