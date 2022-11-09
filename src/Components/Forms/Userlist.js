import UserInList from "./UserInList";
import { variables } from "../../Variables";
import React, { Component } from 'react';


class Userlist extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        fetch(variables.API_URL + "User/GetRecommends")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            });
    }

    render() {
        var items = this.state.items;
        return (
            <div className="max-w-2xl mx-auto" >
                <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">You might know:</h3>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {items.map(item => (
                                <UserInList key={item.Name} username={item.Name} userId={item.Id} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>);
    }
}

export default Userlist;