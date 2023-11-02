import React from 'react'
import './Hero.css'
import hero from '../Assets/back-hero.webp'
import sitting from '../Assets/down-removebg.png'

function Hero() {
  return (
    <div>
      <div className='top-hero'>
        <div className='hero'>
            <img src={hero} alt=''/>
            <div className='hero-content'>
              <span className='head'>S-17</span>
              <img src={sitting} alt="" className='img' />
              <div className='hero-rotate'>
                <span className='one'>For Worldwide Shipping on <br/> Order Over 100$</span>
                <span className='two'>02/03</span>
              </div>
              {/* <button>Offer Collections </button> */}
              <button class="button"><span>Offer Collections </span></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero