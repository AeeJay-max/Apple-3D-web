import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const ShowCase = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  })

  useGSAP(() => {
    if (isTablet) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#showcase',
        start: 'top center',
        end: '+=400',
        scrub: true,
      },
    })

    tl.fromTo(
      '.mask img',
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 0.7,
        scale: 1.1,
        ease: 'none',
      }
    ).to(
      '.content',
      {
        opacity: 1,
        y: 0,
        ease: 'power1.out',
      },
      '<'
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [isTablet])

  return (
    <section
      id="showcase"
      className="relative bg-black py-40"
    >
      {/* VIDEO + MASK (75% viewport width) */}
      <div className="relative w-[75vw] aspect-video mx-auto overflow-hidden rounded-3xl">
        <video
          src="/assets/mac_Assets/videos/game.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 mask pointer-events-none">
          <img
            src="/assets/mac_Assets/mask-logo.svg"
            alt="Mask"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="content mt-24 opacity-0 translate-y-10 max-w-[100rem] px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-24">
          <div className="lg:max-w-lg">
            <h2 className="text-white font-semibold text-5xl lg:text-6xl">
              Rocket Chip
            </h2>

            <div className="space-y-6 mt-8 text-dark-100 text-lg">
              <p>
                Introducing{' '}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                .
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness.
              </p>
              <p className="text-primary cursor-pointer">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="flex gap-24">
            <div className="text-center text-dark-100">
              <p className="text-sm font-medium">Up to</p>
              <h3 className="text-white text-4xl font-semibold mt-4">
                4× faster
              </h3>
              <p className="text-sm">
                pro rendering performance than M2
              </p>
            </div>

            <div className="text-center text-dark-100">
              <p className="text-sm font-medium">Up to</p>
              <h3 className="text-white text-4xl font-semibold mt-4">
                1.5× faster
              </h3>
              <p className="text-sm">CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowCase
