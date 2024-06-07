import React, { useState } from 'react'
import classes from '../style/StyleBill.module.css'

export const SelectTip = (props) => {
  const { procent, setProcent } = props
  const [wlasna, setWlasna] = useState(false)
  console.log(wlasna)
  return (
    <div className={classes.billEle}>
      <h6>Select Tip %</h6>
      <div className={classes.divSel}>
        <button className={classes.buttonSel} onClick={() => setProcent(0.05)}>5%</button>
        <button className={classes.buttonSel} onClick={() => setProcent(0.1)}>10%</button>
        <button className={classes.buttonSel} onClick={() => setProcent(0.15)}>15%</button>
      </div>
      <div className={classes.divSel}>
        <button className={classes.buttonSel} onClick={() => setProcent(0.25)}>25%</button>
        <button className={classes.buttonSel} onClick={() => setProcent(0.5)}>50%</button>
        <button className={classes.buttonCus} onClick={() => setWlasna(true)}>Custom</button>
      </div>
    </div>
  )
}
