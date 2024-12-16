import React from 'react';
//import im1 from '../assets/im2-removebg-preview.png'
//import im2 from '../assets/im3-removebg-preview.png'
import im4 from '../assets/im4-removebg-preview.png'
//import im4 from '../assets/im5-removebg-preview.png'
//import im4 from '../assets/im6-removebg-preview.png'
import './hero.css'
function Hero() {
    
  return (
    <div className='hero'>
    <div className='left'>
      <h1> <strong>👌</strong>New feshon was hear</h1>
      <p><strong>60%</strong>  discount on every order</p>
      <button>Try It</button>
    </div>
      <div className='right'>
      <img src={im4} alt='' />
      </div>
    </div>
  )
}

export default Hero
