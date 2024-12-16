import React, { useEffect, useState } from 'react';
import './css/loginsignup.css';
import axios from 'axios';
function Loginsignup() {
  const [contact,setContact]=useState([])
  const [signd,setSignd]=useState({
    name:'',
    Email:'',
    pasword:''
  })
  const func = async () => {
    try {
      const response = await axios.get("http://localhost:8009/contact");
      const alldata = response.data; // Access the data directly
      setContact(alldata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const signup = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:8009/contact", signd);
      console.log('Signup successful:', response.data);
      // Handle successful signup (e.g., show a message or redirect)
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error (e.g., show error message)
    }
  };
  
  useEffect(() => {
    func();
  }, []);

  useEffect(() => {
    console.log(contact);
    console.log(signd);
  }, [contact,signd]);

  return (
    <div className='loginsignup'>
      <div className='signup-container'>
        <h1>Signup</h1>
        <div className='signup-field'>
  <input 
    type='text' 
    placeholder='Your Name' 
    value={signd.name} 
    onChange={(e) => setSignd({ ...signd, name: e.target.value })} 
  />
  <input 
    type='email' 
    placeholder='Enter Your Email' 
    value={signd.Email} 
    onChange={(e) => setSignd({ ...signd, Email: e.target.value })} 
  />
  <input 
    type='password' 
    placeholder='Password' 
    value={signd.pasword} 
    onChange={(e) => setSignd({ ...signd, pasword: e.target.value })} 
  />
</div>

        <button onClick={signup}>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className='login-agree'>
          <input type='checkbox' id='agree' />
          <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
