import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css'
import axios from 'axios';
const SERVER_URL = 'http://localhost:9002/';

function Register() {
    const message = useRef(null);
    const navigate = useNavigate();
    const [props, setProps] = useState({
        username: '',
        password: '',
        conform_password: ''
    });

    const setUseStateProps = (name, value) => {
        setProps({ ...props, [name]: value })
        // console.log(props);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.password === props.conform_password) {
            message.current.classList.add('hide');
            axios.post(SERVER_URL, { props, message: 'ADD_USER' });
            setProps({ password: '', conform_password: '', username: '' });

        }
        else {
            message.current.classList.remove('hide');
            setProps({ ...props, password: '', conform_password: '' });
        }
    }

    return (
        <div className="container">
            <form method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <p htmlFor="username">Username :</p>
                <input required type="text" value={props.username} onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} name='username' className='inp username' placeholder='Enter username' />

                <p htmlFor="password">Password :</p>
                <input required type="password" name='password' value={props.password} className='inp password' placeholder='Enter Password' onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} />

                <p htmlFor="conform_password">Conform Password :</p>
                <input required type="password" name='conform_password' value={props.conform_password} className='inp password' placeholder='Enter Password' onChange={(e) => setUseStateProps(e.target.getAttribute('name'), e.target.value)} />
                <label ref={message} className='error hide'>*Passwords do not match, please retype</label>
                <button type='submit' className='register-r' >Register</button>
                <span>OR</span>
                <button onClick={() => navigate('/login')} className='login-r' >Login</button>
            </form>
        </div>
    )
}

export default Register;