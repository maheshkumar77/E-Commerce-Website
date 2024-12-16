import React, { createContext, useState } from 'react'
import All_pro from '../components/assets/Allproduct';




export const Shopcontext= createContext(null);
const getDefaultcart = ()=>{
    let cart ={};
    for(let index=0;index<All_pro.length+1;index++){
       cart[index]=0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{
    
    const[cartitem,setCartitem]=useState(getDefaultcart());
    const  addTocart = (itemId) =>{
    setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartitem)
    }
    const  removeFromcart = (itemId) =>{
        setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
        const getTotalCartAmount = () => {
            let totalamount = 0;
            for (const item in cartitem) {
                if (cartitem[item] > 0) {
                    let iteminfo = All_pro.find((product) => product.id === Number(item));
                    totalamount += iteminfo.price1 * cartitem[item];
                }
            }
            return totalamount; // Return total after looping through all items
        };
        
        const contextValue = { All_pro, cartitem, addTocart,removeFromcart,getTotalCartAmount };
    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopContextProvider;