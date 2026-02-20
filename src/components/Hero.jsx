import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState } from 'react'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    )

    const handleVideo = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideo)
        return () => {
            window.removeEventListener('resize', handleVideo)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2.5 })
        gsap.to('#call', { opacity: 1, y: -50, delay: 3.5 })
    }, [])

    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <div>
                    <p className='hero-title' id='hero'>iPhone 15 pro</p>
                </div>
                <div className='md:w-10/12 w-9/12'>
                    <video
                        className='pointer-events-none'
                        autoPlay
                        muted
                        playsInline={true}
                        key={videoSrc}
                    >
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div id='call' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a
                    href='#highlights'
                    className='px-10 py-1 text-gray-100 font-semibold text-3xl bg-sky-200 rounded-full'
                >
                    Buy
                </a>
                <p className='font-normal text-xl'>
                    From <span>$199</span>/month or <span>$999</span>
                </p>
            </div>
        </section>
    )
}

export default Hero
