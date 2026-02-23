import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import Hero from '../mac/Hero';
import ProductViewr from '../mac/ProductViewr';


const HomeMac = () => {
    return (
        <section className='common-padding'>
            <div>
              <Hero />
              <ProductViewr />
            </div>
        </section>
    )
}

export default HomeMac
