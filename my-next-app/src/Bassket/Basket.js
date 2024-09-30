import React from 'react'
import { selectDessert, selectIsAnyInBasket, selectProductsInBasket, selectShowStateBasket, showStateBasket } from '../slice/DessertSlice'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cake from '../assets/cake.jpg'
import cake1 from '../assets/cake1.jpg'
import cake2 from '../assets/cake2.jpg'
import cake3 from '../assets/cake3.jpg'
import cake4 from '../assets/cake4.jpg'
import cake5 from '../assets/cake5.jpg'
import cake6 from '../assets/cake6.jpg'
import cake7 from '../assets/cake7.jpg'
import cake8 from '../assets/cake8.jpg'
import cake9 from '../assets/cake9.jpg'
import cake10 from '../assets/cake10.jpg'
import cake11 from '../assets/cake11.jpg'
import cake12 from '../assets/cake12.jpg'
import cake13 from '../assets/cake13.jpg'
import cake14 from '../assets/cake14.jpg'
import cake15 from '../assets/cake15.jpg'

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert);
  const isAnyInBasket = useSelector(selectIsAnyInBasket);
  const showNowStateBasket = useSelector(selectShowStateBasket);
  const products = useSelector(selectProductsInBasket);
  const dispatch = useDispatch();

  const images = {
    0: cake,
    1: cake1,
    2: cake2,
    3: cake3,
    4: cake4,
    5: cake5,
    6: cake6,
    7: cake7,
    8: cake8,
    9: cake9,
    10: cake10,
    11: cake11,
    12: cake12,
    13: cake13,
    14: cake14,
    15: cake15
  }
  const zdjecie = (a) => {
    return images[a] || cake
  }
  const onCliceed = () => {
    dispatch(showStateBasket());
    console.log(showNowStateBasket);
  }
  console.log(products)
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
                <td><img src={product.cake} alt={product.id} style={{ width: '50%', height: '50%', borderRadius: '10px' }} /></td>
                <td>{product.tekst}</td>
                <td>{product.cena}</td>
              </tr>
            )}
          </tbody>
        </table> : <p></p>}
    </div>
  )
}
