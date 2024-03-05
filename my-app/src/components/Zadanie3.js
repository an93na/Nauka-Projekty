import React from 'react'
import classes from '../style/StyleModule.module.css'
import frameImg from '../assets/zad3a.jpg'
import angImg from '../assets/zad3b.jpg'
import mgrImg from '../assets/zad3c.jpg'
import workImg from '../assets/zad3d.jpg'

export const Zadanie3 = () => {
  return (
    <div>
      <p>Część III</p>
      <p>Dopasuj nazwy do umiejętności</p>
      <form action="" style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <div className={classes.divZad3}>
            <p>Framework</p>
            <img src={frameImg} alt="framework" className={classes.imgZad3} />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">React</option>
              <option value="2">Angular</option>
              <option value="3">Django</option>
            </select>
          </div>
          <div className={classes.divZad3}>
            <p>Angielski</p>
            <img src={angImg} alt="angielski" className={classes.imgZad3} />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">A1/A2</option>
              <option value="2">B1/B2</option>
              <option value="3">C1/C2</option>
            </select>
          </div>
          <div className={classes.divZad3}>
            <p>Magister(ile?)</p>
            <img src={mgrImg} alt="magister" className={classes.imgZad3} />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">0</option>
              <option value="2">1</option>
              <option value="3">2</option>
            </select>
          </div>
          <div className={classes.divZad3}>
            <p>Praca obecna</p>
            <img src={workImg} alt="praca obecna" className={classes.imgZad3} />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">Marynarz</option>
              <option value="2">Edukator</option>
              <option value="3">Sekretarka</option>
            </select>
          </div>
        </div>
        <button className={classes.btnZ1}>Zatwierdź</button>
      </form>
    </div>
  )
}
