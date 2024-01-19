import React, { useState } from 'react'
import { Animacja1 } from './Animacja1'
import { StronaStartowa } from './StronaStartowa'

export const StronaCalosc = () => {
    const [startowa, setStartowa] = useState(false)
    return (
        <div>
            {startowa ?
                <Animacja1 /> : <StronaStartowa setStartowa={setStartowa} startowa={startowa} />}
        </div>
    )
}
