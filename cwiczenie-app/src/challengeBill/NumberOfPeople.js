import React from 'react'
import person from '../asets/person.png'
import classes from '../style/StyleBill.module.css'

export const NumberOfPeople = (props) => {
  const {numberOfPeople, setNumberOfPeople} = props
  return (
    <div>
      <h6>NumberOfPeople</h6>
      <div className={classes.rightKolum} style={{ padding: '5px' }}>
        <img src={person} alt="person" className={classes.imgPerson} />
        <input type="text" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}/>
      </div>
    </div>
  )
}
