import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const HighLightsiPad = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top 70%',
      },
      y: 0,
      opacity: 1,
      stagger: 0.4,
      duration: 1,
      ease: 'power2.out',
    })
  }, [isMobile])

  return (
    <section
      id="highlights"
      className="container mx-auto lg:py-40 px-5"
    >
      {/* HEADINGS */}
      <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">
        Design.<br />A powerhouse of portability.
      </h2>

      <h3 className="text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10 max-w-4xl mx-auto">
        Despite an unbelievably thin and light design, iPad Pro delivers
        astonishing power and all-day battery life for game-changing
        productivity.
      </h3>

      {/* IMAGE CARD */}
      <div className="bg-black p-10 rounded-3xl flex flex-col items-center gap-7 mt-16 max-w-4xl mx-auto">
        <img
          src="/assets/iPad_Assets/images/Design/design1.jpg"
          alt="Design"
        />
        <p className="font-semibold text-4xl text-center">
          A stunning Liquid Retina XDR display.
        </p>
      </div>

      {/* GRADIENT TEXT */}
      <h3 className="text-center mt-20 font-semibold text-5xl lg:text-9xl">
        <span className="bg-[linear-gradient(91deg,#0096ff_0%,#bb64ff_42%,#f2416b_74%,#eb7500_100%)] bg-clip-text text-transparent">
          Mics.
        </span>
        <br />
        <span className="bg-[linear-gradient(91deg,#eb7500_0%,#bb64ff_42%,#f2416b_74%,#eb7500_100%)] bg-clip-text text-transparent">
          Cameras.
        </span>
        <br />
        <span className="bg-[linear-gradient(91deg,#bb64ff_0%,#eb7500_42%,#eb7500_74%,#f2416b_100%)] bg-clip-text text-transparent">
          Action.
        </span>
      </h3>

      <p className="text-2xl md:text-3xl text-center font-semibold text-slate-400 mt-10 max-w-4xl mx-auto">
        Shoot, edit, and share all on one device with a pro camera system,
        studio-quality mics, and four speakers.
      </p>

      {/* ✅ WIDTH-CONSTRAINED GRADIENT + GLOW */}
      <div className="mt-20">
        <div className="max-w-6xl mx-auto px-2">
          <div className="bg-[linear-gradient(91deg,#0096ff_0%,#bb64ff_42%,#f2416b_74%,#eb7500_100%)] p-[2px] rounded-3xl animate-glow">
            <div className="bg-black rounded-3xl p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-[#F5F5F7]">

                {/* LEFT */}
                <div className="left-column opacity-0 -translate-y-5 flex flex-col gap-4">
                  <div className="bg-neutral-900 p-8 rounded-2xl flex gap-6">
                    <img src="/assets/iPad_Assets/images/ipadpro13_gen7_camera__i9tftpwpgaeu_large_2x.png" alt="Camera" />
                    <p className="font-semibold text-3xl">
                      12MP Wide camera with adaptive True Tone flash.
                    </p>
                  </div>

                  <div className="bg-neutral-900 p-8 rounded-2xl flex gap-6">
                    <img src="/assets/iPad_Assets/images/frontCamera.png" alt="Front Camera" />
                    <p className="font-semibold text-3xl">
                      Landscape 12MP Center Stage camera.
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="right-column opacity-0 -translate-y-5 flex flex-col gap-4">
                  <div className="bg-neutral-900 p-8 rounded-2xl flex gap-6">
                    <img src="/assets/iPad_Assets/images/wave.png" alt="Mic" />
                    <p className="font-semibold text-3xl">
                      Studio-quality microphones.
                    </p>
                  </div>

                  <div className="bg-neutral-900 p-8 rounded-2xl flex gap-6">
                    <img src="/assets/iPad_Assets/images/speaker.png" alt="Speaker" />
                    <p className="font-semibold text-3xl">
                      Four-speaker sound system.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HighLightsiPad
