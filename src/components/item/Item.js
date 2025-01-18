import React, { useEffect } from 'react';
import './item.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Item=(props)=> {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className='item' data-aos='zoom-in'>
  
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.img} alt='propsimg'/> </Link>

    
    
        <p className=' para'>{props.sub}</p>
      
    <div className='item-price'>
      <div className='item-price1'>
       $ {props.price1}
      </div>
      <div className='item-price2'>
       $ {props.price2}
      </div>
      <div className='discount'>
        {props.discount} % Off
      </div>
    </div>
      
    </div>
  )
}

export default Item
