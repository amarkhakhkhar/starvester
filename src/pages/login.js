import React from 'react'
import "./loginsignup.css";
import { Routes, Route, Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='carde'>
      <div>
        <h1>Welcome to Star-Vesters!</h1>
      </div>
      <div>
        <form>
          <div className="form-field">
            <input type="email" placeholder="Email / Username" required />
          </div>

          <div className="form-field">
            <input type="password" placeholder="Password" required />                         </div>

          <div className="form-field">
            <Link to="/home" className="btn btn-primary">Log In</Link>
            <a href="/signup">New User? Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
