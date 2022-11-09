import { variables } from '../../Variables.js';
import axios from 'axios';
import { useState } from 'react'



const UserInList = ({ username, userId, }) => {
    const [followState, setFollowState] = useState('follow');

    const FollowUser = (Id) => {
        console.log(Id);
        const FollowLogic = { followerId: 10001, followingId: Id };
        axios.post(variables.API_URL + "User", FollowLogic);

        setFollowState('✓')
    }

    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={require('../../Assets/blank-profile.png')} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {username}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                    </p>
                </div>
                <button onClick={() => { FollowUser(userId) }} type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    {followState}
                </button>
            </div>
        </li>);
}

export default UserInList;