import React from 'react'
import { selectDessert, selectIsAnyInBasket, selectProductsInBasket, selectShowStateBasket, showStateBasket } from '../slice/DessertSlice'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert);
  const isAnyInBasket = useSelector(selectIsAnyInBasket);
  const showNowStateBasket = useSelector(selectShowStateBasket);
  const products = useSelector(selectProductsInBasket);
  const dispatch = useDispatch();

  const onCliceed = () => {
    dispatch(showStateBasket());
    console.log(showNowStateBasket);
  }
  return (
    <div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
        <ShoppingCartIcon style={{ color: 'white', margin: '0 10px', cursor: 'pointer' }} onClick={onCliceed} />
        <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '15px', height: '15px', position: 'absolute', right: '10px' }}>
          <p style={{ fontSize: '10px', textAlign: 'center', fontWeight: 'bolder' }}>{numberOfProducts}</p>
        </div>
      </div>
      {showNowStateBasket ?
        <table>
          <thead>
            <tr>
              <th></th>
              <th>product name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>
              <tr key={product.id}>
                <td>{product.img}</td>
                <td>{product.tekst}</td>
                <td>{product.cena}</td>
              </tr>
            )}
          </tbody>
        </table> : <p></p>}
    </div>
  )
}
