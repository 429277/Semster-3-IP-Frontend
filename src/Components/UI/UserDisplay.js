import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';

const UserDisplay = () => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    var { name, picture, email } = isAuthenticated ? user : { name: "Not logged in", picture: "../../Assets/blank-profile.png", email: "" };

    return (
        <div className="flex mr-3">
            <img className="mt-2 mx-2 my-1 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={picture} alt="" />
            <p className="my-3 dark:text-white">{name}</p>
        </div>
    );
};

export default UserDisplay;