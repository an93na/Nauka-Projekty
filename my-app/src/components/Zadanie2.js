import React from 'react'
import classes from '../style/StyleModule.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { five, four, one, three, two } from '../slice/Zad2slice';

export const Zadanie2 = () => {
    const oneValue = useSelector(state => state.zad2.one);
    const twoValue = useSelector(state => state.zad2.two);
    const threeValue = useSelector(state => state.zad2.three);
    const fourValue = useSelector(state => state.zad2.four);
    const fiveValue = useSelector(state => state.zad2.five);
    const dispatch = useDispatch()

    const onSubmit = (e) => {e.preventDefault()}

    return (
        <div>
            <p>Część II</p>
            <p>W tym zadaniu należy wybrać jedną prawidłową odpowiedź. Nie ma łatwo ponieważ tutaj zakresem wiedzy jest całe moje CV.</p>
            <form action="" style={{ textAlign: 'center' }} onSubmit={onSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <p>1) Ile umiejętności technicznych wymieniłam?</p>
                    <label>
                        <input type='radio' name='1' value={'1'} onChange={(e) => dispatch(one(e.target.value))} /> 1
                    </label>
                    <label>
                        <input type='radio' name='1' value={'2'} onChange={(e) => dispatch(one(e.target.value))} /> 2
                    </label>
                    <label>
                        <input type='radio' name='1' value={'3'} onChange={(e) => dispatch(one(e.target.value))} /> 3
                    </label>
                    <label>
                        <input type='radio' name='1' value={'4'} onChange={(e) => dispatch(one(e.target.value))} /> 4
                    </label>
                    <p>2) Jakie jest moje wykształcenie?</p>
                    <label>
                        <input type='radio' name='2' value={'1'} onChange={(e) => dispatch(two(e.target.value))} /> inżynier
                    </label>
                    <label>
                        <input type='radio' name='2' value={'2'} onChange={(e) => dispatch(two(e.target.value))} /> magister
                    </label>
                    <label>
                        <input type='radio' name='2' value={'3'} onChange={(e) => dispatch(two(e.target.value))} /> magister inżynier
                    </label>
                    <label>
                        <input type='radio' name='2' value={'4'} onChange={(e) => dispatch(two(e.target.value))} /> doktor
                    </label>
                    <p>3) Jaki kierunek studiowałam jako ostatni?</p>
                    <label>
                        <input type='radio' name='3' value={'1'} onChange={(e) => dispatch(three(e.target.value))} /> Nawigacja Morska
                    </label>
                    <label>
                        <input type='radio' name='3' value={'2'} onChange={(e) => dispatch(three(e.target.value))} /> Hydrografia
                    </label>
                    <label>
                        <input type='radio' name='3' value={'3'} onChange={(e) => dispatch(three(e.target.value))} /> Technologie Kosmiczne i Satelitarne
                    </label>
                    <label>
                        <input type='radio' name='3' value={'4'} onChange={(e) => dispatch(three(e.target.value))} /> Informatyka
                    </label>
                    <p>4) W którym roku uczestniczyłam w kursie Front-end developer?</p>
                    <label>
                        <input type='radio' name='4' value={'1'} onChange={(e) => dispatch(four(e.target.value))} /> 2020/2021
                    </label>
                    <label>
                        <input type='radio' name='4' value={'2'} onChange={(e) => dispatch(four(e.target.value))} /> 2021/2022
                    </label>
                    <label>
                        <input type='radio' name='4' value={'3'} onChange={(e) => dispatch(four(e.target.value))} /> 2022/2023
                    </label>
                    <label>
                        <input type='radio' name='4' value={'4'} onChange={(e) => dispatch(four(e.target.value))} /> 2023/2024
                    </label>
                    <p>5) Jakim jezyku obcy oprócz angielskiego wspominam w CV?</p>
                    <label>
                        <input type='radio' name='5' value={'1'} onChange={(e) => dispatch(five(e.target.value))} /> niemiecki
                    </label>
                    <label>
                        <input type='radio' name='5' value={'2'} onChange={(e) => dispatch(five(e.target.value))} /> rosyjski
                    </label>
                    <label>
                        <input type='radio' name='5' value={'3'} onChange={(e) => dispatch(five(e.target.value))} /> francuski
                    </label>
                    <label>
                        <input type='radio' name='5' value={'4'} onChange={(e) => dispatch(five(e.target.value))} /> hiszpański
                    </label>
                </div>
                <button type='submit' className={classes.btnZ1}>Zatwierdź</button>
            </form>
        </div>
    )
}
