import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:3010/wishlist/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <div>
        <ul>
        {items.map(item => (
          <li key={item['item']}>
            {item['item']}
          </li>
        ))}
        </ul>
        </div>
        <div>
        <Link to={'/charitiesBuilder'}>
          Back
        </Link>
        {" "}
        <Link to={'/donate'}>
          Donate Now
        </Link>
        </div>
        </div>
      );
    }
  }
};

export default Wishlist;