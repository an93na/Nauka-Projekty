import React from 'react'
import classes from '../style/Animacja1.module.css'
import mapa from '../assets/mapa.jpg'
import olowek from '../assets/ołowek.png'
import rower from '../assets/rower.png'
import serce from '../assets/serce.png'

export const Zadanie4 = () => {
    return (
        <div >
            <form action="" >
                <div className={classes.containerObr} style={{ flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5 }}>
                        <img src="" alt="" />
                        <input type="text" style={{ width: 30 }} placeholder='nr' />
                    </div>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5, }}>
                        <img src="" alt="" />
                        <input type="text" style={{ width: 30 }} placeholder='nr' />
                    </div>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5 }}>
                        <img src="" alt="" />
                        <input type="text" style={{ width: 30 }} placeholder='nr' />
                    </div>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5 }}>
                        <img src="" alt="" />
                        <input type="text" style={{ width: 30 }} placeholder='nr' />
                    </div>
                </div>
                <button>Zatwierdź</button>
            </form>
        </div>
    )
}
