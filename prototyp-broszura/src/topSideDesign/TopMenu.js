import React from 'react'
import kartki from './iconmonstr-layer-multiple-lined-240.png'

export const TopMenu = () => {
  return (
    <div style={{backgroundColor: 'deepskyblue', padding:10, margin: 5}}>
        <h3 style={{marginLeft:40, marginBottom: 20, color: 'black'}}>Czytaj bo tego potrzebujesz</h3>
        <div style={{display: 'flex', gap: 20, flexDirection: 'row', flexWrap: 'wrap', marginLeft: '40px', marginTop: 0}}>
            <div style={{display: 'flex', border: '1px solid black', padding: 10, borderRadius: '10px', cursor: 'pointer'}}>
                <img src={kartki} alt="kartki" style={{width: '20px'}} />
                <p style={{textAlign:'center', margin: 'auto', color: 'black'}}>kartki</p>
            </div>
            <div style={{display: 'flex', border: '1px solid black', padding: 10, borderRadius: '10px'}}>
                <img src={kartki} alt="kartki" style={{width: '20px'}} />
                <p style={{textAlign:'center', margin: 'auto', color: 'black'}}>kartki</p>
            </div>
            <div style={{display: 'flex', border: '1px solid black', padding: 10, borderRadius: '10px'}}>
                <img src={kartki} alt="kartki" style={{width: '20px'}} />
                <p style={{textAlign:'center', margin: 'auto', color: 'black'}}>kartki</p>
            </div>
            <div style={{display: 'flex', border: '1px solid black', padding: 10, borderRadius: '10px'}}>
                <img src={kartki} alt="kartki" style={{width: '20px'}} />
                <p style={{textAlign:'center', margin: 'auto', color: 'black'}}>kartki</p>
            </div>
            <div style={{display: 'flex', border: '1px solid black', padding: 10, borderRadius: '10px'}}>
                <img src={kartki} alt="kartki" style={{width: '20px'}} />
                <p style={{textAlign:'center', margin: 'auto', color: 'black'}}>kartki</p>
            </div>
        </div>
    </div>
  )
}
