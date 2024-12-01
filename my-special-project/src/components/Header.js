import React from 'react'

export const Header = () => {
    return (
        <header>
            <nav style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <div><p>1</p></div>
                <div><p>2</p></div>
                <div><p>3</p></div>
            </nav>
            <h1>My Portfolio</h1>
        </header>
    )
}
