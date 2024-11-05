import React from 'react';
import { useState } from 'react';
import './signup.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign up form submitted:', {name, email, password});
    }
    return (
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <form className='signup-form' onSubmit={handleSubmit}>
                <label className='signup-form label'>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='signup-form input'/>
                <br />
                <label className='signup-form'>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='signup-form input'/>
                <br />
                <label className='signup-form'>Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='signup-form input'/>
                <br />
                <button type="submit" className='signup-form button'>Sign Up</button>
                <p>Already have an account?<a href="/login" target="_blank">Login</a></p>
            </form>
        </div>
    )
}

export default SignUp;