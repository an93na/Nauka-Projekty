import React from 'react'
import classes from '../style/Animacja1.module.css'
import mapa from '../assets/mapa.jpg'
import olowek from '../assets/ołowek.png'
import rower from '../assets/rower.png'
import serce from '../assets/serce.png'

export const Zadanie4 = () => {
    return (
        <div >
            <form action="" className={classes.zad4Form} onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={mapa} alt="mapa" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={serce} alt="serce" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' />
                    </div>
                </div>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={olowek} alt="olowek" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={rower} alt="rower" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' />
                    </div>
                </div>
                <button type="submit" className={classes.btnSub}>Zatwierdź</button>
            </form>
        </div>
    )
}
