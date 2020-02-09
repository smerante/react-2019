import React, { Component } from 'react';
import Container1 from './containers/container1';
import Component1 from './functional/component1';

class App extends Component {

  renderFunction1 = () => {
    if(true) {
      return (
        <div>
          Condition 1
        </div>
      )
    } else {
      return (
      <div>
        Condition 2
      </div>
      )
    }
  }

  render() {
      return (
        <div className="App">
          <Container1/>
        </div>
      );
  }
}

export default App;
