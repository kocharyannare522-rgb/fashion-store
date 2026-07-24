import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="not_found_container">
            <div className="not_found_content">
                <h1 className="error_code">404</h1>
                <h2 className="error_message">Oops! Page Not Found</h2>
                <p className="error_description">
                    The page you are looking for might have been removed, 
                    had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="back_home_btn">
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
}