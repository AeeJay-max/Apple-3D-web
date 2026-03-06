import React, { useRef } from 'react'
import {
  performanceImages,
  performanceImgPositions,
} from './constants'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Performance = () => {
  const sectionRef = useRef(null)
  const imagesRef = useRef([])
  const textsRef = useRef([])
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(
    () => {
      if (isMobile) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${performanceImages.length * 1200}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      performanceImages.forEach((item, index) => {
        const img = imagesRef.current[index]
        const text = textsRef.current[index]
        if (!img || !text) return

        const base = index * 2

        // IMAGE IN
        tl.fromTo(
          img,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1 },
          base
        )

        // TEXT IN
        tl.fromTo(
          text,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          base + 0.3
        )

        // IMAGE + TEXT OUT (except last)
        if (index !== performanceImages.length - 1) {
          tl.to(
            [img, text],
            { opacity: 0, y: -20, duration: 0.8 },
            base + 1.2
          )
        }
      })

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    },
    { scope: sectionRef, dependencies: [isMobile] }
  )

  return (
    <section
      ref={sectionRef}
      id="performance"
      className="relative h-screen w-dvw overflow-hidden bg-[url(/assets/mac_Assets/mask-logo.svg) bg-white]"
    >
      {/* IMAGES (BACKGROUND) */}
      <div className="absolute inset-0 w-full h-full">
        {performanceImages.map((item, index) => {
          const pos = performanceImgPositions.find(p => p.id === item.id)

          return (
            <img
              key={item.id}
              ref={el => (imagesRef.current[index] = el)}
              src={item.src}
              alt=""
              className="absolute opacity-0 w-96 "
              style={{
                left: pos?.left !== undefined ? `${pos.left}%` : 'auto',
                right: pos?.right !== undefined ? `${pos.right}%` : 'auto',
                bottom: pos?.bottom !== undefined ? `${pos.bottom}%` : 'auto',
              }}
            />
          )
        })}
      </div>

      {/* TEXT (FOREGROUND) */}
      <div className="relative z-10 h-full w-full pointer-events-none">
        {performanceImages.map((item, index) => {
          const isP5 = item.id === 'p5'

          return (
            <p
              key={item.id}
              ref={el => (textsRef.current[index] = el)}
              className={`absolute opacity-0 text-white font-light text-lg lg:text-xl max-w-xl text-center
                ${isP5 ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : 'left-1/2 bottom-[15%] -translate-x-1/2'}
              `}
            >
              {item.text}
            </p>
          )
        })}
      </div>
    </section>
  )
}

export default Performance
