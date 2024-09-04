import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToBasket, notEmptyBasket } from '../slice/DessertSlice'
import { useDispatch } from 'react-redux'

export const Dessert = (props) => {
  const { tekst, tekst2, cena, cake } = props
  const [doKoszyka, setDokoszyka] = useState([])
  const dispatch = useDispatch()
  const [id, setId] = useState('');
  const [nazwa, setNazwa] = useState('');
  const [price, setPrice] = useState('')

  const obiektDoKoszyka = () => {
    setId(tekst)
    setNazwa(tekst2)
    setPrice(cena)
  }
  const addToCardFunkcjon = () => {
    dispatch(addToBasket())
    dispatch(notEmptyBasket())
    setDokoszyka(prev => ({...prev, obiektDoKoszyka}))
  }

  console.log(doKoszyka)
  return (
    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <img src={cake} alt="cake" style={{ width: '100%', height: '80%', borderRadius: '10px' }} />
      <button onClick={addToCardFunkcjon}
        style={{ width: '75%', borderRadius: '50px', color: 'gray', backgroundColor: 'white', fontWeight: 'bold', border: '1px solid gray', position: 'absolute', bottom: '35%' }}>
          <ShoppingCartIcon style={{color: 'red', width: '15%'}}/>
        Add to Card
      </button>
      <p style={{ marginBottom: '0px', marginTop: '45px' }}>{tekst}</p>
      <h5 style={{ marginTop: '5px', marginBottom: '0px' }}>{tekst2}</h5>
      <h5 style={{ color: 'red', marginTop: '5px' }}>{cena}</h5>
    </div>
  )
}
