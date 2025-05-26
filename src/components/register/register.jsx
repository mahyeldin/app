import './register.css'
import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { useRef , useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


export default function NewAccountForm() {
   const email = useRef(null)
    const password = useRef(null)
    const Professional = useRef(null)
    const firstname = useRef(null)
    const lastname = useRef(null)
    const phonenumber = useRef(null)
    const zip = useRef(null)
    const [err , seterr] = useState('')

    const navigate = useNavigate();

  function handelclick(){
    const headers = {
      'Accept': 'application/json'
    };
    const params = {
      'email':email.current.value,
      'password': password.current.value,
      'firstName':firstname.current.value,
      'lastName':lastname.current.value,
      'zip':zip.current.value,
      'phone':phonenumber.current.value
    }
    console.log(params);
    axios.post('http://localhost:5000/api/auth/register',params,{ headers })
    .then((res)=>{
         navigate('/login')
    }).catch((err)=>{
         seterr('invalid input');;
    })
        
}

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Welcome to We Rent</h2>
        <div className="tabs">
          <Link to="/login"><button className={`tab `} >Sign in</button></Link>
          <button className={`tab active`} >New account</button>
        </div>
      </div>

      <form className="form">
        <label>Email</label>
        <input type="email" placeholder="Entre email" ref={email} />

        <label>Password</label>
        <input type="password" placeholder="Entre password" ref={password} />

        <div className="row">
          <div className="col">
            <label>First name</label>
            <input type="text" placeholder="Fist name"  ref={firstname} />
          </div>
          <div className="col">
            <label>Last name</label>
            <input type="text" placeholder="Last name" ref={lastname} />
          </div>
        </div>

        <label>Zip / postal</label>
        <input type="text" placeholder="Zip / postal" ref={zip} />

        <label>Phone number</label>
        <input type="text" placeholder="Phone number" ref={phonenumber} />

        <div  className="submit-btn"  onClick={handelclick}>Register</div>
         <p className='err ml-100'>{err}</p>

        <div className="dividerregister" />
        <p className="connect-label">Or connect with:</p>

        <div className="google-btn">
         <div className='circle'><FontAwesomeIcon icon={faGoogle}  style={{color: "#ff0000"}} /></div>
          <span>Continue with Google</span>
        </div>
      </form>
    </div>
  );
}
