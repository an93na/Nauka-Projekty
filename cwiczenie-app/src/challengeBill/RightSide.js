import React from 'react'
import classes from '../style/StyleBill.module.css'

export const RightSide = () => {
  return (
    <div className={classes.rightSide}>
      <div className={classes.rightKolum}>
      <div className={classes.divCos}>
          <h6 className={classes.naglowekBezMargin}>Tip Amount</h6>
          <p className={classes.paragraf}>/person</p>
        </div>
        <div>
          <h2>$ 0.00</h2>
        </div>
      </div>
      <div className={classes.rightKolum}>
        <div className={classes.divCos}>
          <h6 className={classes.naglowekBezMargin}>Total</h6>
          <p className={classes.paragraf}>/person</p>
        </div>
        <div>
          <h2>$ 0.00</h2>
        </div>
      </div>
      <button className={classes.buttonRight}>RESET</button>
    </div>
  )
}
