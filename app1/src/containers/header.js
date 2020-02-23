import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

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
        {!this.props.isAuthenticated
          ? <button onClick={() => this.props.auth.login()}>Login</button>
          : <button onClick={() => this.props.auth.logout()}>Logout</button>
        }
        {this.state.num.map(num =>
          <Link key={num.id} to={{ pathname: '/component/' + num.id }}>
            Component {num.id}
          </Link>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.reducer1.stateProp1,
    userInput: state.reducer2.userText,
    isAuthenticated: state.authReducer.isAuthenticated
  }
}


export default connect(mapStateToProps)(Header);