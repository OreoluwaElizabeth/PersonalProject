import React from 'react';
import './landing.css';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <section className='hero'>
                <h1>Welcome to Contact Management</h1>
                <p>Effortlessly manage your contacts 
                    and help you stay connected to 
                    your loved ones across the globe.
                </p>
                <button>Get Started</button>
            </section>
            <section className='features'>
                <h2>Key Features</h2>
                <ul>
                    <li>
                        <i className='icon-contacts'></i>
                        <p>Contact Organization</p>
                    </li>
                    <li>
                        <i className='icon-contacts'></i>
                        <p>Quick Search</p>
                    </li>
                </ul>
            </section>
            <section className='about'>
                <h2>About Us</h2>
                <p>We're passionate about simplicity and efficiency</p>
            </section>
            <section className='cta'>
                <h2>Get Started Today</h2>
                <button><a href="/signup">Sign Up</a></button>
            </section>
        </div>
    )
}

export default LandingPage;