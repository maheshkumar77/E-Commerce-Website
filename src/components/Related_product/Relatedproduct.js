import React from 'react'
import './relatedproduct.css'
import All_pro from '../assets/Allproduct'
import Item from '../item/Item'

const relatedproduct = (props) => {
 
  return (
    <div className='relatedproduct'>
    <h1>Related product</h1>
    <hr/>
    <div className='relatedproduct-item' >
    {All_pro.map((item1,i)=>{
      if (props.category === item1.category){
        return <Item key={i} id={item1.id} sub={item1.sub} img={item1.img} price1={item1.price1} price2={item1.price2} discount={item1.discount}  />
      }
      
       else{
        return null;
       } 
    })}
    </div>
      
    </div>
  )
}

export default relatedproduct
