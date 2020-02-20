import React, { Component } from 'react';
import history from './history';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';



class AuthCheck extends Component {

    render() {
  
      return (
        <div>
            Auth Check
        </div>
      )
    }

    componentDidMount() {
        console.warn('component mounted: ', this.props.auth);
        if (this.props.auth.isAuthenticated()) {
            this.props.login_success();
            history.replace('/');
        }
        else {
            this.props.login_failure();
            history.replace('/');
        }
    }

}

function mapStateToProps(state) {
    console.warn('map states to props: ', state);
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login_success: () => dispatch(ACTIONS.login_success()),
        login_failure: () => dispatch(ACTIONS.login_failure())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);