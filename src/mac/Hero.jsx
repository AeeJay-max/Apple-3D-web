import React, { useEffect, useRef } from 'react'



const Hero = () => {

  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackrate = 2;
  })

  return (
    <section id='macHero' className='flex justify-center flex-col'>
      <div className=''>
        <h1 className='text-center text-7xl text-white font-semibold'>MacBook Pro</h1>
        <div className='flex justify-center'>
          <img src='/assets/mac_Assets/title.png' alt='MacBook Title' />
        </div>
        
      </div>

      <video src='/assets/mac_Assets/videos/heroMac.mp4' autoPlay muted playsInline />

      <div id='call' className='flex flex-col items-center'>
        <a
          href='#highlights'
          className='px-10 py-1 text-gray-100 font-semibold text-3xl bg-sky-200 rounded-full'
        >
          Buy
        </a>
        <p className='font-normal text-xl'>
          From <span>$133</span>/month or for 12 months <span>$1599</span>
        </p>
      </div>
    </section>
  )
}

export default Hero

