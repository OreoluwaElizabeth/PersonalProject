import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import LandingPage from './Component/LandingPage';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Home from './Component/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Header />
              <LandingPage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;