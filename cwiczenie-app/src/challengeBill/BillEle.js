import React from 'react'
import classes from '../style/StyleBill.module.css'

export const BillEle = (props) => {
  const {bill, setBill} = props
  return (
    <div className={classes.billEle}>
      <h6>Bill</h6>
      <div>
        <input type="text" className={classes.inputEle} />
      </div>
    </div>
  )
}
