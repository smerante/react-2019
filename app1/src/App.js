import React, { Component } from 'react';

class App extends Component {
// name = 'same' ==> {this.sam}

  render() {
   const name = 'sam'
    return (
      <div className="App">
        React-2019
       {name}
      </div>
    );
  }
}

export default App;
