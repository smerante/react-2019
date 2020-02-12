import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>
        <Link to='/component1'>
          Component1
        </Link>
        <Link to='/component2'>
          Component2
        </Link>
        <Link to='/component3'>
          Component3
        </Link>
      </div>
    )
  }
}

export default Header;