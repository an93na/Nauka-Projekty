import React, { useState } from 'react'
import classes from '../style/Animacja1.module.css'

export const Zadanie2 = () => {
    const [stateForm, setStateForm] = useState(false)
    return (
        <div>
            <h3>
                Zadanie2
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, quae officia rerum, voluptatem voluptate a placeat eos debitis est tenetur dolore nam dignissimos obcaecati facere? Eligendi dolorem voluptatem ad optio!
                Quis ipsum ipsam accusantium maxime itaque, excepturi in eius porro, voluptas blanditiis modi amet repellendus facilis sit. Nobis nemo ea suscipit similique numquam! Deleniti blanditiis at, qui dolores obcaecati est!</p>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(e) => {
                e.preventDefault()
                setStateForm(true)
            }}>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <label>
                    <input type="radio" name='pyt1' />
                    odp1
                </label>
                <label>
                    <input type="radio" name='pyt1' />
                    odp2
                </label>
                <label>
                    <input type="radio" name='pyt1' />
                    odp3
                </label>
                <p>Lorem ipsum dolor sit.</p>
                <label>
                    <input type="radio" name='pyt2' />
                    aa
                </label>
                <label>
                    <input type="radio" name='pyt2' />
                    bb
                </label>
                <label>
                    <input type="radio" name='pyt2' />
                    cc
                </label>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <label>
                    <input type="radio" name='pyt3' />
                    1
                </label>
                <label>
                    <input type="radio" name='pyt3' />
                    2
                </label>
                <label>
                    <input type="radio" name='pyt3' />
                    3
                </label>
                <p>Lorem, ipsum dolor.</p>
                <label>
                    <input type="radio" name='pyt4' />
                    kot
                </label>
                <label>
                    <input type="radio" name='pyt4' />
                    pies
                </label>
                <label>
                    <input type="radio" name='pyt4' />
                    oba
                </label>
                {stateForm ? <p></p> :
                    <button className={classes.btnSub}>Zatwierdź</button>}
            </form>
            {stateForm ? <button className={classes.btnSub} onClick={() => setStateForm(false)}>Wyczyść</button> : <p></p>}
        </div>
    )
}
