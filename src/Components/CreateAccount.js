import React, { useState } from 'react';
import axios from 'axios';
import './CreateAccount.css';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!validateEmail(email)) {
            setError('Invalid email address');
            return;
        }

        if (name.length < 3) {
            setError('Full name must be at least 3 characters');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // Clear previous error message
        setError('');

        // Send data to backend
        try {
            const response = await axios.post('http://localhost:5000/register', {
                email,
                name,
                password,
            });

            console.log(response.data);

            // Handle successful registration
            setSuccess('Submitted successfully!');
        } catch (error) {
            console.error(error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="form-wrapper">
            <img src="/Logo.png" alt="Logo" className="logo" />
            <h1>Create an account</h1>
            <button className="google-btn">
                Create account with Google
                <img src="/flat-color-icons_google.png" alt="Google Logo" />
            </button>
            <div className="divider">
                <span>Or</span>
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Create your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span className="toggle-password">👁️</span>
                </div>
                <button type="submit" className="submit-btn">Create an account</button>
            </form>
            <p>Already have an account? <Link to={'/log-in'}>Login</Link></p>
            <div className="social-icons">
                <a href="#"><img src="/ic_baseline-facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="/mdi_twitter.png" alt="Twitter" /></a>
                <a href="#"><img src="/ri_instagram-fill.png" alt="Instagram" /></a>
                <a href="#"><img src="/mdi_linkedin.png" alt="LinkedIn" /></a>
            </div>
        </div>
    );
};

export default CreateAccount;