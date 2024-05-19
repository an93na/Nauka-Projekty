import React from 'react'
import classes from '../style/StyleBill.module.css'

export const BillEle = () => {
  return (
    <div className={classes.billEle}>
      <h6>Bill</h6>
      <div>
        <input type="text" />
      </div>
    </div>
  )
}
