import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addProductsToBasket, addToBasket, notEmptyBasket, selectProductsInBasket } from '../slice/DessertSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Dessert = (props) => {
  const { tekst, tekst2, cena, cake, id } = props
  const dispatch = useDispatch()
  const productsInBasket = useSelector(selectProductsInBasket)
  const addToCardFunkcjon = () => {
    dispatch(addToBasket())
    dispatch(notEmptyBasket())
    const lista = { tekst, tekst2, cena, cake, id }
    dispatch(addProductsToBasket(lista))
  }
  console.log(productsInBasket)
  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }} key={id}>
      <img src={cake} alt="cake" style={{ width: '100%', height: '80%', borderRadius: '10px' }} />
      <button onClick={addToCardFunkcjon}
        style={{ width: '75%', borderRadius: '50px', color: 'gray', backgroundColor: 'white', fontWeight: 'bold', border: '1px solid gray', position: 'absolute', bottom: '35%' }}>
        <ShoppingCartIcon style={{ color: 'red', width: '15%' }} />
        Add to Card
      </button>
      <p style={{ marginBottom: '0px', marginTop: '45px' }}>{tekst}</p>
      <h5 style={{ marginTop: '5px', marginBottom: '0px' }}>{tekst2}</h5>
      <h5 style={{ color: 'red', marginTop: '5px' }}>{cena}</h5>
    </div>
  )
}
