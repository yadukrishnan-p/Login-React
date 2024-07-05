import React, { useState } from 'react';
import axios from 'axios';
 import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            console.log(response.data);

            // Display success message
            setSuccessMessage('Login successful');

            // Example: Redirect to dashboard after login
            // Replace with your own logic
            setTimeout(() => {
                // Redirect or handle successful login
            }, 1000);
        } catch (error) {
            console.error(error);
            setError('Login failed. Please check your details.');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
            <p>Don't have an account? <a href="/">Sign Up</a></p>
        </div>
    );
};

export default Login;
