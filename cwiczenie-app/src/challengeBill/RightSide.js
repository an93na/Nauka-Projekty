import React from 'react'
import classes from '../style/StyleBill.module.css'

export const RightSide = () => {
  return (
    <div className={classes.rightSide}>
      <div>
        <div>
          <h6>Tip Amount</h6>
          <p>/person</p>
        </div>
        <div>
          <h2>$ 0.00</h2>
        </div>
      </div>
      <div>
        <div>
          <h6>Total</h6>
          <p>/person</p>
        </div>
        <div>
          <h2>$ 0.00</h2>
        </div>
      </div>
      <button className={classes.buttonRight}>RESET</button>
    </div>
  )
}
