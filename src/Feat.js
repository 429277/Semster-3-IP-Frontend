import Post from './Post';
import { variables } from './Variables.js';
import React, { Component } from 'react';
import axios from 'axios';

class Feat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    axios.get(variables.API_URL + "Post")
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
        <main class="py-4">
          <div class="px-4">
            <div class="block justify-between md:-mx-2">
              {/**md:flex */}
              {items.map(ite => (
                <Post user={ite.UserName} message={ite.Caption} />
              ))}
            </div>
          </div>
        </main>
      </div>

    );
  }
};

export default Feat;