import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button className="relative flex w-full flex-row items-center h-11 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            onClick={() => logout({ returnTo: window.location.origin, })}>
            <span className="inline-flex justify-center items-center ml-4" >
                <svg className="w-5 h-5 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate dark:text-white">Logout</span>
        </button>
    );
};

export default LogoutButton;