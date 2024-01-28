import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'
import kolo from '../assets/koło.png'
import pociag from '../assets/pociag.png'
import car from '../assets/car.png'
import rakieta from '../assets/rakieta.png'
import { Zadanie3 } from './Zadanie3'

export const Zadanie4 = () => {
    const [stateForm, setStateForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [nextTask, setNextTask] = useState(false);
    const [show, setShow] = useState(false)

    const sprawdzam = () => {
        if (one === "4" && two === "1" && three === "3" && four === "2") {
            return '1'
        }
        return '0'
    }
    const wynik = (a) => {
        if (a === '1') {
            return 'Poszło Wam świetnie! Kliknij przycisk dalej aby zobaczyć kolejną część zadania.'
        }
        else {
            return 'Niestety nie udało się ale spróbuj jeszcze raz (Kliknij przycisk Reset). '
        }
    }

    const checkingTaskForNewTask = (a) => {
        if (a === '1') {
            setNextTask(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setStateForm(true);
        checkingTaskForNewTask(sprawdzam());
    };

    const handleReset = () => {
        setOne('');
        setTwo('');
        setThree('');
        setFour('');
        setStateForm(false);
        setSubmitted(false);
        setNextTask(false)
        setShow(false)
    };
    const showTask = () => {
        setShow(true)
    }
    return (
        <div>
            <h3>Zadanie</h3>
            <p>I. Uporządkuj pojazdy w kolejności chronologicznej (Numery wpisuj liczbą, a nie słownie)</p>
            <form action="" className={classes.zad4Form} onSubmit={handleSubmit}>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={rakieta} alt="rakieta" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={one} onChange={(e) => setOne(e.target.value)} disabled={submitted} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={kolo} alt="kolo" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={two} onChange={(e) => setTwo(e.target.value)} disabled={submitted} />
                    </div>
                </div>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={car} alt="samochod" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={three} onChange={(e) => setThree(e.target.value)} disabled={submitted} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={pociag} alt="pociag" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={four} onChange={(e) => setFour(e.target.value)} disabled={submitted} />
                    </div>
                </div>
                <div>
                    <button type="submit" className={classes.btnSub} disabled={submitted}>Zatwierdź</button>
                    {submitted && <button type="button" className={classes.btnSub} onClick={handleReset}>Reset</button>}
                </div>
            </form>
            {stateForm ? <p>{wynik(sprawdzam())}</p> : <></>}
            {nextTask && <div className={classes.zad4Form}><button className={classes.btnSub} onClick={showTask}>Dalej</button></div>}
            {show && <Zadanie3 />}
        </div>
    )
}
