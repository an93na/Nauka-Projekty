import React from 'react'
import { BillEle } from './BillEle'
import { SelectTip } from './SelectTip'
import { NumberOfPeople } from './NumberOfPeople'

export const LeftSide = (props) => {
  const { numberOfPeople, setNumberOfPeople } = props
  const { procent, setProcent } = props
  const { bill, setBill } = props
  return (
    <div>
      <BillEle bill={bill} setBill={setBill} />
      <SelectTip procent={procent} setProcent={setProcent} />
      <NumberOfPeople numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
    </div>
  )
}
