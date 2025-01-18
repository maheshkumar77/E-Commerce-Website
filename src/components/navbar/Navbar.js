import React, { useState } from 'react';
import './navbar.css';
//
import im1 from '../assets/logo.png'
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {
    const[manu,setManu]=useState("kids");
  return (
    <div className='nav-bar'>
      <div className='logo'>
      <div className='logo-img'>
      <img className='logo-img'  src={im1} alt='logo'/>
      </div>
      
        <ul>
          <li onClick={()=>{setManu("kids")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{manu==="kids"?<hr/>:<></>}</li>
          <li onClick={()=>{setManu("boys")}}><Link to='/mens' style={{ textDecoration: 'none' }}>Mens</Link>{manu==="boys"?<hr/>:<></>}</li>
          <li onClick={()=>{setManu("girls")}}><Link to='/women' style={{ textDecoration: 'none' }}>Womens</Link>{manu==="girls"?<hr/>:<></>}</li>
          <li onClick={()=>{setManu("lid")}}><Link to='/kid' style={{ textDecoration: 'none' }}>Kids</Link>{manu==="lid"?<hr/>:<></>}</li>
        </ul>
        <div className='rest'>
          <button> <Link to='/login'  style={{ textDecoration: 'none' }}>login</Link> </button>
          <Link to='/cart'  style={{ textDecoration: 'none' }}>
          <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
           </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
