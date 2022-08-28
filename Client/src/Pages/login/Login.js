// import axios from 'axios';
import React, { useRef, useState } from 'react'
import './login.css'
// const SERVER_URL = 'http://localhost:9002/';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';


function Login({ setUser }) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        setError('')
        setLoading(true)
        login(emailRef.current.value, passwordRef.current.value)
            .then((res) => {
                axios.post('http://localhost:9002', { id: res.user.uid, message: 'GET_DATA' })
                    .then(res => {
                        setUser(res.data[0]);
                        history('/');
                    })
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/wrong-password':
                        setError('Wrong Password.....Please try again')
                        break;
                    default:
                        setError('something went Wrong....Please try again')
                        break;
                }
            })
        setLoading(false)
    }

    return (
        <div className="container">
            <form action="">
                <h2>Login</h2>
                <p htmlFor="email">Email :</p>
                <input ref={emailRef} required type="email" name='username' className='inp username' placeholder='Enter username' />

                <p htmlFor="email">Password :</p>
                <input ref={passwordRef} required type="password" name='password' className='inp password' placeholder='Enter Password' />
                {error && <label className='error'>{error}</label>}
                <button disabled={loading} onClick={handleSubmit} type='submit' className='login' >Login</button>
                <span>OR</span>
                <button type='button' onClick={() => history('/register')} className='register' >Register</button>
                <Link className='link' to={'/forgot-password'}>Forgot Password?</Link>
            </form>
        </div>
    )
}

export default Login;