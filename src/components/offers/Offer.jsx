import React from 'react'
import './offer.css'
import img from '../assets/new2.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className='offer-left'>
     <h1>Exclusive</h1>
    <h1>Offers For You</h1>
   <p>ONLY FOR BEST SELLERS PRODUCTS</p>
     <button>Check Now</button>
      </div>
      <div className='offer-right'>
     <img src={img} alt=''/>
      </div>
    </div>
  )
}

export default Offer
