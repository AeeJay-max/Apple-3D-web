import { PresentationControls } from '@react-three/drei'
import React, { useRef } from 'react'
import MacBookModel16 from '../models/Macbook-16'
import MacBookModel14 from '../models/Macbook-14'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5

const fadeMeshes = (group, opacity) => {
    if (!group) return

    group.traverse((child) => {
        if (!child.isMesh) return

        const material = child.material
        if (!material || Array.isArray(material)) return

        gsap.to(material, {
            opacity,
            duration: ANIMATION_DURATION,
            overwrite: true,
            onStart: () => {
                if (opacity === 1) child.visible = true
            },
            onComplete: () => {
                if (opacity === 0) child.visible = false
            }
        })
    })
}

const moveGroup = (group, x) => {
    if (!group) return

    gsap.to(group.position, {
        x,
        duration: ANIMATION_DURATION,
        overwrite: true
    })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08
    const SCALE_LARGE_MOBILE = 0.05

    const smallMacBookRef = useRef()
    const largeMacBookRef = useRef()

    const showLargeMacbook =
        scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE

    useGSAP(() => {
        if (!smallMacBookRef.current || !largeMacBookRef.current) return

        if (showLargeMacbook) {
            moveGroup(smallMacBookRef.current, OFFSET_DISTANCE)
            moveGroup(largeMacBookRef.current, 0)

            fadeMeshes(smallMacBookRef.current, 0)
            fadeMeshes(largeMacBookRef.current, 1)
        } else {
            moveGroup(largeMacBookRef.current, OFFSET_DISTANCE)
            moveGroup(smallMacBookRef.current, 0)

            fadeMeshes(largeMacBookRef.current, 0)
            fadeMeshes(smallMacBookRef.current, 1)
        }
    }, [showLargeMacbook])

    const controlsConfig = {

        speed: 3,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 }
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacBookRef}>
                    <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacBookRef}>
                    <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher
