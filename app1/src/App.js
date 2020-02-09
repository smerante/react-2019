import React, { Component } from 'react';

class App extends Component {

  render() {
    const obj1 = {
      key1: 'Some Data'
    };

    return (
      <div className="App">
        { React.createElement(
          'div',
          {className: 'app'},
          obj1.key1
        ) }
      </div>
    );
  }
}

export default App;
