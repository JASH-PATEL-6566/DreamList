import React, { useRef, useState } from 'react'
import './register.css'
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useNavigate();
    // +++++++++++++++++++++++++++++++++++++++++ujkjjoo88
    // const message = useRef(null);
    // const [message_info, setMessageInfo] = useState();
    // const navigate = useNavigate();
    // const [props, setProps] = useState({
    //     username: '',
    //     password: '',
    //     conform_password: ''
    // });


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        // try {
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value);
        history('/login')

        // } catch {
        //     setError('Failed to create an account')
        // }
        setLoading(false)
        // e.preventDefault();

        // if (props.password === props.conform_password) {

        //     axios.post(SERVER_URL, { props, message: 'ADD_USER' })
        //         .then(res => {
        //             const message_info = res.data;
        //             console.log(res.data);
        //             message.current.classList.add('hide');
        //             if (message_info.message === 'user added successfully') {
        //                 message.current.classList.add('hide');
        //                 setProps({ password: '', conform_password: '', username: '' });
        //                 navigate('/login');
        //             }
        //             else {
        //                 message.current.classList.remove('hide');
        //                 // message.current.classList.remove('hide');
        //                 setMessageInfo('*User already exist')
        //             }
        //         })
    }


    return (
        <div className="container">
            <form method='POST' onSubmit={handleSubmit}>
                <h2>Register</h2>
                <p htmlFor="username">Email :</p>
                <input required type="email" ref={emailRef} name='username' className='inp username' placeholder='Enter username' />

                <p htmlFor="password">Password :</p>
                <input required type="password" name='password' className='inp password' placeholder='Enter Password' ref={passwordRef} />

                <p htmlFor="conform_password">Conform Password :</p>
                <input required type="password" name='conform_password' className='inp password' placeholder='Enter Password' ref={passwordConfirmRef} />
                {/* <label ref={message} className='error hide'>{message_info}</label> */}
                {error && <label className='error'>{error}</label>}
                <button disabled={loading} type='submit' className='register-r' >Register</button>
                <span>OR</span>
                <button type='button' onClick={() => history('/login')} className='login-r' >Login</button>
            </form>
        </div>
    )
}

export default Register;