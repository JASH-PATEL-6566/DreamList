import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <form action="">
                <h2>Login</h2>
                <p htmlFor="email">Username :</p>
                <input required type="text" name='username' className='inp username' placeholder='Enter username' />
                <p htmlFor="email">Password :</p>
                <input required type="password" name='Password' className='inp password' placeholder='Enter Password' />
                <label className='error hide'>*Invalid Username and Password</label>
                <button type='submit' className='login' >Login</button>
                <span>OR</span>
                <button onClick={() => navigate('/register')} className='register' >Register</button>
            </form>
        </div>
    )
}

export default Login;