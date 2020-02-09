import React, { Component } from 'react';
import Container1 from './containers/container1';
import Component1 from './functional/component1';

class App extends Component {

  render() {
    const obj1 = {
      key1: 'Some Data'
    };

    return (
      <div className="App">
        App1 Comp
        <div style={{marginLeft: 16}}>
          <Container1 nickname="Samwise"/>
        </div>
        <div style={{marginLeft: 16}}>
          <Component1 name="sam" age={25} />
        </div>
      </div>
    );
  }
}

export default App;
