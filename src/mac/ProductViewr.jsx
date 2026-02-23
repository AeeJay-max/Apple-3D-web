import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { animateWithGsap } from '../utils/animations'
import { macModels, macSizes } from '../constants'
import * as THREE from 'three'
import useMacBookStore from './store'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'
import clsx from "clsx";
import MacBookModel14 from './models/Macbook-14'
import Studio_Lights from './helpers/Studio_Lights'


const ProductViewr = () => {

    const { color, scale, setColor, setScale } = useMacBookStore()

    useGSAP(() => {
        animateWithGsap('#heading', {
            y: 0,
            opacity: 1
        })
    }, [])

    return (
        <section className='flex flex-col '>
            <div className='screen-max-width'>
                <h2 id='heading' className='text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20 '>
                    Take a closer look.
                </h2>
                
                <div >
                    <Canvas id='canvas' camera={{position: [0,2,5], fov: 50, near: 0.1, far: 100}} >

                        <Studio_Lights />

                        <MacBookModel14 position={[0, 0, 0]} scale={0.06} />

                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    
                    <div className=' w-full'>
                        <p className='text-sm font-light text-center'>MacBookPro {scale} in {color}</p>

                        <div className='flex-center'>
                            <ul className='flex items-center justify-center px-4 py-1 rounded-full bg-neutral-700 backdrop-blur'>
                                <button
                                    onClick={() => setColor('#adb5bd')}
                                    className={clsx('w-10 h-10 bg-neutral-300 rounded-full mx-2', color === '#adb5bd' && 'active')}
                                />
                                <button
                                    onClick={() => setColor('#2e2c2e')}
                                    className={clsx('w-10 h-10 bg-neutral-900 rounded-full mx-2', color === '#2e2c2e' && 'active')}
                                />
                            </ul>

                            <ul className='flex items-center justify-center px-2 py-0.5 rounded-full bg-neutral-700 backdrop-blur ml-3 gap-1'>
                                <button onClick={() => setScale(0.06)}
                                    className={clsx(scale === 0.06 ? 'w-8 h-8 bg-neutral-200 rounded-full mx-2 text-black' : 'w-8 h-8 bg-transparent rounded-full mx-2 text-white')}
                                >
                                    <p>14"</p>
                                </button>
                                <button onClick={() => setScale(0.08)}
                                    className={clsx(scale === 0.08 ? 'w-8 h-8 bg-neutral-200 rounded-full mx-2 text-black' : 'w-8 h-8 bg-transparent rounded-full mx-2 text-white')}
                                >
                                    <p>16"</p>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductViewr
