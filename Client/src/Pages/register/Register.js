import React, { useRef, useState } from 'react'
import './register.css'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }
        setError('')
        setLoading(true)
        signup(emailRef.current.value, passwordRef.current.value)
            .then((res) => {
                axios.post('http://localhost:9002/', { username: usernameRef.current.value, _id: res.user.uid, message: 'ADD_NEW_USER' })
                    .then(() => history('/login'))
                    .catch(() => setError('Something went wrong.... Please try again'))
            })
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        setError('User already in exist !')
                        break;
                    case 'auth/weak-password':
                        setError('Length of password must be more than 6')
                        break;
                    default:
                        setError('Something went wrong.... Please try again')
                }
                emailRef.current.value = '';
            })
        setLoading(false)
    }


    return (
        <div className="container">
            <form method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <p htmlFor="email">Email :</p>
                <input required type="email" ref={emailRef} name='email' className='inp email' placeholder='Enter Your Email' />

                <p htmlFor="username">Username :</p>
                <input required type="username" ref={usernameRef} name='username' className='inp username' placeholder='Enter username' />

                <p htmlFor="password">Password :</p>
                <input required type="password" name='password' className='inp password' placeholder='Enter Password' ref={passwordRef} />

                <p htmlFor="conform_password">Conform Password :</p>
                <input required type="password" name='conform_password' className='inp password' placeholder='Enter Password' ref={passwordConfirmRef} />
                {error && <label className='error'>{error}</label>}
                <button disabled={loading} type='submit' className='register-r' >Register</button>
                <span>OR</span>
                <button type='button' onClick={() => history('/login')} className='login-r' >Login</button>
            </form>
        </div>
    )
}

export default Register;