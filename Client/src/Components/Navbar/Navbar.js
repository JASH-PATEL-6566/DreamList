import './navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ user, setUser }) {
    return (
        <nav className='navbar'>
            <h1>Dream<span>List</span></h1>
            <div className="btn-container">
                {!user &&
                    <>
                        <NavLink to='/login' className="btn btn-login">
                            Log in
                        </NavLink>
                        <NavLink to='/register' className="btn btn-register">
                            Register
                        </NavLink>
                    </>
                }
                {user &&
                    <>
                        <span>Welcome , JASH PATEL</span>
                        <NavLink to='/' className="btn btn-logout" onClick={() => setUser(null)}>
                            LogOut
                        </NavLink>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;
