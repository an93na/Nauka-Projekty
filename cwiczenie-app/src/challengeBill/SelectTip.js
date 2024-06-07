import React, { useState } from 'react'
import classes from '../style/StyleBill.module.css'

export const SelectTip = (props) => {
  const { procent, setProcent } = props
  const [wlasna, setWlasna] = useState('')
  return (
    <div className={classes.billEle}>
      <h6>Select Tip %</h6>
      <div className={classes.divSel}>
        <button className={classes.buttonSel}>5%</button>
        <button className={classes.buttonSel}>10%</button>
        <button className={classes.buttonSel}>15%</button>
      </div>
      <div className={classes.divSel}>
        <button className={classes.buttonSel}>25%</button>
        <button className={classes.buttonSel}>50%</button>
        <button className={classes.buttonCus}>Custom</button>
      </div>
    </div>
  )
}
