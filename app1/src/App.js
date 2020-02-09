import React, { Component } from 'react';
import Component1 from './functional/component1';

class App extends Component {

  render() {
    const obj1 = {
      key1: 'Some Data'
    };

    return (
      <div className="App">
        <Component1/>
      </div>
    );
  }
}

export default App;
