import React from 'react'
import classes from '../style/StyleBill.module.css'

export const RightSide = (props) => {
  const { numberOfPeople, procent, bill, setBill, setNumberOfPeople, setProcent, setWlasna, setCustmValue } = props

  const totalAmount = bill * procent;
  const totalBill = bill + totalAmount;
  const people = parseInt(numberOfPeople);
  const totalBillPerson = totalBill / people;
  const totalAmountPerson = totalAmount / people;
  const resetState = () => {
    setBill(0);
    setNumberOfPeople('');
    setProcent(0);
    setWlasna(false);
    setCustmValue(false)
  }

  return (
    <div className={classes.rightSide}>
      <div className={classes.rightKolum1}>
        <div className={classes.divCos}>
          <h6 className={classes.naglowekBezMargin}>Tip Amount</h6>
          <p className={classes.paragraf}>/person</p>
        </div>
        <div className={classes.divCos}>
          <h2 style={{ color: 'aquamarine' }}>$ {totalAmount}</h2>
          <h6 style={{ color: 'aquamarine' }}>$ {totalAmountPerson}</h6>
        </div>
      </div>
      <div className={classes.rightKolum1}>
        <div className={classes.divCos}>
          <h6 className={classes.naglowekBezMargin}>Total</h6>
          <p className={classes.paragraf}>/person</p>
        </div>
        <div className={classes.divCos}>
          <h2 style={{ color: 'aquamarine' }} >$ {totalBill}</h2>
          <h6 style={{ color: 'aquamarine' }} >$ {totalBillPerson}</h6>
        </div>

      </div>
      <button className={classes.buttonRight} onClick={() => { resetState() }}>RESET</button>
    </div>
  )
}
