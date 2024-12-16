import React from 'react'
import './Bredcrums.css'
//import arow from '../assets/arrow2.png'
const Bredcrums = ( props ) => {
    const { product }=props;
    
  return (
    <div className='Bredcrums'>
    HOME <h4>{">"}</h4> SHOP <h4>{">"}</h4>  {product.category}  <h4>{">"}</h4>  {product.sub}
      
    </div>
  )
}

export default Bredcrums
