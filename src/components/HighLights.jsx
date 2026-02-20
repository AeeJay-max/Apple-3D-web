import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import VideoCarousel from './VideoCarousel'

const HighLights = () => {

    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0, delay: 1.5 })
    }, [])

    return (
        <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full items-end justify-between'>
                    <h1 id='title' className='section-heading'>The Highlights</h1>
                </div>
                <VideoCarousel/>
            </div>

        </section>
    )
}

export default HighLights
