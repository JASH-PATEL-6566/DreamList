import React from 'react'
import { NavLink } from 'react-router-dom'
import './register.css'

function Register() {
    return (
        <div className="container">
            <form action="">
                <h2>Register</h2>
                <p htmlFor="username">Username :</p>
                <input type="text" name='username' className='inp username' placeholder='Enter username' />

                <p htmlFor="email">Email :</p>
                <input type="text" name='email' className='inp email' placeholder='Enter your email' />

                <p htmlFor="password">Password :</p>
                <input type="password" name='Password' className='inp password' placeholder='Enter Password' />

                <p htmlFor="conform-password">Conform Password :</p>
                <input type="password" name='conform-password' className='inp password' placeholder='Enter Password' />

                <div type='submit' className='register' >Register</div>
                <span>OR</span>
                <NavLink to='/login' type='submit' className='login' >Login</NavLink>
            </form>
        </div>
    )
}

export default Register;