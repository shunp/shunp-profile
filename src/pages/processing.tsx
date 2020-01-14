import React from 'react'
import Canvas from '../components/canvas'
import { flowers, tornado } from '../sketches'

export default () => {
    return (
        <>
            <Canvas sketch={flowers} />
            <Canvas sketch={tornado} />
        </>
    )
}