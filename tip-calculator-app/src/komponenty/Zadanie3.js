import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { correctActionTrue, correctActionFalse, formAction, restetState } from './zad2Slice';
import { actionSubmittted } from './zad1Slice';

export const Zadanie3 = () => {
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const dispatch = useDispatch()
    const stateForm = useSelector(state => state.zad2.form)
    const submitted = useSelector(state => state.zad2.submit)
    const correct = useSelector(state => state.zad2.corect)

    const correctAnswers = { one: 'a', two: 'b', three: 'b', four: 'c' };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(formAction())
        dispatch(actionSubmittted())
        if (one === correctAnswers.one && two === correctAnswers.two && three === correctAnswers.three && four === correctAnswers.four) {
            dispatch(correctActionTrue())
        } else {
            dispatch(correctActionFalse())
        }
    };


    const handleReset = () => {
        setOne('');
        setTwo('');
        setThree('');
        setFour('');
        dispatch(restetState())
    };

    return (
        <div>
            <p>II. Przed Tobą druga część zadania sprawdzająca Twój wybór w poprzedniej części.</p>
            <p>Zaznacz poprawną odpowieć (jedną).</p>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleFormSubmit}>
                <p>1. Koło powstało w:</p>
                <label>
                    <input type="radio" name='pyt1' value={'a'} onChange={(e) => setOne(e.target.value)} disabled={submitted} required checked={one === 'a'} />
                    Mezopotami lub na Bliskim Wschodzie
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'b'} onChange={(e) => setOne(e.target.value)} disabled={submitted} checked={one === 'b'} />
                    Europie a dokładniej w Polsce na Śląsku
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'c'} onChange={(e) => setOne(e.target.value)} disabled={submitted} checked={one === 'c'} />
                    Chinach
                </label>
                <p>2. John Dunlop w 1888 roku wynalazł:</p>
                <label>
                    <input type="radio" name='pyt2' value={'a'} onChange={(e) => setTwo(e.target.value)} disabled={submitted} required checked={two === 'a'} />
                    Bryczkę
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'b'} onChange={(e) => setTwo(e.target.value)} disabled={submitted} checked={two === 'b'} />
                    Opony pneumatyczne
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'c'} onChange={(e) => setTwo(e.target.value)} disabled={submitted} checked={two === 'c'} />
                    Traktor
                </label>
                <p>3. Wynalazcą maszyny parowej w XVIII wieku był:</p>
                <label>
                    <input type="radio" name='pyt3' value={"a"} onChange={(e) => setThree(e.target.value)} disabled={submitted} required checked={three === 'a'} />
                    Nikola Tesla
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"b"} onChange={(e) => setThree(e.target.value)} disabled={submitted} checked={three === 'b'} />
                    James Watt
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"c"} onChange={(e) => setThree(e.target.value)} disabled={submitted} checked={three === 'c'} />
                    Alfred Nobel
                </label>
                <p>4. Jak nazywał się pierwszy sztuczny satelita Ziemi?</p>
                <label>
                    <input type="radio" name='pyt4' value={"a"} onChange={(e) => setFour(e.target.value)} disabled={submitted} required checked={four === 'a'} />
                    Łajka
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"b"} onChange={(e) => setFour(e.target.value)} disabled={submitted} checked={four === 'b'} />
                    Armstrong
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"c"} onChange={(e) => setFour(e.target.value)} disabled={submitted} checked={four === 'c'} />
                    Sputnik 1
                </label>
                {!submitted && <button className={classes.btnSub}>Zatwierdź</button>}
            </form>
            {stateForm && <button className={classes.btnSub} onClick={handleReset}>Wyczyść</button>}
            {stateForm && correct === true && <p>Gratulacje! Zadanie zostało rozwiązane poprawnie.</p>}
            {stateForm && correct === false && <p>Niestety rozwiązanie nie jest poprawne. Spróbuj jeszcze raz.</p>}
        </div>
    )
}
