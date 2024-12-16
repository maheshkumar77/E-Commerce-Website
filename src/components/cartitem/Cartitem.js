import React, { useContext } from 'react'
import './cartitem.css'
import ricon from '../assets/remove.jpg'
import { Shopcontext } from '../../context/Shopcontext'
const Cartitem = () => {
    const  { All_pro, cartitem, removeFromcart, getTotalCartAmount }=useContext(Shopcontext);
    console.log(getTotalCartAmount);
  return (
    <div className='cartitem'>
      <div className='cartitems-format-main'>
        <p>Product</p>
        <p>Titel</p>
        <p>Price</p>
        <p>Quantity</p>
        <p> Total</p>
        <p>Remove</p>
        
      </div>
      <hr/>
    
      { All_pro.map((e) => {
        if(cartitem[e.id]>0){
           return <div>
           <div className='cartitems-format cartitems-format-main'>
        <img src={e.img} alt='' className='carticon-product-icon' />
        <p>{e.sub}</p>
        <p>${e.price1}</p>
        <button className='cartitems-quantity'>{cartitem[e.id]}</button>
        <p>${e.price1*cartitem[e.id]} </p>
        <img className='remove-icon' src={ricon} onClick={()=>{removeFromcart(e.id)}}  alt=''/>
      </div>
      <hr/>
           </div> 
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div className=''>
                <div className='cartitems-totalitem'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>  
                <div  className='cartitems-totalitem'>
                <p>Shipping Fees</p>
                <p>Free</p>
                </div>
                <hr/>
                <div  className='cartitems-totalitem'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()} </h3>
                </div>
              
            </div>
            <button>PROCEED TO CHACKOUT</button>
        </div>
        <div className='cartitems-promocode'>
            <p>If you have a promo code, Enter it hear</p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='promocode'/>
                <button>submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
