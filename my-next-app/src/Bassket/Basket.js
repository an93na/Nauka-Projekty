import React from 'react'
import { selectDessert } from '../slice/DessertSlice'
import { useSelector } from 'react-redux'

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert)
  return (
    <div>
      <h3>
        Basket
      </h3>
      <p>{numberOfProducts}</p>
    </div>
  )
}
