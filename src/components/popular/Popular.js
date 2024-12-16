import React from 'react'
import './popular.css'
import fapi from '../assets/data'
import Item from '../item/Item'
function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN MENS</h1>
      <hr/>
      <div className='popular-item'>
        {fapi.map((item1,i)=>{
            return<Item key={i} id={item1.id} sub={item1.sub} img={item1.img} price1={item1.price1} price2={item1.price2} discount={item1.discount}  />
        })}
      </div>
    </div>
  )
}

export default Popular
