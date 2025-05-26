import './logins.css'
import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



export default function Login() {
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate();
  const [err , seterr] = useState('')


 function handelclick(){
        const headers = {
          'Accept': 'application/json'
        };
        const params = {
          'email' : email.current.value,
          'password' : password.current.value
        }
        axios.post('http://localhost:5000/api/auth/login',params,{ headers })
        .then((res)=>{
           console.log(res)
           localStorage.setItem('user', JSON.stringify(res.data.user));
           localStorage.setItem('token', res.data.token);
             navigate('/home')
        })
        .catch((err)=>{
          seterr('email or password not valid');
        })
            
  }
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Welcome to We Rent</h2>
        <div className="tabs">
          <button className={`tab active`} >Sign in</button>
          <Link to="/register"><button className={`tab `} >New account</button></Link>
        </div>
      </div>

      <form className="form">
        <label>Email</label>
        <input type="text" ref={email}  placeholder="Entre email" />

        <label>Password</label>
        <input type="password"  ref={password}  placeholder="Entre password" />

        <div  className="submit-btn" onClick={handelclick}>sign in</div>
          
          <p className='err1'>{err}</p>
        </form>

        <div className="dividerlogin" />
        <p className="connect-label">Or connect with:</p>

        <div className="google-btn">
          <div className='circle'><FontAwesomeIcon icon={faGoogle}  style={{color: "#ff0000"}} /></div>
          <span>Continue with Google</span>
        </div>
      
    </div>
  );
}
