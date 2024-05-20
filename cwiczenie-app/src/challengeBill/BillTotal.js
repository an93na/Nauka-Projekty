import React, { useState } from 'react'
import classes from '../style/StyleBill.module.css'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

export const BillTotal = () => {
  const [bill, setBill] = useState(0);
  const [procent, setProcent] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  return (
    <article className={classes.home}>
        <div className={classes.billWhite}>
            <div><LeftSide/></div>
            <div><RightSide/></div>
        </div>
    </article>
  )
}
