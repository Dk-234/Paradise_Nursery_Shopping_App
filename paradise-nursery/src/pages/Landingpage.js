import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Landingpage.css'; // Import your CSS file for styling

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>
            <p>At Green Haven Nursery, we are passionate about bringing nature closer to you. 
               Our mission is to provide high-quality plants and gardening essentials to help 
               you create a serene and vibrant living space.</p>
            <Link to="/products" className="get-started-btn">Get Started</Link>
        </div>
    );
};

export default LandingPage;
