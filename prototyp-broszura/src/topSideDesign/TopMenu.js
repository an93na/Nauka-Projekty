import React from 'react'
import kartki from './iconmonstr-layer-multiple-lined-240.png'

export const TopMenu = () => {
  return (
    <div style={{backgroundColor: 'deeppink', padding:10, margin: 5}}>
        <h3 style={{marginLeft:40}}>Czytaj bo tego potrzebujesz</h3>
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex'}}>
                <img src={kartki} alt="kartki" style={{width: '30px', marginLeft: 40}} />
                <p style={{textAlign:'center'}}>kartki</p>
            </div>
        </div>
    </div>
  )
}
