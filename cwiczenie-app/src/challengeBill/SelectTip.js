import React, { useState } from 'react';
import classes from '../style/StyleBill.module.css';

export const SelectTip = (props) => {
  const { procent, setProcent } = props;
  const { wlasna, setWlasna } = props;
  const [custmValue, setCustmValue] = useState('');

  const zamienWpisanaWartoscNaProcent = (a) => {
    return a * 0.01
  }

  const handleCustomInputChange = (e) => {
    if (!isNaN(e.target.value)) {
      setCustmValue(e.target.value);
    }
  };

  const submitCustomValue = (e) => {
    e.preventDefault();
    setProcent(zamienWpisanaWartoscNaProcent(custmValue));
  }

  const resetTiphandle = (e) => {
    e.preventDefault()
    setWlasna(false)
  }

  return (
    <div className={classes.billEle}>
      <h6>Select Tip %</h6>
      {wlasna ? (
        <form>
          <button className={classes.buttonSel} onClick={resetTiphandle}>Wróć</button>
          <input type='text' style={{ width: '120px', height: '60px', margin: '5px', backgroundColor: 'rgb(235, 235, 235)', border: '1px solid rgb(204, 198, 198)', color: 'rgb(48, 45, 45)' }} placeholder="wartość" value={custmValue} onChange={handleCustomInputChange} />
          <button type='submit' className={classes.buttonSel} style={{ width: '150px', height: '60px', margin: '5px', border: 'none' }} onClick={submitCustomValue}>zatwierdź</button>
        </form>
      ) : (
        <>
          <div className={classes.divSel}>
            <button className={classes.buttonSel} onClick={() => setProcent(0.05)}>5%</button>
            <button className={classes.buttonSel} onClick={() => setProcent(0.1)}>10%</button>
            <button className={classes.buttonSel} onClick={() => setProcent(0.15)}>15%</button>
          </div>
          <div className={classes.divSel}>
            <button className={classes.buttonSel} onClick={() => setProcent(0.25)}>25%</button>
            <button className={classes.buttonSel} onClick={() => setProcent(0.5)}>50%</button>
            <button className={classes.buttonCus} onClick={() => setWlasna(true)}>Custom</button>
          </div></>
      )}
    </div>
  );
};
