import React from 'react'
import classes from '../style/StyleBill.module.css'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

export const BillTotal = () => {
  return (
    <article className={classes.home}>
        <div className={classes.billWhite}>
            <div><LeftSide/></div>
            <div><RightSide/></div>
        </div>
    </article>
  )
}
