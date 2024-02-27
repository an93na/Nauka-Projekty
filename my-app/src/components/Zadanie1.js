import React from 'react'
import z1a from '../assets/zad1a.jpg'
import z1b from '../assets/zad1b.jpg'
import z1c from '../assets/zad1c.jpg'
import z1d from '../assets/zad1d.jpg'
import classes from '../style/StyleModule.module.css'

export const Zadanie1 = () => {
    return (
        <div>
            <p>Część I</p>
            <p>W CV w umiejętnościach miękkich wymieniłam trzy najważniejsze cechy jakie posiadam. Twoim zadaniem jest uporządkować je w tej samej kolejności. Słusznie zauważyłeś, że tam były trzy cechy, a tu jest cztery. Ta czwarta to bonus i powinna się znaleźć na końcu.</p>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div className={classes.zadDiv}>
                    <h5>Szybkie podejmowanie decyzji</h5>
                    <img src={z1a} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                    <input type="text" />
                </div>
                <div className={classes.zadDiv}>
                    <h5>Szybkie podejmowanie decyzji</h5>
                    <img src={z1a} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                    <input type="text" />
                </div>
                <div className={classes.zadDiv}>
                    <h5>Szybkie podejmowanie decyzji</h5>
                    <img src={z1a} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                    <input type="text" />
                </div>
                <div className={classes.zadDiv}>
                    <h5>Szybkie podejmowanie decyzji</h5>
                    <img src={z1a} alt="szybkie podejmowanie decyzji" className={classes.imgZad1} />
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}
