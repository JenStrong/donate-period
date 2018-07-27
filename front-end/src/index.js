import React from 'react';
import ReactDOM from 'react-dom';
import Charity from './charity';
import Wishlist from './wishlist';
import Form from './form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Charity />
        <Form />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
