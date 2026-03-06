import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import Hero from '../mac/Hero';
import ProductViewr from '../mac/ProductViewr';
import ShowCase from '../mac/ShowCase';


const HomeMac = () => {
    return (
        <section className='common-padding'>
            <div>
              <Hero />
              <ProductViewr />
              <ShowCase />
            </div>
        </section>
    )
}

export default HomeMac
