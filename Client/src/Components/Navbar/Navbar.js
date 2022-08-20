import './navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>Dream<span>List</span></h1>
            <div className="btn-container">
                <NavLink to='/login' className="btn btn-login">
                    Log in
                </NavLink>
                <NavLink to='/register' className="btn btn-register">
                    Register
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
