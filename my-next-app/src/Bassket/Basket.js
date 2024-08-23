import React from 'react'
import { selectDessert, selectIsAnyInBasket } from '../slice/DessertSlice'
import { useSelector } from 'react-redux'
import basketIcon from '../assets/basket2.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert)
  const isAnyInBasket = useSelector(selectIsAnyInBasket)
  return (
    <div>
      <div style={{position: 'relative'}}>
      <ShoppingCartIcon style={{ color: 'white', margin: '0 10px' }} onClick={()=>{}}/>
      <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '15px', height: '15px', position: 'absolute', left: '50%', top: '10%' }}>
        <p style={{ fontSize: '10px', textAlign: 'center', fontWeight: 'bolder' }}>{numberOfProducts}</p>
      </div>
      </div>
      {isAnyInBasket ? <p>tak</p> : <></>}
    </div>
  )
}
