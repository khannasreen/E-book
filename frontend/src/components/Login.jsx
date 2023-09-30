import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/mylogo.png';

const Login = () => {
  return (
    <div>
    <div className='col-md-4 mx-auto my-5 ' >
      <div className="card-body shadow border rounded-2">
        <div className="card px-4 py-4">
          <img src={logo} alt="" />
          <h2 className='text-center blueclass text-white my-3 py-2 rounded-1 registrationtext'>Login Here</h2>
          <form action="submit">
            <label className="labelfont">Username</label>
            <input type='text' className='form-control mb-4' name='bookname' placeholder='Enter Your Username' />
            
            <label className="labelfont">Password</label>
            <input type='password' className='form-control mb-4' name='password' placeholder='Enter Your Number' />
          <button type='submit' className='btn blueclass w-100 text-white my-2 py-1 registrationtext'>Login</button>
          </form>
          <p className='text-center my-2'>Don't have an account?  
          <NavLink className="navsign" to="registration">
              <i className="fa-solid fa-user-plus"></i> Sign up
              </NavLink></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
