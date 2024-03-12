import React from 'react'
import z1a from '../assets/zad1a.jpg'
import z1b from '../assets/zad1b.jpg'
import z1c from '../assets/zad1c.jpg'
import z1d from '../assets/zad1d.jpg'
import classes from '../style/StyleModule.module.css'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { actionSubmit, actionSubmitted, odpFour, odpOne, odpThree, odpTwo } from '../slice/Zad1slice'
export const Zadanie1 = () => {
    const valueOne = useSelector(state => state.zad1.one)
    const valueTwo = useSelector(state => state.zad1.two)
    const valueThree = useSelector(state => state.zad1.three)
    const valueFour = useSelector(state => state.zad1.four)
    const valueSubmit = useSelector(state => state.zad1.submit)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(actionSubmit())
        dispatch(actionSubmitted())
    }
    return (
        <div>
            <p>Część I</p>
            <p>W CV w umiejętnościach miękkich wymieniłam trzy najważniejsze cechy jakie posiadam. Twoim zadaniem jest uporządkować je w tej samej kolejności. Słusznie zauważyłeś, że tam były trzy cechy, a tu jest cztery. Ta czwarta to bonus i powinna się znaleźć na końcu.</p>
            <form action="" style={{ textAlign: 'center' }} onSubmit={onSubmit}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={classes.zadDiv} style={{ height: '40vh' }}>
                        <h5>praca zespołowa</h5>
                        <img src={z1a} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                        <input type="text" className={classes.pZad1} value={valueOne} onChange={(e) => dispatch(odpOne(e.target.value))}/>
                    </div>
                    <div className={classes.zadDiv} style={{ height: '40vh' }}>
                        <h5>komunikatywność i zaangażowanie</h5>
                        <img src={z1b} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                        <input type="text" className={classes.pZad1} value={valueTwo} onChange={(e) => dispatch(odpTwo(e.target.value))}/>
                    </div>
                    <div className={classes.zadDiv} style={{ height: '40vh' }}>
                        <h5>szybkie podejmowanie decyzji</h5>
                        <img src={z1c} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                        <input type="text" className={classes.pZad1} value={valueThree} onChange={(e) => dispatch(odpThree(e.target.value))}/>
                    </div>
                    <div className={classes.zadDiv} style={{ height: '40vh' }}>
                        <h5>kreatywność i analityczne myślenie</h5>
                        <img src={z1d} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                        <input type="text" className={classes.pZad1} value={valueFour} onChange={(e) => dispatch(odpFour(e.target.value))}/>
                    </div>
                </div>
                <button type='submit' className={classes.btnZ1}>Zatwierdź</button>
            </form>
        </div>
    )
}
