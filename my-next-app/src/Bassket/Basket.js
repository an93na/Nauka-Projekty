import React from 'react'
import { addProductsToBasket, notEmptyBasket, removeProduct, selectDessert, selectIsAnyInBasket, selectPrice, selectProductsInBasket, selectShowStateBasket, showStateBasket, sumProductInBasket } from '../slice/DessertSlice'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert);
  const isAnyInBasket = useSelector(selectIsAnyInBasket);
  const showNowStateBasket = useSelector(selectShowStateBasket);
  const products = useSelector(selectProductsInBasket);
  const dispatch = useDispatch();
  const ileWkoszyku = useSelector(sumProductInBasket);
  const kosztCalkowity = useSelector(selectPrice)
  
  const onCliceed = () => {
    dispatch(showStateBasket());
  }

  // const podsumowanieZakupow = Math.round(kosztCalkowity* 100) / 100
  const podsumowanieZakupow = kosztCalkowity.toFixed(2)

  const addProduct = () => {}

  return (
    <div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
        <ShoppingCartIcon style={{ color: 'white', margin: '0 10px', cursor: 'pointer' }} onClick={onCliceed} />
        <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '15px', height: '15px', position: 'absolute', right: '10px' }}>
          <p style={{ fontSize: '10px', textAlign: 'center', fontWeight: 'bolder' }}>{ileWkoszyku}</p>
        </div>
      </div>
      {showNowStateBasket ?
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>product name</th>
              <th>price</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>
              <tr key={product.id}>
                <td>{product.quantity}x</td>
                <td>
                  <div style={{display: 'flex', flexDirection: 'row', gap: '3px'}}>
                  <button style={{borderRadius: '50%', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', color: 'white', fontWeight: 'bold', border: '1px solid green', lineHeight: '10px', textAlign: 'center'}} onClick={() => dispatch(addProductsToBasket(product))}>+</button>
                  <button style={{borderRadius: '50%', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', color: 'white', fontWeight: 'bold', border: '1px solid red', lineHeight: '10px', textAlign: 'center'}} onClick={() => dispatch(removeProduct(product.id))}>-</button>
                </div>
                  </td>
                <td><img src={product.cake} alt={product.id} style={{ width: '50%', height: '50%', borderRadius: '10px' }} /></td>
                <td>{product.tekst}</td>
                <td>{product.cena}</td>
                {/* <td><button onClick={() => dispatch(removeProduct(product.id))}>Usuń</button></td> */}
              </tr>
            )}
            <tr>
              <td></td>
              <td>Suma:</td>
              <td></td>
              <td><h6 style={{margin: 1}}>{podsumowanieZakupow}zł</h6></td>
              <td></td>
              </tr>
          </tbody>
        </table> : <p></p>}
    </div>
  )
}
