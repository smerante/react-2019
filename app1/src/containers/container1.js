import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';

import { connect } from 'react-redux';

class Container1 extends Component {



  render() {
    const mock_user_input = 'Mock user input';

    return (
      <div>
        <button onClick={() => console.warn(this.props)}>Get State</button>
        <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
        
        <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
        <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>
        <button onClick={() => this.props.action_creator3(mock_user_input)}>Dispatch Action Creator 3</button>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.stateProp1,
    userInput: state.userText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
    action_creator3: (value) => dispatch(ACTIONS.user_input(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);