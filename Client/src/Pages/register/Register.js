import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './register.css'

function Register() {

    const [props, setProps] = useState({
        username: '',
        email: '',
        password: '',
        conform_password: ''
    });

    const setUseStateProps = (name, value) => {
        setProps({ ...props, [name]: value })
        console.log(props);
    }


    const handleSubmit = () => {

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <p htmlFor="username">Username :</p>
                <input type="text" onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} name='username' className='inp username' placeholder='Enter username' />

                <p htmlFor="email">Email :</p>
                <input type="text" name='email' className='inp email' placeholder='Enter your email' onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} />

                <p htmlFor="password">Password :</p>
                <input type="password" name='Password' className='inp password' placeholder='Enter Password' onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} />

                <p htmlFor="conform_password">Conform Password :</p>
                <input type="password" name='conform_password' className='inp password' placeholder='Enter Password' onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} />

                <div type='submit' className='register' >Register</div>
                <span>OR</span>
                <NavLink to='/login' type='submit' className='login' >Login</NavLink>
            </form>
        </div>
    )
}

export default Register;