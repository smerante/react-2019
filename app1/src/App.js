import React, { Component } from 'react';
import './App.css';
import * as styles from './styles'

class App extends Component {


  render() {

    return (
      <div className="App">
        <div style={styles.divStyle}>
          React-2019
        <button id="test" className="test">Button 1 </button>
        </div>
      </div>
    );
  }
}

const appInstance = new App();

console.warn(appInstance);

export default App;
