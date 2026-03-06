import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import Hero from '../mac/Hero';
import ProductViewr from '../mac/ProductViewr';
import ShowCase from '../mac/ShowCase';
import Performance from '../mac/Performance';
import FeaturesMac from '../mac/FeaturesMac';
import HighLightsMac from '../mac/HighLightsMac';


const HomeMac = () => {
    return (
        <section className='common-padding'>
            <div>
              <Hero />
              <ProductViewr />
              <ShowCase />
              <Performance />
              <FeaturesMac />
              <HighLightsMac />
            </div>
        </section>
    )
}

export default HomeMac
