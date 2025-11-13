import React from 'react';
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500 dark:bg-gray-900">
            <div className="text-center p-8 max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition duration-500 hover:scale-[1.02]">

                <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4 animate-pulse">
                    404
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <div>
                    <Link to="/" className='btn btn-primary'>Home</Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorElement;