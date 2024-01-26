import React from 'react'
import classes from '../style/Animacja1.module.css'

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
