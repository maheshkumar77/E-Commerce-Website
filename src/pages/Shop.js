import React from 'react'
//mport fapi from '../components/assets/data';
import './css/shop.css'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offers/Offer'
import Newcolaction from '../components/newcolaction/Newcolaction'
import Newsleter from '../components/newslater/Newsleter'
function Shop() {
  return (
    <div>
      <div className='menu-items'>
       <Hero/>
       <Popular/>
        <Offer/>
       <Newcolaction/>
       <Newsleter/>
   </div>
    </div>
  )
}

export default Shop
