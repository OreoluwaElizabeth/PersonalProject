import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Welcome to the Home Page!</h1>
            <p>You have successfully logged in.</p>
            <h2>What would you like to do today?</h2>
            <div className='options-container'>
                <button className='option-button'>
                    <a href="/create">Create new contact</a>
                </button>
                <button className='option-button'>
                    <a href="/view">View all contact</a>
                </button>
                <button className='option-button'>
                    <a href="/edit">Edit contact</a>
                </button>
                <button className='option-button'>
                    <a href="/search">Search contact</a>
                </button>
                <button className='option-button'>
                    <a href="/delete">Delete contact</a>
                </button>
            </div>
        </div>
    )
}

export default Home;