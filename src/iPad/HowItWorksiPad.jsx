import React, { useRef } from 'react'
import { chipiPad, iPadFrameimg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateWithGsap } from '../utils/animations'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const HowItWorksiPad = () => {
  const videoRef = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    /* CHIP ANIMATION */
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: 'top 80%',
      },
      opacity: 0,
      scale: 1.8,
      duration: 1.6,
      ease: 'power2.out',
    })

    /* TEXT FADE IN */
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.g_fadeIn',
        start: 'top 85%',
      },
    })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">

        {/* CHIP */}
        <div id="chip" className="flex-center w-full my-20">
          <img
            src={chipiPad}
            alt="Apple M-series chip"
            width={300}
            height={300}
          />
        </div>

        {/* HEADLINE */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-3xl font-semibold text-slate-400 leading-snug">
            The M-series chip unlocks extraordinary performance on iPad Pro.
            <br />
            A powerful GPU, advanced Neural Engine, and unified memory
            <br />
            architecture dramatically accelerate professional workflows,
            <br />
            AI tasks, and console-class gaming.
          </h2>

          <p className="text-white font-semibold text-xl md:text-2xl py-10">
            Up to{' '}
            <span className="text-gray text-3xl md:text-4xl">6× faster</span>{' '}
            graphics performance for pro apps
          </p>

          <p className="text-white font-semibold text-xl md:text-2xl pb-10">
            Up to{' '}
            <span className="text-gray text-3xl md:text-4xl">4× faster</span>{' '}
            machine-learning performance
          </p>
        </div>

        {/* iPAD FRAME + SCREEN */}
        <div className="mt-14 mb-20">
          <div className="relative flex-center">

            {/* SCREEN (MASKED CONTENT) */}
            <div
              className="
                absolute
                w-[95%]
                h-[88%]
                rounded-[48px]
                overflow-hidden
                z-0
              "
            >
              <img
                src="/assets/iPad_Assets/images/Frametop.jpg"
                alt="iPad screen content"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FRAME */}
            <img
              src={iPadFrameimg}
              alt="iPad Pro frame"
              className="relative z-10"
            />

          </div>

          <p className="text-gray font-semibold text-center mt-4">
            Console-quality gaming on iPad Pro
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="flex md:flex-row flex-col gap-24 text-center">

          <div className="flex-1 flex-center flex-col g_fadeIn">
            <p className="text-gray text-xl md:font-semibold">
              iPad Pro delivers
              <span className="text-white"> desktop-class performance </span>
              in an impossibly thin design.
            </p>
          </div>

          <div className="flex-1 flex-center g_fadeIn">
            <p className="text-gray text-xl md:font-semibold">
              Pro apps and
              <span className="text-white">
                {' '}AAA-level games feel smoother and more immersive
              </span>{' '}
              than ever.
            </p>
          </div>

          <div className="flex-1 flex-center flex-col g_fadeIn">
            <p className="text-gray text-xl">New</p>
            <p className="text-white text-3xl md:text-5xl font-semibold my-2">
              Pro-class GPU
            </p>
            <p className="text-gray text-xl">
              with hardware-accelerated ray tracing
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorksiPad
