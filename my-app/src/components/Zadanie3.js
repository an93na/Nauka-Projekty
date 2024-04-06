import React from 'react'
import classes from '../style/StyleModule.module.css'
import frameImg from '../assets/zad3a.jpg'
import angImg from '../assets/zad3b.jpg'
import mgrImg from '../assets/zad3c.jpg'
import workImg from '../assets/zad3d.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { actionFour, actionOne, actionSubmit, actionSubmitted, actionThree, actionTwo } from '../slice/Zad3slice'

export const Zadanie3 = () => {
  const valueOne = useSelector(state => state.zad3.one);
  const valueTwo = useSelector(state => state.zad3.two);
  const valueThree = useSelector(state => state.zad3.three);
  const valueFour = useSelector(state => state.zad3.four);
  const valueSubmit = useSelector(state => state.zad3.submit);
  const valueRight = useSelector(state => state.zad3.right);
  const valueSubmitted = useSelector(state => state.zad3.submitted)
  const dispach = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispach(actionSubmit());
    dispach(actionSubmitted())
  }
  return (
    <div>
      <p>Część III</p>
      <p>Dopasuj nazwy do umiejętności</p>
      <form action="" style={{ textAlign: 'center' }} onSubmit={onSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <div className={classes.divZad3}>
            <h4>Framework</h4>
            <img src={frameImg} alt="framework" className={classes.imgZad3} />
            <select name="" id="" value={valueOne} onChange={(e) => dispach(actionOne(e.target.value))} disabled={valueSubmitted}>
              <option value="" hidden>Wybierz</option>
              <option value="1">React</option>
              <option value="2">Angular</option>
              <option value="3">Django</option>
            </select>
          </div>
          <div className={classes.divZad3}>
            <h4>Angielski</h4>
            <img src={angImg} alt="angielski" className={classes.imgZad3} />
            <select name="" id="" value={valueTwo} onChange={(e) => dispach(actionTwo(e.target.value))} disabled={valueSubmitted}>
              <option value="" hidden>Wybierz</option>
              <option value="1">A1/A2</option>
              <option value="2">B1/B2</option>
              <option value="3">C1/C2</option>
            </select>
          </div>
          <div className={classes.divZad3}>
            <h4>Magister(ile?)</h4>
            <img src={mgrImg} alt="magister" className={classes.imgZad3} />
            <select name="" id="" value={valueThree} onChange={(e) => dispach(actionThree(e.target.value))} disabled={valueSubmitted}>
              <option value="" hidden>Wybierz</option>
              <option value="1">0</option>
              <option value="2">1</option>
              <option value="3">2</option>
            </select>
          </div>
          <div className={classes.divZad3}>
            <h4>Praca obecna</h4>
            <img src={workImg} alt="praca obecna" className={classes.imgZad3} />
            <select name="" id="" value={valueFour} onChange={(e) => dispach(actionFour(e.target.value))} disabled={valueSubmitted}>
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
