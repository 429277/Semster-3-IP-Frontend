import { variables } from './Variables.js';
import axios from 'axios';

const FollowUser = () => {
    const FollowLogic = { followerId: 10001, followingId: 10000 };
    axios.post(variables.API_URL + "User", FollowLogic);
}

const UserInList = ({ username, userId, }) => {
    return (
        <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {username}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                    </p>
                </div>
                <button onClick={() => { FollowUser() }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    follow
                </button>
            </div>
        </li>);
}

export default UserInList;