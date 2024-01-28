import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'

export const Zadanie3 = () => {
    const [stateForm, setStateForm] = useState(false)
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const correctAnswers = { one: 'a', two: 'b', three: 'b', four: 'c' };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStateForm(true);
        setSubmitted(true);
        if (one === correctAnswers.one && two === correctAnswers.two && three === correctAnswers.three && four === correctAnswers.four) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };


    const handleReset = () => {
        setOne('');
        setTwo('');
        setThree('');
        setFour('');
        setStateForm(false);
        setSubmitted(false);
    };
    
    return (
        <div>
            <p>II. Przed Wami druga część zadania sprawdzająca Wasz wybór w poprzedniej części.</p>
            <p>Zaznacz poprawną odpowieć (jedną).</p>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleFormSubmit}>
                <p>1. Koło powstało w:</p>
                <label>
                    <input type="radio" name='pyt1' value={'a'} onChange={(e) => setOne(e.target.value)} disabled={submitted} required />
                    Mezopotami lub na Bliskim Wschodzie
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'b'} onChange={(e) => setOne(e.target.value)} disabled={submitted}/>
                    Europie a dokładniej w Polsce na Śląsku
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'c'} onChange={(e) => setOne(e.target.value)} disabled={submitted} />
                    Chinach
                </label>
                <p>2. John Dunlop w 1888 roku wynalazł:</p>
                <label>
                    <input type="radio" name='pyt2' value={'a'} onChange={(e) => setTwo(e.target.value)} disabled={submitted} required/>
                    Bryczkę
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'b'} onChange={(e) => setTwo(e.target.value)} disabled={submitted} />
                    Opony pneumatyczne
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'c'} onChange={(e) => setTwo(e.target.value)} disabled={submitted} />
                    Traktor
                </label>
                <p>3. Wynalazcą maszyny parowej w XVIII wieku był:</p>
                <label>
                    <input type="radio" name='pyt3' value={"a"} onChange={(e) => setThree(e.target.value)} disabled={submitted} required/>
                    Nikola Tesla
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"b"} onChange={(e) => setThree(e.target.value)} disabled={submitted} />
                    James Watt
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"c"} onChange={(e) => setThree(e.target.value)} disabled={submitted} />
                    Alfred Nobel
                </label>
                <p>4. Jak nazywał się pierwszy sztuczny satelita Ziemi?</p>
                <label>
                    <input type="radio" name='pyt4' value={"a"} onChange={(e) => setFour(e.target.value)} disabled={submitted} required/>
                    Łajka
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"b"} onChange={(e) => setFour(e.target.value)} disabled={submitted} />
                    Armstrong
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"c"} onChange={(e) => setFour(e.target.value)} disabled={submitted} />
                    Sputnik 1
                </label>
                {!submitted && <button className={classes.btnSub}>Zatwierdź</button>}
            </form>
            {stateForm && <button className={classes.btnSub} onClick={handleReset}>Wyczyść</button>}
            {stateForm && correct === true && <p>Gratulacje! Zadanie zostało rozwiązane poprawnie.</p>}
            {stateForm && correct === false && <p>Niestety rozwiązanie nie jest poprawne. Spróbuj jeszcze raz. (Nawet jeśli odpowiedź wcześniej była prawidłowa to kliknij ją jeszcze raz)</p>}
        </div>
    )
}
