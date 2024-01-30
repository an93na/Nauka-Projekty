import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetState, wartoscFour, wartoscOne, wartoscThree, wartoscTwo } from './zad1Slice'



import classes from '../style/Animacja1.module.css'
import kolo from '../assets/koło.png'
import pociag from '../assets/pociag.png'
import car from '../assets/car.png'
import rakieta from '../assets/rakieta.png'
import { Zadanie3 } from './Zadanie3'



export const Animacja = () => {
const stateOne = useSelector(state => state.zad1.one)
const stateTwo = useSelector(state => state.zad1.two)
const stateThree = useSelector(state => state.zad1.three)
const stateFour = useSelector(state => state.zad1.four)
const dispatch = useDispatch()




    const [stateForm, setStateForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [nextTask, setNextTask] = useState(false);
    const [show, setShow] = useState(false)

    const sprawdzam = () => {
        if (stateOne === "4" && stateTwo === "1" && stateThree === "3" && stateFour === "2") {
            return '1'
        }
        return '0'
    }
    const wynik = (a) => {
        if (a === '1') {
            return 'Świetnie! Kliknij przycisk dalej aby zobaczyć kolejną część zadania.'
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
        dispatch(resetState())
        setStateForm(false);
        setSubmitted(false);
        setNextTask(false)
        setShow(false)
    };
    const showTask = () => {
        setShow(true)
    }
    console.log(stateOne)
    console.log(stateTwo)
    console.log(stateThree)
    console.log(stateFour)

  return (
    <div>
        <div>
            <h3>Zadanie</h3>
            <p>I. Uporządkuj pojazdy w kolejności chronologicznej (Numery wpisuj liczbą, a nie słownie)</p>
            <form action="" className={classes.zad4Form} onSubmit={handleSubmit}>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={rakieta} alt="rakieta" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateOne} onChange={(e) => dispatch(wartoscOne(e.target.value))} disabled={submitted} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={kolo} alt="kolo" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateTwo} onChange={(e) => dispatch(wartoscTwo(e.target.value))} disabled={submitted} />
                    </div>
                </div>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={car} alt="samochod" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateThree} onChange={(e) => dispatch(wartoscThree(e.target.value))} disabled={submitted} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={pociag} alt="pociag" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateFour} onChange={(e) => dispatch(wartoscFour(e.target.value))} disabled={submitted} />
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
    


    </div>
  )
}
