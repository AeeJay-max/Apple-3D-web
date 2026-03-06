import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const HighLightsMac = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  useGSAP(() => {
    gsap.to(['.left-column','.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top top'
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <section id='highlights' className='container mx-auto lg:py-40 max-lg:px-5'>
      <h2 className='text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto h2'>There's never been a better time to upgrade</h2>
      <h3 className='text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10 h3'>Here's what you get with the new MacBook Pro</h3>

      <div className='masonry grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7]'>
        <div className='left-column flex flex-col justify-between gap-5 opacity-0 -translate-y-5'>
          <div className='h-full bg-[url(/assets/mac_Assets/highlight-bg.png)] bg-no-repeat bg-cover p-10 2xl:pt-32 lg:pt-20 rounded-3xl'>
            <img src='/assets/mac_Assets/laptop.png' alt='Laptop' />
            <p className='font-semibold text-4xl max-w-2xs'>Flt through demanding tasks up to 9.8x faster.</p>
          </div>
          <div className='bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-7'>
            <img src='/assets/mac_Assets/sun.png' alt='Sun' />
            <p className='font-semibold text-4xl max-w-2xs'>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div className='right-column flex flex-col justify-between gap-5 opacity-0  -translate-y-5'>
          <div className='apple-gradient p-10 rounded-3xl flex items-center gap-7 relative'>
            <img src='/assets/mac_Assets/ai.png' alt='Ai' />
            <p className='font-semibold text-4xl max-w-2xs'>Built for Apple<br /> <span className='bg-[linear-gradient(91deg,#0096ff_0%,#bb64ff_42%,#f2416b_74%,#eb7500_100%)] bg-clip-text text-transparent' >Intelligence.</span></p>
          </div>
          <div className='h-full bg-[#1D1D1F] p-10 2xl:pt-32 lg:pt-20 rounded-3xl'>
            <img src='/assets/mac_Assets/battery.png' alt='Battery' />
            <p className='font-semibold lg:text-2xl 2xl:text-3xl'>
              Up to <span className='bg-[linear-gradient(90deg,#35a98a_0%,#6dd400_100%)] bg-clip-text text-transparent'>{' '}14 more{' '}</span> <br />
              <span className='green-gradient-text'>hours</span> battery life. <br />
              <span className='text-[#464648]'>{' '}(Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighLightsMac
