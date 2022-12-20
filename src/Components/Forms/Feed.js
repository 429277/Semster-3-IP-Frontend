import Post from '../UI/Post';
import { variables } from '../../Variables';
import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../UI/Loading';

class Feed extends Component {

  constructor({ ApiRoute }) {
    super();
    this.ApiRoute = ApiRoute;

    this.state = {
      items: [],
      loaded: false,
    }
  }

  componentDidMount() {
    axios.get(variables.API_URL + this.ApiRoute)
      .then(res => {
        const items = res.data
        this.setState({
          items,
          loaded: true
        });
        console.log(this.state.loaded);
      });
  }


  render() {
    var items = this.state.items;

    if (this.state.loaded) {
      return (
        <div className="">
          <h2>Welcome back!</h2>
          <main className="py-4">
            <div className="px-4">
              <div className="block justify-between md:-mx-2">
                {items.map(ite => (
                  <Post username={ite.Username} message={ite.Caption} image={ite.Image} />
                ))}
              </div>
            </div>
          </main>
        </div>
      );
    } else {
      return (<div className="w-fit inline-block content-center pt-[60px] scale-[3.0]"><Loading /></div>)
    }
  }
};

export default Feed;