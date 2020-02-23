import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Header extends Component {

  state = {
    num: [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
  }
  render() {
    return (
      <div>
        <Link to='/'>
          Home
        </Link>
        <Link to='/authcheck'>
          authcheck
        </Link>
        <Link to='/privateroute'>
          Private Route
        </Link>
        {this.state.num.map(num =>
          <Link key={num.id} to={{ pathname: '/component/' + num.id }}>
            Component {num.id}
          </Link>
        )}
      </div>
    )
  }
}

export default Header;