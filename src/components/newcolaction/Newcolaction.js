import React from 'react'
import './newcolaction.css'
import newdata from '../assets/Newdata'
import Item from '../item/Item'

function Newcolaction() {
  return (
    <div className='newcolaction'>
      <h1>NEW COLECTION</h1>
      <hr/>
      <div className='colection'>
        {newdata.map((item,i)=>{
            return<Item key={i} id={item.id} sub={item.sub} img={item.img} price1={item.price1} price2={item.price2} discount={item.discount}  />
        })}
      </div>
    </div>
  )
}

export default Newcolaction
