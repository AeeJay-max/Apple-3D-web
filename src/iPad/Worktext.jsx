import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Worktext = () => {

  useGSAP(() => {
    gsap.to('#heading', {
      opacity: 1,
      y: 0,
      delay: 1
    })
  }, [])

  return (
    <div>
      <h1 id="heading" className="section-heading">Working experience.</h1>
    </div>
  )
}

export default Worktext
