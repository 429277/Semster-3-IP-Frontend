import Post from '../UI/Post';
import { variables } from '../../Variables';
import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get(variables.API_URL + "Post/GetFeed")
      .then(res => {
        const items = res.data
        this.setState({
          items
        });
      });
  }


  render() {
    var items = this.state.items;

    return (
      <div className="">
        <h2>Welcome back!</h2>
        <main className="py-4">
          <div className="px-4">
            <div className="block justify-between md:-mx-2">
              {/**md:flex */}
              {items.map(ite => (
                <Post username={ite.Username} message={ite.Caption} image={ite.Image} />
              ))}
            </div>
          </div>
        </main>
      </div>

    );
  }
};

export default Feed;