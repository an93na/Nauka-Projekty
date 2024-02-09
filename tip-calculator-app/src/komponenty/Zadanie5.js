import React from 'react'
import classes from '../style/Animacja1.module.css'
import zarowka from '../assets/zarowka.jpg'
import wypor from '../assets/wypor.jpg'
import grawitacja from '../assets/grawitacja.jpg'
import helio from '../assets/helio.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { corectActionF, corectActionT, formState, four, one, resetState, submitAction, three, two } from './zad3Slice'

export const Zadanie5 = () => {
    const stateOne = useSelector(state => state.zad3.oneZd);
    const stateTwo = useSelector(state => state.zad3.twoZd);
    const stateThree = useSelector(state => state.zad3.threeZd);
    const stateFour = useSelector(state => state.zad3.fourZd);
    const stateForm = useSelector(state => state.zad3.form);
    const submittted = useSelector(state => state.zad3.submit);
    const correct = useSelector(state => state.zad3.correct)
    const dispatch = useDispatch();

    const correctAnswers = { one: 'a', two: 'b', three: 'b', four: 'd' };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(formState());
        dispatch(submitAction())
        if (stateOne === correctAnswers.one && stateTwo === correctAnswers.two && stateThree === correctAnswers.three && stateFour === correctAnswers.four) {
            dispatch(corectActionT())
        } else {
            dispatch(corectActionF())
        }
    };

    const handleReset = () => {
        dispatch(resetState());
    };


    // console.log(correct)
    // console.log(stateOne)
    // console.log(stateTwo)
    // console.log(stateThree)
    // console.log(stateFour)
    return (
        <div>
            <p>III. Przed Tobą ostania część zadania.</p>
            <p>Dopasuj naukowca do odkrycia:</p>
            <form action="" onSubmit={handleSubmit} >
                <div className={classes.zad5Form}>
                    <div className={classes.zad5StyleDiv}>
                        <p className={classes.p5}>żarówka</p>
                        <img src={zarowka} alt="zarowka" className={classes.Zad5img} />
                        <select name="" id="" style={{ width: 168 }} value={stateOne} onChange={(e) => dispatch(one(e.target.value))} disabled={submittted}>
                            <option value="" hidden>Wybierz</option>
                            <option value="a">Thomas Edison</option>
                            <option value="b">Ignacy Łukasiewicz</option>
                            <option value="c">Nicola Tesla</option>
                            <option value="d">Pitagoras</option>
                        </select>
                    </div>
                    <div className={classes.zad5StyleDiv}>
                        <p className={classes.p5}>teoria heliocentryczna</p>
                        <img src={helio} alt="teoria heliocentryczna" className={classes.Zad5img} />
                        <select name="" id="" style={{ width: 168 }} value={stateTwo} onChange={(e) => dispatch(two(e.target.value))} disabled={submittted}>
                            <option value="" hidden>Wybierz</option>
                            <option value="a">Neil Armstrong</option>
                            <option value="b">Mikołaj Kopernik</option>
                            <option value="c">Galileo Galilei</option>
                            <option value="d">Johannes Kepler</option>
                        </select>
                    </div>
                    <div className={classes.zad5StyleDiv}>
                        <p className={classes.p5}>zjawisko grawitacji</p>
                        <img src={grawitacja} alt="grawitacja" className={classes.Zad5img} />
                        <select name="" id="" style={{ width: 168 }} value={stateThree} onChange={(e) => dispatch(three(e.target.value))} disabled={submittted}>
                            <option value="" hidden>Wybierz</option>
                            <option value="a">Maria Skłodowska-Curie</option>
                            <option value="b">Isaac Newton</option>
                            <option value="c">Alfred Nobel</option>
                            <option value="d">Leonardo da Vinci</option>
                        </select>
                    </div>
                    <div className={classes.zad5StyleDiv}>
                        <p className={classes.p5}>prawo wyporu</p>
                        <img src={wypor} alt="prawo wyporu" className={classes.Zad5img} />
                        <select name="" id="" style={{ width: 168 }} value={stateFour} onChange={(e) => dispatch(four(e.target.value))} disabled={submittted}>
                            <option value="" hidden>Wybierz</option>
                            <option value="a">Galileusz</option>
                            <option value="b">Charles Darwin</option>
                            <option value="c">Pitagoras</option>
                            <option value="d">Archimedes</option>
                        </select>
                    </div>
                </div>
                <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    {!submittted && <button className={classes.btnSub} style={{ marginTop: 15 }}>Sprawdź</button>}
                    {submittted && <button type="button" className={classes.btnSub} onClick={handleReset} style={{ marginTop: 15 }}>Resetuj</button>}
                </div>
            </form>
            {stateForm && correct === true  && <p>Graulacje! Twoje zadanie zostało rozwiązane porawnie!</p>}
            {stateForm && correct === false  && <p>Niestety Twoje rozwiązanie nie jest porawne. Spróbuj jeszcze raz </p>}
        </div>
    )
}
