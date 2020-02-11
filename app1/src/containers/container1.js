import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';

import { connect } from 'react-redux';

class Container1 extends Component {



  render() {
    return (
      <div>
        <button onClick={() => console.warn(this.props)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        
        <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
        <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.stateProp1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);