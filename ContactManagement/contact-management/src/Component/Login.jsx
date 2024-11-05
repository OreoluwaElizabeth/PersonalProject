import React from 'react';
import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validatePassword = (password) => {
        if (password.length < 8) {
            setErrors((prev) => ({...prev, password: 'Password must be at least 8 characters'}));
        } else {
            setErrors((prev) => ({...prev, password: ''}));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validatePassword(password);
        if (!errors.password && email && password) {
            navigate('/home');
            console.log('Login form submitted:', {email, password});
        }
    };

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <label className='login-label'>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='login-input' />
                <br />
                <label className='login-label'>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input' />
                <br />
                <button type="submit"  className='login-button'>Login</button>
                <p className='login-text'>Don't have an account? <a href="/signup" target="_blank">SignUp</a></p>
            </form>
        </div>
    )
}

export default Login;