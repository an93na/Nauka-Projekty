import React from 'react'
import person from '../asets/person.png'
import classes from '../style/StyleBill.module.css'

export const NumberOfPeople = (props) => {
  const { numberOfPeople, setNumberOfPeople } = props
  return (
    <div style={{margin: '10px'}}>
      <h6>NumberOfPeople</h6>
      <div className={classes.kolumnPerson}>
        <img src={person} alt="person" className={classes.imgPerson} />
        <input type="text" className={classes.inputPerson} value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
      </div>
    </div>
  )
}
