import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'

import Studio_Lights from './helpers/Studio_Lights'
import MacBookModel from './models/Macbook'
import { features, featureSequence } from './constants'
import useMacBookStore from './store'

/* ============================= MODEL SCROLL ============================= */

const ModelScroll = () => {
  const groupRef = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const { setTexture } = useMacBookStore()

  const [modelReady, setModelReady] = useState(false)

  /* Collect video paths once */
  const videoPaths = useMemo(
    () => featureSequence.map(f => f.videoPath),
    []
  )

  /* Preload videos ONCE (no Suspense involved) */
  useEffect(() => {
    videoPaths.forEach(src => {
      const video = document.createElement('video')
      Object.assign(video, {
        src,
        muted: true,
        playsInline: true,
        preload: 'auto',
        crossOrigin: 'anonymous',
      })
      video.load()
    })
  }, [videoPaths])

  /* GSAP SCROLL LOGIC */
  useGSAP(() => {
    if (!groupRef.current) return

    /* Model rotation */
    gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      },
    }).to(groupRef.current.rotation, {
      y: Math.PI * 2,
      ease: 'power1.inOut',
    })

    /* Texture + text sync */
    const sync = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    })

    videoPaths.forEach((path, index) => {
      sync
        .call(() => setTexture(path))
        .to(`.boxe${index + 1}`, {
          opacity: 1,
          y: 0,
        })
    })
  }, [])

  return (
    <>
      {/* MODEL */}
      <group ref={groupRef}>
        <Suspense fallback={null}>
          <MacBookModel
            scale={isMobile ? 0.05 : 0.08}
            position={[0, -1, 0]}
            onLoaded={() => setModelReady(true)}
          />
        </Suspense>
      </group>

      {/* LOADER — SHOWN ONLY ON FIRST LOAD */}
      {!modelReady && (
        <Html center>
          <h1 className="text-white text-3xl uppercase animate-pulse">
            Loading...
          </h1>
        </Html>
      )}
    </>
  )
}

/* ============================= MAIN SECTION ============================= */

const FeaturesMac = () => {
  return (
    <section id="feature" className="pt-40 relative bg-neutral-900">
      <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">
        See it all in a new light.
      </h2>

      <Canvas
        id="f-canvas"
        className="!w-full !h-dvh relative z-40"
        camera={{}}
      >
        <Studio_Lights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      {/* FEATURE TEXT */}
      <div className="absolute inset-0 pointer-events-none">
        {features.map((feature, index) => (
          <div
            key={feature.highlight}
            className={clsx(
              'max-w-xs absolute boxe',
              `boxe${index + 1}`,
              feature.styles
            )}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesMac
