import React, { useState } from 'react';
import classes from '../style/StyleBill.module.css';

export const SelectTip = (props) => {
  const { procent, setProcent } = props;
  const [wlasna, setWlasna] = useState(false);

  const zamienWpisanaWartoscNaProcent = (a) => {
    return a*0.01
  }

  const handleCustomInputChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setProcent(zamienWpisanaWartoscNaProcent(value));
    }
  };

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
        {wlasna ? (
          <input type='text' style={{ width: '120px', height: '60px', margin: '0px', backgroundColor: 'rgb(235, 235, 235)', border: '1px solid rgb(204, 198, 198)', color: 'rgb(48, 45, 45)' }} value={procent} onChange={handleCustomInputChange} />
        ) : (
          <button className={classes.buttonCus} onClick={() => setWlasna(true)}>Custom</button>
        )}
      </div>
    </div>
  );
};
