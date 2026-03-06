import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'

import useMacBookStore from './store'
import Studio_Lights from './helpers/Studio_Lights'
import ModelSwitcher from './helpers/ModelSwitcher'
import { animateWithGsap } from '../utils/animations'

/* -------------------- UI MAPPINGS -------------------- */

const SIZE_MAP = {
    0.06: '14-inch',
    0.08: '16-inch',
}

const COLOR_MAP = {
    '#adb5bd': 'Silver',
    '#2e2c2e': 'Space Black',
}

/* -------------------- COMPONENT -------------------- */

const ProductViewr = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    const { color, scale, setColor, setScale } = useMacBookStore()

    useGSAP(() => {
        animateWithGsap('#heading', {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
        })
    }, [])

    return (
        <section className="flex flex-col">
            <div className="screen-max-width">

                {/* -------------------- HEADING -------------------- */}
                <h2
                    id="heading"
                    className="text-gray lg:text-6xl md:text-5xl text-3xl mb-6 font-medium opacity-0 translate-y-20 text-center"
                >
                    Take a closer look.
                </h2>

                {/* -------------------- 3D CANVAS -------------------- */}
                <div className="flex justify-center items-center mb-4 w-full h-full">
                    <Canvas
                        camera={{ position: [0, 1.6, 4.5], fov: 45 }}
                        style={{ height: isMobile ? '430px' : '580px' }}
                        className="w-full relative z-40 py-2"
                    >
                        <Studio_Lights />
                        <ModelSwitcher
                            scale={isMobile ? scale - 0.03 : scale}
                            isMobile={isMobile}
                        />
                    </Canvas>
                </div>

                {/* -------------------- CONTROLS -------------------- */}
                <div className="flex flex-col items-center -mt-2">

                    {/* PRODUCT LABEL */}
                    <p className="text-sm font-light text-center mb-3">
                        MacBook Pro {SIZE_MAP[scale]} — {COLOR_MAP[color]}
                    </p>

                    <div className="flex items-center">

                        {/* COLOR SELECTOR */}
                        <ul className="flex items-center px-4 py-1 rounded-full bg-neutral-700 backdrop-blur">
                            <button
                                onClick={() => setColor('#adb5bd')}
                                title="Silver"
                                className={clsx(
                                    'w-9 h-9 rounded-full mx-2 bg-neutral-300',
                                    color === '#adb5bd' && 'ring-2 ring-white'
                                )}
                            />
                            <button
                                onClick={() => setColor('#2e2c2e')}
                                title="Space Black"
                                className={clsx(
                                    'w-9 h-9 rounded-full mx-2 bg-neutral-900',
                                    color === '#2e2c2e' && 'ring-2 ring-white'
                                )}
                            />
                        </ul>

                        {/* SIZE SELECTOR */}
                        <ul className="flex items-center px-2 py-1 rounded-full bg-neutral-700 backdrop-blur ml-3 gap-1">
                            <button
                                onClick={() => setScale(0.06)}
                                className={clsx(
                                    'w-9 h-9 rounded-full text-sm',
                                    scale === 0.06
                                        ? 'bg-neutral-200 text-black'
                                        : 'text-white bg-transparent'
                                )}
                            >
                                14″
                            </button>

                            <button
                                onClick={() => setScale(0.08)}
                                className={clsx(
                                    'w-9 h-9 rounded-full text-sm',
                                    scale === 0.08
                                        ? 'bg-neutral-200 text-black'
                                        : 'text-white bg-transparent'
                                )}
                            >
                                16″
                            </button>
                        </ul>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductViewr
