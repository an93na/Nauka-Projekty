import React from 'react'
import { Dessert } from './Dessert'

export const Desserts = () => {
  return (
    <div>
      <h3>
        Desserts
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
          <Dessert />
          <Dessert />
          <Dessert />
        </div>
      </div>
    </div>
  )
}
