import React from 'react'
import classes from '../style/StyleModule.module.css'
import przyklad1 from '../assets/przyklad1.png'
import przyklad2 from '../assets/przyklad2.png'
import przyklad3 from '../assets/przyklad3.png'

export const Przyklad = () => {
  return (
    <div className={classes.sekcja}>
      <h3>
        Przyklad
      </h3>
      <p>Część I zadania</p>
      <p className={classes.pPrzyklad}>Jeśli gdzieś się pomylisz lub chcesz spróbować jeszcze raz to kliknij przycisk Reset albo wyczyść, po sekcji ktorą chcesz poprawić</p>
      <div className={classes.divPrzyklad}>
        <img src={przyklad1} alt="przyklad1" className={classes.imgPrzyklad} />
      </div>
      <p className={classes.pPrzyklad}>Po wpisaniu numerków klikamy przycisk Zatwierdź i jeśli jest dobrze do przechodzimy do drugiego zadania</p>
      <p>Część II zadania</p>
      <div className={classes.divPrzyklad}>
        <img src={przyklad2} alt="przyklad1" className={classes.imgPrzyklad} />
      </div>
      <p className={classes.pPrzyklad}>W tej części wybieramy jedną prawidłową odpowiedź. A następnie klikamy przycisk Zatwierdź. Jeśli odpowiedzi są prawidłowe to przechodzimy do ostatniego zadania</p>
      <p>Część III zadania</p>
      <div className={classes.divPrzyklad}>
        <img src={przyklad3} alt="przyklad1" className={classes.imgPrzyklad3} />
      </div>
      <p className={classes.pPrzyklad}>W tej części wybieramy jedną prawidłową odpowiedź z rozwijanej listy. Następnie klikamy przycisk Sprawdź. Jeśli odpowiedzi są prawidłowe to udało Ci się ukończyć całe zadanie.</p>
    </div>
  )
}
