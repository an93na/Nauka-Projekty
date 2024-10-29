import React from 'react'
import { selectPrice, selectProductsInBasket } from '../slice/DessertSlice'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap';

export const Podsumowanie = () => {
  const products = useSelector(selectProductsInBasket);
  const kosztCalkowity = useSelector(selectPrice)

  const podsumowanieZakupow = kosztCalkowity.toFixed(2);

  return (
    <div>
      <Button variant="danger">Primary Button</Button>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>product name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            <tr key={product.id}>
              <td>{product.quantity}x</td>
              <td><img src={product.cake} alt={product.id} style={{ width: '50%', height: '50%', borderRadius: '10px' }} /></td>
              <td>{product.tekst}</td>
              <td>{product.cena}</td>
            </tr>
          )}
          <tr>
            <td></td>
            <td>Suma:</td>
            <td></td>
            <td><h6 style={{ margin: 1 }}>{podsumowanieZakupow}zł</h6></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
