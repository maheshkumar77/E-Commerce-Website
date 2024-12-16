import React, { useContext } from 'react'
import './productdisplay.css'
//import star from '../assets/star.webp'
import label from '../assets/lebel.webp'
import { Shopcontext } from '../../context/Shopcontext';
const Productdispaly = (props) => {
  const { product } = props;
  const {addTocart}=useContext(Shopcontext)
  if (!product) {
      return <div>Product not found</div>; // or any other fallback UI
  }

  return (
      <div className='prodisplay'>
          <div className='productdisplay-left'>
              <div className='productdisplay-img-list'>
                  <img src={product.img} alt='' />
                  <img src={product.img} alt='' />
                  <img src={product.img} alt='' />
                  <img src={product.img} alt='' />
              </div>
              <div className='productdisplay-img'>
                  <img className='product-img' src={product.img} alt='' />
              </div>
          </div>
          <div className='productdisplay-right'>
              <h1>{product.sub}</h1>
              <div className='productdispaly-right-star'>
              &#9733;
    &#x2605;
    &#9733;
    &#x2605;
    &#9733;
    &#x2605;
 
                  <p>(122)</p>
              </div>
              <div className='productdisplay-right-pricess'>
                <div className='oldprice'>
                  ${product.price1}
                </div>
                <div className='newprice'>
                ${product.price2}
                </div>
                <div className='discount'>
                {product.discount} % Off
                </div>
                </div>
                <div className='productdisplay-right-description'>
                FADMARK 
                Pack of 2 Men Printed Round Neck Pure Cotton Dark Blue, Grey T-Shirt
                FADMARK 
                
                </div>
                <div className='productdisplay-right-sizes'>
                  <h1>Select Size</h1>
                   <div className='productdisplay-right-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                   </div>
                </div>
                <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-catogory'>
                  <img src={label} alt=''/><span>Category:</span>Women ,T-shart,Crop Too
                </p>
                <p className='productdisplay-right-catogory'>
                  <img src={label} alt=''/><span>Tags:</span> Morden, Latest
                </p>
              </div>
         
      </div>
  );
};
export default Productdispaly
