import React, { useEffect, useRef } from 'react'



const HeroiPad = () => {

  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackrate = 2;
  })

  return (
    <section id='iPadHero' className='flex justify-center flex-col'>
      <div className=''>
        <h1 className='text-center text-7xl text-white font-semibold'>iPad Pro</h1>
        <h1 className='bg-[linear-gradient(100deg,#e36d32_5%,#a5fff9_100%)] bg-clip-text text-transparent font-semibold text-center text-9xl'>Mmmmm.{' '}<span className='bg-[linear-gradient(100deg,#258be4_5%,#a5fff9_100%)] bg-clip-text text-transparent font-semibold text-center text-9xl'>Power.</span></h1>
      </div>

      <video src='/assets/iPad_Assets/videos/iPad-ProHero.mp4' autoPlay muted playsInline />

      <div id='call' className='flex flex-col items-center'>
        <a
          href='#highlights'
          className='px-10 py-1 text-gray-100 font-semibold text-3xl bg-sky-200 rounded-full'
        >
          Buy
        </a>
        <p className='font-normal text-xl '>
          From <span>$49.91</span>/mo. for 12 mo. <span>$599</span>
        </p>
      </div>
    </section>
  )
}

export default HeroiPad

