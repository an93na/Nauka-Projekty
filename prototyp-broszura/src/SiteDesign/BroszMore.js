import React from 'react'

export const BroszMore = (props) => {
    const styleBtn = {
        width: 200,
        height: 150,
        backgroundColor: "palevioletred",
        padding: 20,
        textAlign: "center",
        borderRadius: "10px",
        border: "1px solid white",
        fontSize: 20,
        fontWeight: "bold",
      }
  return (
    <div>
        <h3>Wybierz poziom:</h3>
        <div style={{display: 'flex', gap: 20}}>
        <button style={styleBtn}>Podstawowy</button>
        <button style={styleBtn}>Średnio Zaawansowany</button>
        <button style={styleBtn}>Zaawansowany</button>
    </div>
    </div>
    
  )
}
