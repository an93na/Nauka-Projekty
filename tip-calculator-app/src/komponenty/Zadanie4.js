import classes from '../style/Animacja1.module.css'
import kolo from '../assets/koło.png'
import pociag from '../assets/pociag.png'
import car from '../assets/car.png'
import rakieta from '../assets/rakieta.png'
import { Zadanie3 } from './Zadanie3'
import { useDispatch, useSelector } from 'react-redux'
import { resetState, wartoscFour, wartoscOne, wartoscThree, wartoscTwo, actionStateForm, actionSubmittted, actionShowTask, actionNextTask } from './zad1Slice'
import { restetState as reset2 } from './zad2Slice'
import { resetState as reset3 } from './zad3Slice'

export const Zadanie4 = () => {
    const stateOne = useSelector(state => state.zad1.one)
    const stateTwo = useSelector(state => state.zad1.two)
    const stateThree = useSelector(state => state.zad1.three)
    const stateFour = useSelector(state => state.zad1.four)
    const submittted = useSelector(state => state.zad1.submit)
    const stateForm = useSelector(state => state.zad1.form)
    const show = useSelector(state => state.zad1.showTask)
    const nextTask = useSelector(state => state.zad1.next)
    const dispatch = useDispatch()

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
            dispatch(actionNextTask())
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actionStateForm());
        dispatch(actionSubmittted());
        checkingTaskForNewTask(sprawdzam());
    };

    const handleReset = () => {
        dispatch(resetState());
        dispatch(reset2());
        dispatch(reset3());
    };

    const showTask = () => {
        dispatch(actionShowTask())
    }
    return (
        <div>
            <h3>Zadanie</h3>
            <p>I. Uporządkuj pojazdy w kolejności chronologicznej (Numery wpisuj liczbą, a nie słownie)</p>
            <form action="" className={classes.zad4Form} onSubmit={handleSubmit}>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={rakieta} alt="rakieta" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateOne} onChange={(e) => dispatch(wartoscOne(e.target.value))} disabled={submittted} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={kolo} alt="kolo" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateTwo} onChange={(e) => dispatch(wartoscTwo(e.target.value))} disabled={submittted} />
                    </div>
                </div>
                <div className={classes.zad4DivNad} >
                    <div className={classes.zad4StyleDiv}>
                        <img src={car} alt="samochod" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateThree} onChange={(e) => dispatch(wartoscThree(e.target.value))} disabled={submittted} />
                    </div>
                    <div className={classes.zad4StyleDiv}>
                        <img src={pociag} alt="pociag" className={classes.Zad4img} />
                        <input type="text" className={classes.Zad4input} placeholder='numer' required value={stateFour} onChange={(e) => dispatch(wartoscFour(e.target.value))} disabled={submittted} />
                    </div>
                </div>
                <div>
                    <button type="submit" className={classes.btnSub} disabled={submittted}>Zatwierdź</button>
                    {submittted && <button type="button" className={classes.btnSub} onClick={handleReset}>Reset</button>}
                </div>
            </form>
            {stateForm ? <p>{wynik(sprawdzam())}</p> : <></>}
            {nextTask && <div className={classes.zad4Form}><button className={classes.btnSub} onClick={showTask}>Dalej</button></div>}
            {show && <Zadanie3 />}
        </div>
    )
}
