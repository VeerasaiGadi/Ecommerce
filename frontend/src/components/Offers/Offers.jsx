import React from 'react'
import New from '../Assets/new.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='sit'>
            <img src={New} alt=""  />
            <h1 className='capital'>T</h1>
        </div>
        <div className='offer-cont'>
            <h1>The New Way To Display <br /> Product by <span className='high'>colorlib</span></h1>
            <button>EXPLORE NOW</button>
        </div>
    </div>
  )
}

export default Offers