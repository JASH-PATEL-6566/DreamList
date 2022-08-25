import React, { useRef, useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        // try {
        setMessage('');
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Check your inbox for further instructions')
        // } catch {
        //     setError('Failed to Reset Password')
        // }
        setLoading(false)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p htmlFor="email">Email :</p>
                <input ref={emailRef} required type="email" name='username' className='inp username' placeholder='Enter username' />

                {error && <label className='error'>{error}</label>}
                {message && <label className='success'>{message}</label>}
                <button disabled={loading} type='submit' className='login' >Reset Password</button>
                <Link className='link' to={'/login'}>Login</Link>
            </form>
            <label className='center'>Need to <Link className='link' to={'/register'}>Register</Link> account</label>
        </div >
    )
}
