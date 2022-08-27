import React from 'react'
import "./loginsignup.css";
import { Routes, Route, Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className='carde'>
            <div>
                <h1>Welcome to Star-Vesters!</h1>
            </div>
            <div>
                <form>
                    <div className="form-field">
                        <input type="email" placeholder="Username" required />
                    </div>
                    <div className="form-field">
                        <input type="email" placeholder="Email" required />
                    </div>

                    <div className="form-field">
                        <input type="password" placeholder="Enter Password" required />
                    </div>
                    <div className="form-field">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>

                    <div className="form-field">

                        <Link to="/home" className="btn btn-primary">Log In</Link>
                        <a href="/login">Existing User? Login</a>
                    </div>
                </form>
            </div>
        </div>

    )
}
