import React from 'react'
import classes from '../style/StyleModule.module.css'

export const Zadanie3 = () => {
  return (
    <div>
      <p>Część III</p>
      <p>Dopasuj nazwy do umiejętności</p>
      <form action="" style={{textAlign: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
          <div>
            <p>Framework</p>
            <img src="" alt="" />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">React</option>
              <option value="2">Angular</option>
              <option value="3">Django</option>
            </select>
          </div>
          <div>
            <p>Angielski</p>
            <img src="" alt="" />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">A1/A2</option>
              <option value="2">B1/B2</option>
              <option value="3">C1/C2</option>
            </select>
          </div>
          <div>
            <p>Magister(ile?)</p>
            <img src="" alt="" />
            <select name="" id="">
              <option value="" hidden>Wybierz</option>
              <option value="1">0</option>
              <option value="2">1</option>
              <option value="3">2</option>
            </select>
          </div>
          <div>
            <p>Praca obecna</p>
            <img src="" alt="" />
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
