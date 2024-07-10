import React, { useState } from 'react'
import classes from '../style/StyleBill.module.css'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

export const BillTotal = () => {
  const [bill, setBill] = useState(0);
  const [procent, setProcent] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [wlasna, setWlasna] = useState(false);
  const [custmValue, setCustmValue] = useState('');

  return (
    <article className={classes.home}>
      <div className={classes.billWhite}>
        <div><LeftSide numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} procent={procent} setProcent={setProcent} bill={bill} setBill={setBill} wlasna={wlasna} setWlasna={setWlasna} custmValue={custmValue} setCustmValue={setCustmValue} /></div>
        <div><RightSide numberOfPeople={numberOfPeople} procent={procent} bill={bill} setNumberOfPeople={setNumberOfPeople} setProcent={setProcent} setBill={setBill} wlasna={wlasna} setWlasna={setWlasna} custmValue={custmValue} setCustmValue={setCustmValue} /></div>
      </div>
    </article>
  )
}
