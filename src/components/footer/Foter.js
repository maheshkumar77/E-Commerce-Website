import React from 'react'
import './foter.css'
import im1 from '../assets/logo.png'
import insta from '../assets/insta.jpg'
import printr from '../assets/printrest.png'
import whatsap from '../assets/whatsap.avif'
const Foter = () => {
  return (
    <div className='foter'>
     <div className='foter-logo'>
        <img src={im1} alt='foter-logo'/>
        <p>SHOPPER</p>
     </div>
      <ui className='foter-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
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
      <div className='foter-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All Right Resereved</p>
      </div>
    </div>
  )
}

export default Foter
