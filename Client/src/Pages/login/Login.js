import React from 'react'

function Login() {
    return (
        <div className="container">
            <form action="">
                <h2>Login</h2>
                <label htmlFor="email">Username</label>
                <input type="text" name='username' className='username' placeholder='Enter username' />
                <label htmlFor="email">Password</label>
                <input type="password" name='Password' className='Password' placeholder='Enter Password' />

            </form>
        </div>
    )
}

export default Login;