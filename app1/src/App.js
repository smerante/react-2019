import React, { Component } from 'react';
import Container1 from './containers/container1';
import Component1 from './functional/component1';

class App extends Component {

  // Not recommend
  // render() {
  //   if(false) {
  //     return (
  //       <div className="App">
  //         Condition 1
  //       </div>
  //     );
  //   }
  //   else {
  //     return (
  //       <div className="App">
  //         Condition 2
  //       </div>
  //     );
  //   }
  // }

  render() {
      return (
        <div className="App">
          { true 
            ? <div>Condition 1 {true ? 'a' : 'b'}</div>
            : <div>Condition 2 {false ? 'a' : 'b'}</div>
          }
        </div>
      );
  }
}

export default App;
