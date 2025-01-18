import React from 'react'
import './foter.css'
import im1 from '../assets/logo.png'
import insta from '../assets/insta.jpg'
import printr from '../assets/printrest.png'
import whatsap from '../assets/whatsap.avif'
import { Link } from 'react-router-dom'
const Foter = () => {
  return (
    <div className='foter'>
     <div className='foter-logo'>
        <img src={im1} alt='foter-logo'/>
        <p>SHOPPER</p>
     </div>
      <ui className='foter-links'>
        <li>
        <Link to="/company">
        Company
        </Link>
        </li>
        
        <li>
        <Link to="/office">
        Offices
        </Link>
        </li>
        <li>
        <Link to="/about">
        About
        </Link>
        </li>
        <li>
        <Link to="contact">
        Contact
        </Link>
       </li>
      </ui>
      <div className='foter-sosial-icon'>
        <div className='foter-icon-container'>
           <img src={insta} alt='instagram'/>  
        </div>
        <div className='foter-icon-container'>
           <img src={printr} alt='printrest'/>  
        </div>
        <div className='foter-icon-container'>
           <img src={whatsap} alt='whatsap'/>  
        </div>
      </div>
      <div className="company-footer">
          <p>&copy; 2025 You&MeShop | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Foter
