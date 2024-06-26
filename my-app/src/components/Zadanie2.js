import React, { useState } from 'react'
import classes from '../style/StyleModule.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actionSubmitted, nextTask, resetState, submit, showNextTask } from '../slice/Zad2slice';
import { resetState as reset3 } from '../slice/Zad3slice';
import { Zadanie3 } from './Zadanie3';

export const Zadanie2 = () => {
    const valueSubmit = useSelector(state => state.zad2.submit);
    const isSubmitted = useSelector(state => state.zad2.submitted);
    const isNextTask = useSelector(state => state.zad2.nextTask);
    const isShowNewTask = useSelector(state => state.zad2.showNextTask)
    const [oneValue, setOneValue] = useState('')
    const [twoValue, setTwoValue] = useState('')
    const [threeValue, setThreeValue] = useState('')
    const [fourValue, setFourValue] = useState('')
    const [fiveValue, setFiveValue] = useState('')

    const dispatch = useDispatch();

    const odpowiedz = () => {
        if (oneValue === '4' && twoValue === '3' && threeValue === '3' && fourValue === '4' && fiveValue === '2') {
            return '1'
        }
        else {
            return '0'
        }
    }

    const isTaskRight = (a) => {
        if (a === '1') {
            dispatch(nextTask())
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(submit())
        dispatch(actionSubmitted())
        odpowiedz()
        isTaskRight(odpowiedz())
    }

    const handleReset = () => {
        dispatch(resetState());
        dispatch(reset3())
    }
    return (
        <div style={{ textAlign: 'left' }}>
            <p>Część II</p>
            <p>W tym zadaniu należy wybrać jedną prawidłową odpowiedź. Nie ma łatwo ponieważ tutaj zakresem wiedzy jest całe moje CV.</p>
            <form action="" style={{ textAlign: 'center' }} onSubmit={onSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <p>1) Ile umiejętności technicznych wymieniłam?</p>
                    <label>
                        <input type='radio' name='1' value={'1'} onChange={(e) => setOneValue(e.target.value)} disabled={isSubmitted} /> 1
                    </label>
                    <label>
                        <input type='radio' name='1' value={'2'} onChange={(e) => setOneValue(e.target.value)} disabled={isSubmitted} /> 2
                    </label>
                    <label>
                        <input type='radio' name='1' value={'3'} onChange={(e) => setOneValue(e.target.value)} disabled={isSubmitted} /> 3
                    </label>
                    <label>
                        <input type='radio' name='1' value={'4'} onChange={(e) => setOneValue(e.target.value)} disabled={isSubmitted} /> 4
                    </label>
                    <p>2) Jakie jest moje wykształcenie?</p>
                    <label>
                        <input type='radio' name='2' value={'1'} onChange={(e) => setTwoValue(e.target.value)} disabled={isSubmitted} /> inżynier
                    </label>
                    <label>
                        <input type='radio' name='2' value={'2'} onChange={(e) => setTwoValue(e.target.value)} disabled={isSubmitted} /> magister
                    </label>
                    <label>
                        <input type='radio' name='2' value={'3'} onChange={(e) => setTwoValue(e.target.value)} disabled={isSubmitted} /> magister inżynier
                    </label>
                    <label>
                        <input type='radio' name='2' value={'4'} onChange={(e) => setTwoValue(e.target.value)} disabled={isSubmitted} /> doktor
                    </label>
                    <p>3) Jaki kierunek studiowałam jako ostatni?</p>
                    <label>
                        <input type='radio' name='3' value={'1'} onChange={(e) => setThreeValue(e.target.value)} disabled={isSubmitted} /> Nawigacja Morska
                    </label>
                    <label>
                        <input type='radio' name='3' value={'2'} onChange={(e) => setThreeValue(e.target.value)} disabled={isSubmitted} /> Hydrografia
                    </label>
                    <label>
                        <input type='radio' name='3' value={'3'} onChange={(e) => setThreeValue(e.target.value)} disabled={isSubmitted} /> Technologie Kosmiczne i Satelitarne
                    </label>
                    <label>
                        <input type='radio' name='3' value={'4'} onChange={(e) => setThreeValue(e.target.value)} disabled={isSubmitted} /> Informatyka
                    </label>
                    <p>4) W którym roku uczestniczyłam w kursie Front-end developer?</p>
                    <label>
                        <input type='radio' name='4' value={'1'} onChange={(e) => setFourValue(e.target.value)} disabled={isSubmitted} /> 2020/2021
                    </label>
                    <label>
                        <input type='radio' name='4' value={'2'} onChange={(e) => setFourValue(e.target.value)} disabled={isSubmitted} /> 2021/2022
                    </label>
                    <label>
                        <input type='radio' name='4' value={'3'} onChange={(e) => setFourValue(e.target.value)} disabled={isSubmitted} /> 2022/2023
                    </label>
                    <label>
                        <input type='radio' name='4' value={'4'} onChange={(e) => setFourValue(e.target.value)} disabled={isSubmitted} /> 2023/2024
                    </label>
                    <p>5) Jakim jezyku obcy oprócz angielskiego wspominam w CV?</p>
                    <label>
                        <input type='radio' name='5' value={'1'} onChange={(e) => setFiveValue(e.target.value)} disabled={isSubmitted} /> niemiecki
                    </label>
                    <label>
                        <input type='radio' name='5' value={'2'} onChange={(e) => setFiveValue(e.target.value)} disabled={isSubmitted} /> rosyjski
                    </label>
                    <label>
                        <input type='radio' name='5' value={'3'} onChange={(e) => setFiveValue(e.target.value)} disabled={isSubmitted} /> francuski
                    </label>
                    <label>
                        <input type='radio' name='5' value={'4'} onChange={(e) => setFiveValue(e.target.value)} disabled={isSubmitted} /> hiszpański
                    </label>
                </div>
                <div>
                    <button type='submit' className={classes.btnZ1} disabled={isSubmitted} >Zatwierdź</button>
                    {valueSubmit ? <button className={classes.btnZ1} style={{ marginLeft: '5px' }} onClick={handleReset}>Reset</button> : <></>}
                </div>
            </form>
            <div style={{ textAlign: 'center' }}>
                {valueSubmit && isNextTask === true && <p>Gratulacje! Kliknij przycisk Dalej aby zobaczyć kolejną część zadania.</p>}
                {valueSubmit && isNextTask === false && <p>Niestety spróbuj jeszcze raz.</p>}
                {isNextTask ? <button className={classes.btnZ1} onClick={() => dispatch(showNextTask())} >Dalej</button> : <></>}
                {isShowNewTask && <Zadanie3 />}
            </div>
        </div>
    )
}
