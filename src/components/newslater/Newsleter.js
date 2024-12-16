import React, { useState } from 'react'
import './newslater.css'
const Newsleter = () => {
  const [email, setEmail] = useState('');  // Renamed to email
  const [message, setMessage] = useState(''); // Renamed to message

  // Handle input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Submit handler
  const submit = (e) => {
    e.preventDefault();  // Prevent form from resetting
    if (email) {
      setMessage('Submitted Successfully');
      setEmail('');  // Optionally clear input field after submission
    }
  };
  return (
    <div className='newslater'>
      <h1>Get Exclusive Ofeers On Your email</h1>
      <p>Subscribe to our newslater and stay updated</p>
      <div>
      <input
            type="email"  // Use email type for validation
            placeholder='Your Email Id'
            value={email}  // Bind input value to state
            onChange={handleEmailChange}  // Handle input change
            required  // Email field is required
          />
        <button onClick={submit}>Subscribe</button>
      </div>
      {message && <p className='message'>{message}</p>}
    </div>
  )
}

export default Newsleter
