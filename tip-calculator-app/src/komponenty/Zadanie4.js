import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'
import kolo from '../assets/koło.png'
import pociag from '../assets/pociag.png'
import car from '../assets/car.png'
import rakieta from '../assets/rakieta.png'

export const Zadanie4 = () => {
    const [stateForm, setStateForm] = useState(false)
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    return (
        <div>
            <h3>Zadanie</h3>
            <p>Uporządkuj pojazdy w kolejności chronologicznej (Numery wpisuj liczbą a nie słownie)</p>
            <form action="" className={classes.zad4Form} onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={rakieta} alt="rakieta" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={one} onChange={(e) => setOne(e.target.value)} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={kolo} alt="kolo" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={two} onChange={(e) => setTwo(e.target.value)} />
                    </div>
                </div>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={car} alt="samochod" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={three} onChange={(e) => setThree(e.target.value)} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={pociag} alt="pociag" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={four} onChange={(e) => setFour(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className={classes.btnSub}>Zatwierdź</button>
            </form>
        </div>
    )
}
