import './navbar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

function Navbar({ data }) {
    const history = useNavigate();
    const { currentUser, logout } = useAuth();

    // console.log(currentUser);

    return (
        <nav className='navbar'>
            <h1>Dream<span>List</span></h1>
            <div className="btn-container">
                {!currentUser &&
                    <>
                        <button className="btn btn-login" onClick={() => history('/login')}>
                            Log in
                        </button>
                        <button className="btn btn-register" onClick={() => history('/register')}>
                            Register
                        </button>
                    </>
                }
                {currentUser &&
                    <>
                        <span>Welcome , {data && data.userName}</span>
                        <button className="btn btn-logout" onClick={() => {
                            logout()
                            history('/')
                        }}>
                            LogOut
                        </button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;
