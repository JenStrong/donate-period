import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Charity from './charity';

class CharitiesBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charities: []
    };
  }

  componentDidMount() {
    fetch('https://api.justgiving.com/2605491e/v1/charity/search', {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            charities: result
          });
        },
      )
  }

  render() {
    return (
      // All Charities to go here
      <div>

        <Link to={'/'}>
          Back
        </Link>
        {" "}
        <Link to={'/wishlist'}>
          Our Wishlist
        </Link>
      </div>
    );
  }
}

export default CharitiesBuilder;
