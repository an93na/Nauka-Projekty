import React, { useState } from 'react'
import { addProductsToBasket, notEmptyBasket, removeProduct, selectDessert, selectIsAnyInBasket, selectPrice, selectProductsInBasket, selectShowStateBasket, showStateBasket, sumProductInBasket } from '../slice/DessertSlice'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import { Podsumowanie } from './Podsumowanie';

export const Basket = () => {
  const numberOfProducts = useSelector(selectDessert);
  const isAnyInBasket = useSelector(selectIsAnyInBasket);
  const showNowStateBasket = useSelector(selectShowStateBasket);
  const products = useSelector(selectProductsInBasket);
  const dispatch = useDispatch();
  const ileWkoszyku = useSelector(sumProductInBasket);
  const kosztCalkowity = useSelector(selectPrice)
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  const onCliceed = () => {
    dispatch(showStateBasket());
  }

  // const podsumowanieZakupow = Math.round(kosztCalkowity* 100) / 100
  const podsumowanieZakupow = kosztCalkowity.toFixed(2)
  const produktCena = (a, b) => (a * b).toFixed(2)

  const handleShowSummary = () => setShowSummaryModal(true);
  const handleCloseSummary = () => setShowSummaryModal(false);

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
                <td>{product.quantity}x <p>{product.cena}zł</p></td>
                <td>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
                    <button style={{ borderRadius: '50%', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', fontWeight: 'bold', border: '1px solid green', lineHeight: '10px', textAlign: 'center', color: 'white' }} onClick={() => dispatch(addProductsToBasket(product))}>+</button>
                    <button style={{ borderRadius: '50%', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', color: 'white', fontWeight: 'bold', border: '1px solid red', lineHeight: '10px', textAlign: 'center' }} onClick={() => dispatch(removeProduct(product.id))}>-</button>
                  </div>
                </td>
                <td><img src={product.cake} alt={product.id} style={{ width: '50%', height: '50%', borderRadius: '10px' }} /></td>
                <td>{product.tekst}</td>
                <td>{produktCena(product.cena, product.quantity)}zł</td>
                {/* <td><button onClick={() => dispatch(removeProduct(product.id))}>Usuń</button></td> */}
              </tr>
            )}
            <tr>
              <td></td>
              <td>Suma:</td>
              <td></td>
              <td><h6 style={{ margin: 1 }}>{podsumowanieZakupow}zł</h6></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="danger" onClick={handleShowSummary}>Złóż zamówienie</Button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table> : <p></p>}
        <Modal show={showSummaryModal} onHide={handleCloseSummary}>
            <Modal.Header closeButton>
            <Modal.Title>Posumowanie zamówienia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table class="table table-striped">
              {products.map((product) =>
              <tr key={product.id}>
                <td>{product.quantity}x <p>{product.cena}zł</p></td>
                <td><img src={product.cake} alt={product.id} style={{ width: '50%', height: '50%', borderRadius: '10px' }} /></td>
                <td>{product.tekst}</td>
                <td>{produktCena(product.cena, product.quantity)}zł</td>
                {/* <td><button onClick={() => dispatch(removeProduct(product.id))}>Usuń</button></td> */}
              </tr>
            )}
            <tr>
              <td>Liczba produktów:</td>
              <td>{ileWkoszyku}</td>
              <td>Suma:</td>
              <td><h6 style={{ margin: 1 }}>{podsumowanieZakupow}zł</h6></td>
            </tr>
              </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleCloseSummary}>Zamknij</Button>
              <Button variant='primary' onClick={() => {}}>Potwierdż zamowienie</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
