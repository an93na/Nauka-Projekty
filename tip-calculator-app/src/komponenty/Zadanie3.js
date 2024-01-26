import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'
import { Zadanie4 } from './Zadanie4';

export const Zadanie3 = () => {
    const [stateForm, setStateForm] = useState(false)
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [pkt, setPkt] = useState(0)
    // console.log(one)
    const policzPunkty = () => {
        if (one === 'odp1' && two === 'bb' && three === '3' && four === 'pies') {
            return setPkt(4)
        }
        if (one !== 'odp1' && two === 'bb' && three === '3' && four === 'pies') {
            return setPkt(3)
        }
        if (one === 'odp1' && two !== 'bb' && three === '3' && four === 'pies') {
            return setPkt(3)
        }
        if (one === 'odp1' && two === 'bb' && three !== '3' && four === 'pies') {
            return setPkt(3)
        }
        if (one === 'odp1' && two === 'bb' && three === '3' && four !== 'pies') {
            return setPkt(3)
        }
        if (one !== 'odp1' && two !== 'bb' && three === '3' && four === 'pies') {
            return setPkt(2)
        }
        if (one !== 'odp1' && two === 'bb' && three !== '3' && four === 'pies') {
            return setPkt(2)
        }
        if (one !== 'odp1' && two === 'bb' && three === '3' && four !== 'pies') {
            return setPkt(2)
        }
        if (one === 'odp1' && two !== 'bb' && three === '3' && four !== 'pies') {
            return setPkt(2)
        }
        if (one === 'odp1' && two !== 'bb' && three !== '3' && four === 'pies') {
            return setPkt(2)
        }
        if (one === 'odp1' && two === 'bb' && three !== '3' && four !== 'pies') {
            return setPkt(2)
        }
        if (one === 'odp1' && two !== 'bb' && three !== '3' && four !== 'pies') {
            return setPkt(1)
        }
        if (one !== 'odp1' && two === 'bb' && three !== '3' && four !== 'pies') {
            return setPkt(1)
        }
        if (one !== 'odp1' && two !== 'bb' && three === '3' && four !== 'pies') {
            return setPkt(1)
        }
        if (one !== 'odp1' && two !== 'bb' && three !== '3' && four === 'pies') {
            return setPkt(1)
        }
        if (one !== 'odp1' && two !== 'bb' && three !== '3' && four !== 'pies') {
            return setPkt(0)
        }
    }
    const wyświetlOdp = (zad, odp) => {
        if (zad === odp) {
            return 'Świetnie!'
        }
        else {
            return 'Niestey nie :('
        }
    }
    return (
        <div>
            <h3>
                Zadanie2
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quae officia rerum, voluptatem voluptate a placeat eos debitis est tenetur dolore nam dignissimos obcaecati facere? Eligendi dolorem voluptatem ad optio!
                Quis ipsum ipsam accusantium maxime itaque, excepturi in eius porro, voluptas blanditiis modi amet repellendus facilis sit. Nobis nemo ea suscipit similique numquam! Deleniti blanditiis at, qui dolores obcaecati est!</p>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(e) => {
                e.preventDefault();
                setStateForm(true);
                policzPunkty()
            }}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <label>
                    <input type="radio" name='pyt1' value={'odp1'} onChange={(e) => setOne(e.target.value)} />
                    odp1
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'odp2'} onChange={(e) => setOne(e.target.value)} />
                    odp2
                </label>
                <label>
                    <input type="radio" name='pyt1' value={'odp3'} onChange={(e) => setOne(e.target.value)} />
                    odp3
                </label>
                {stateForm ? <p>{wyświetlOdp(one, 'odp1')}</p> : <></>}
                <p>Lorem ipsum dolor sit.</p>
                <label>
                    <input type="radio" name='pyt2' value={'aa'} onChange={(e) => setTwo(e.target.value)} />
                    aa
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'bb'} onChange={(e) => setTwo(e.target.value)} />
                    bb
                </label>
                <label>
                    <input type="radio" name='pyt2' value={'cc'} onChange={(e) => setTwo(e.target.value)} />
                    cc
                </label>
                {stateForm ? <p>{wyświetlOdp(two, 'bb')}</p> : <></>}
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <label>
                    <input type="radio" name='pyt3' value={"1"} onChange={(e) => setThree(e.target.value)} />
                    1
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"2"} onChange={(e) => setThree(e.target.value)} />
                    2
                </label>
                <label>
                    <input type="radio" name='pyt3' value={"3"} onChange={(e) => setThree(e.target.value)} />
                    3
                </label>
                {stateForm ? <p>{wyświetlOdp(three, '3')}</p> : <></>}
                <p>Lorem, ipsum dolor.</p>
                <label>
                    <input type="radio" name='pyt4' value={"kot"} onChange={(e) => setFour(e.target.value)} />
                    kot
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"pies"} onChange={(e) => setFour(e.target.value)} />
                    pies
                </label>
                <label>
                    <input type="radio" name='pyt4' value={"oba"} onChange={(e) => setFour(e.target.value)} />
                    oba
                </label>
                {stateForm ? <p>{wyświetlOdp(four, 'pies')}</p> : <></>}
                {stateForm ? <p></p> :
                    <button className={classes.btnSub}>Zatwierdź</button>}
            </form>
            {stateForm ? <button className={classes.btnSub} onClick={() =>
                setStateForm(false)}>Wyczyść</button> : <p></p>}
            <p>{pkt}</p>
<Zadanie4/>
        </div>
    )
}
