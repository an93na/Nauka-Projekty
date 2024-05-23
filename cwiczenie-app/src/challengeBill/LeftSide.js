import React from 'react'
import { BillEle } from './BillEle'
import { SelectTip } from './SelectTip'
import { NumberOfPeople } from './NumberOfPeople'

export const LeftSide = (props) => {
  
  return (
    <div>
      <BillEle />
      <SelectTip />
      <NumberOfPeople />
    </div>
  )
}
