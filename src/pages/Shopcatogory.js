import React, { useContext  } from 'react'
import './css/shopcetagory.css'
import { Shopcontext } from '../context/Shopcontext'
import Item from '../components/item/Item';
const Shopcatogory= (props)=> {
  const { All_pro }=useContext( Shopcontext );
  console.log(All_pro);
  return (
    <div className='shopcatogory'>
      
      <div className='shopcatogory-index'>
        <p><span>Showing 1-12</span> out of 15 product</p>
        <div className='shopcategory-sort'>
          Sort By<img src="" alt="" />
        </div>
      </div>
      <div className='shopcat-indivisual'>
        {All_pro.map((item1,i)=>{
          if(props.category === item1.category){
            return<Item key={i} id={item1.id} sub={item1.sub} img={item1.img} price1={item1.price1} price2={item1.price2} discount={item1.discount}  />
          }else{
            return console.log(All_pro);
          }
        })}
      </div>
      <div className='shopcato-lodemore'>
        Explore more
      </div>
    </div>
  )
}

export default Shopcatogory
