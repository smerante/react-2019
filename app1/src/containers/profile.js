import React, { Component } from 'react';

import { connect } from 'react-redux';

class Profile extends Component {
  RenderProfile = (props) => (
    <div>
      <h1>{props.profile.profile.nickname}</h1>
      <br />
      <img src={props.profile.profile.picture} alt="" />
      <br />
      <h4>{props.profile.profile.email}</h4>
      <br />
      <h5>{props.profile.profile.nam}</h5>
      <br />
      <h6>Email Verified: {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p>}</h6>
    </div>
  )

  render() {
    return (
      <div>
        <this.RenderProfile profile={this.props.profile}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.reducer1.stateProp1,
    userInput: state.reducer2.userText,
    isAuthenticated: state.authReducer.isAuthenticated,
    profile: state.authReducer.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);