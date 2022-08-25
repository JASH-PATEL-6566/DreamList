// import axios from 'axios';
import React, { useRef, useState } from 'react'
import './login.css'
// const SERVER_URL = 'http://localhost:9002/';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom'


function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value);
        history('/');
        // } catch {
        //     setError('Failed to Sign In')
        // }
        setLoading(false)
    }
    // const message_error = useRef();
    // const navigate = useNavigate();
    // const [details, setDetails] = useState({
    //     username: '',
    //     password: ''
    // })

    // const setUseStateProps = (name, value) => {
    //     setDetails({ ...details, [name]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post(SERVER_URL, { message: 'LOGIN', details })
    //         .then(res => {
    //             const { message, data } = res.data;
    //             if (message === 'done') {
    //                 setUser(data)
    //                 message_error.current.classList.add('hide');
    //                 navigate('/')
    //             }
    //             else {
    //                 console.log('fail');
    //                 message_error.current.classList.remove('hide');
    //                 setDetails({ username: '', password: '' });
    //             }
    //         })
    // }

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