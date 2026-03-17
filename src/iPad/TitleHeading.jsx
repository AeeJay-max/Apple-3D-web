import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const TitleHeading = () => {

    useGSAP(() => {
        gsap.to('#heading', {
            opacity: 1,
            y: 0,
            delay: 1
        })
    }, [])

    return (
        <div>
            <h1 id="heading" className="section-heading">Get the highlights.</h1>
        </div>
    )
}

export default TitleHeading
