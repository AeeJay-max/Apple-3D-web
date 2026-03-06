import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {useMediaQuery} from 'react-responsive'

const isTablet = useMediaQuery({
    query: '(max-width: 1024px)'
})

useGSAP(()=>{
    if (!isTablet) {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#showcase',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true
            }
        });
        timeline.to('.mask img', {
            transform: 'scale(1.1)'
        }).to('.content',{opacity: 1, y: 0, ease: 'power1.in'})
    }
},[isTablet])

const ShowCase = () => {
  return (
    <section id='showcase' className='relative'>
      <div className='relative lg:overflow-hidden'>
        <video src='/assets/mac_Assets/videos/game.mp4' loop muted autoPlay playsInline />

        <div className='absolute h-full top-0 lg:-top-20 xl:top-0 mask'>
            <img src='/assets/mac_Assets/mask-logo.svg' />
        </div>
      </div>

      <div className='relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0'>
        <div className='container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20'>
            <div className='lg:max-w-md'>
                <h2 className='text-white font-semibold text-3xl lg:text-6xl'>Rocket Chip</h2>

                <div className='space-y-5 mt-7 pe-10'>
                    <p>
                        Introducing {" "}
                        <span className='text-white'>
                            M4, the next generation of Apple silicon
                        </span>
                        . M4 powers
                    </p>
                    <p>
                        It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that's unbelievably thin, light, and powerful.
                    </p>
                    <p>
                        A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen CPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips
                    </p>
                    <p className='text-primary'>Learn more about Apple Intelligence</p>
                </div>
            </div>

            <div className='max-w-3xs space-y-14'>
                <div className='space-y-2'>
                    <p className='text-sm font-medium'>Up to</p>
                    <h3 className='text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10'>4x faster</h3>
                    <p className='text-sm font-medium'>pro rendering performance than M2</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-sm font-medium'>Up to</p>
                    <h3 className='text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10'>1.5x faster</h3>
                    <p className='text-sm font-medium'>CPU performance than M2</p>
                </div>
                <div></div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShowCase
