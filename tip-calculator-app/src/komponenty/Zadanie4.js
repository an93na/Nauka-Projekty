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
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <img src={mapa} alt="mapa" style={{ width: 100, marginBottom: 5, borderRadius: 5 }} />
                        <input type="text" style={{ width: 40, borderRadius: 5, padding: 5, textAlign: 'center' }} placeholder='numer' />
                    </div>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <img src={serce} alt="serce" style={{ width: 100, marginBottom: 5, borderRadius: 5 }} />
                        <input type="text" style={{ width: 40, borderRadius: 5, padding: 5, textAlign: 'center' }} placeholder='numer' />
                    </div>
                </div>
                <div className={classes.containerObr} style={{ flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <img src={olowek} alt="olowek" style={{ width: 100, marginBottom: 5, borderRadius: 5 }} />
                        <input type="text" style={{ width: 40, borderRadius: 5, padding: 5, textAlign: 'center' }} placeholder='numer' />
                    </div>
                    <div style={{ border: '1px solid white', padding: 10, borderRadius: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <img src={rower} alt="rower" style={{ width: 100, marginBottom: 5, borderRadius: 5 }} />
                        <input type="text" style={{ width: 40, borderRadius: 5, padding: 5, textAlign: 'center' }} placeholder='numer' />
                    </div>
                </div>
                <button>Zatwierdź</button>
            </form>
        </div>
    )
}
