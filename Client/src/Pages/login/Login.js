import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

function Login() {
    return (
        <div className="container">
            <form action="">
                <h2>Login</h2>
                <p htmlFor="email">Username :</p>
                <input type="text" name='username' className='inp username' placeholder='Enter username' />
                <p htmlFor="email">Password :</p>
                <input type="password" name='Password' className='inp password' placeholder='Enter Password' />
                <div type='submit' className='login' >Login</div>
                <span>OR</span>
                <NavLink to='/register' type='submit' className='register' >Register</NavLink>
            </form>
        </div>
    )
}

export default Login;