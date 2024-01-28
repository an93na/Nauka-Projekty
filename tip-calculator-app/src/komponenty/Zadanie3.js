import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'

export const Zadanie3 = () => {
    const [stateForm, setStateForm] = useState(false)
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [pkt, setPkt] = useState(0)
    // console.log(one)
    const policzPunkty = () => {
        if (one === 'a' && two === 'b' && three === 'b' && four === 'c') {
            return setPkt(4)
        }
        if (one !== 'a' && two === 'b' && three === 'b' && four === 'c') {
            return setPkt(3)
        }
        if (one === 'a' && two !== 'b' && three === 'b' && four === 'c') {
            return setPkt(3)
        }
        if (one === 'a' && two === 'b' && three !== 'b' && four === 'c') {
            return setPkt(3)
        }
        if (one === 'a' && two === 'b' && three === 'b' && four !== 'c') {
            return setPkt(3)
        }
        if (one !== 'a' && two !== 'b' && three === 'b' && four === 'c') {
            return setPkt(2)
        }
        if (one !== 'a' && two === 'b' && three !== 'b' && four === 'c') {
            return setPkt(2)
        }
        if (one !== 'a' && two === 'b' && three === 'b' && four !== 'c') {
            return setPkt(2)
        }
        if (one === 'a' && two !== 'b' && three === 'b' && four !== 'c') {
            return setPkt(2)
        }
        if (one === 'a' && two !== 'b' && three !== 'b' && four === 'c') {
            return setPkt(2)
        }
        if (one === 'a' && two === 'b' && three !== 'b' && four !== 'c') {
            return setPkt(2)
        }
        if (one === 'a' && two !== 'b' && three !== 'b' && four !== 'c') {
            return setPkt(1)
        }
        if (one !== 'a' && two === 'b' && three !== 'b' && four !== 'c') {
            return setPkt(1)
        }
        if (one !== 'a' && two !== 'b' && three === 'b' && four !== 'c') {
            return setPkt(1)
        }
        if (one !== 'a' && two !== 'b' && three !== 'b' && four === 'c') {
            return setPkt(1)
        }
        if (one !== 'a' && two !== 'b' && three !== 'b' && four !== 'c') {
            return setPkt(0)
        }
    }
    const wyświetlOdp = (zad, odp, nazwa) => {
        if (zad === odp) {
            return 'Świetnie!'
        }
        else {
            return `Niestey nie :( Odpowiedź to: ${nazwa}`
        }
    }
    return (
        <div>
            <p>II. Przed Wami druga część zadania sprawdzająca Wasz wybór w poprzedniej części.</p>
            <p>Zaznacz poprawną odpowieć (jedną).</p>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(e) => {
                e.preventDefault();
                setStateForm(true);
                policzPunkty()
            }}>
                <p>1. Koło powstało w:</p>
                <label>
                    <input type="radio" name='pyt1' value={'a'} onChange={(e) => setOne(e.target.value)} />
                    Mezopotami lub na Bliskim Wschodzie
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'b'} onChange={(e) => setOne(e.target.value)} />
                    Europie a dokładniej w Polsce na Śląsku
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'c'} onChange={(e) => setOne(e.target.value)} />
                    Chinach
                </label>
                {stateForm ? <p>{wyświetlOdp(one, 'a', 'Mezopotami lub na Bliskim Wschodzie')}</p> : <></>}
                <p>2. John Dunlop w 1888 roku wynalazł:</p>
                <label>
                    <input type="radio" name='pyt2' value={'a'} onChange={(e) => setTwo(e.target.value)} />
                    Bryczkę
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'b'} onChange={(e) => setTwo(e.target.value)} />
                    Opony pneumatyczne
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'c'} onChange={(e) => setTwo(e.target.value)} />
                    Traktor
                </label>
                {stateForm ? <p>{wyświetlOdp(two, 'b', 'Opony pneumatyczne')}</p> : <></>}
                <p>3. Wynalazcą maszyny parowej w XVIII wieku był:</p>
                <label>
                    <input type="radio" name='pyt3' value={"a"} onChange={(e) => setThree(e.target.value)} />
                    Nikola Tesla
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"b"} onChange={(e) => setThree(e.target.value)} />
                    James Watt
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"c"} onChange={(e) => setThree(e.target.value)} />
                    Alfred Nobel
                </label>
                {stateForm ? <p>{wyświetlOdp(three, 'b', 'James Watt')}</p> : <></>}
                <p>4. Jak nazywał się pierwszy sztuczny satelita Ziemi?</p>
                <label>
                    <input type="radio" name='pyt4' value={"a"} onChange={(e) => setFour(e.target.value)} />
                    Łajka
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"b"} onChange={(e) => setFour(e.target.value)} />
                    Armstrong
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"c"} onChange={(e) => setFour(e.target.value)} />
                    Sputnik 1
                </label>
                {stateForm ? <p>{wyświetlOdp(four, 'c', 'Sputnik 1')}</p> : <></>}
                {stateForm ? <p></p> :
                    <button className={classes.btnSub}>Zatwierdź</button>}
            </form>
            {stateForm ? <button className={classes.btnSub} onClick={() =>
                setStateForm(false)}>Wyczyść</button> : <p></p>}
            <p>{pkt}</p>
        </div>
    )
}
