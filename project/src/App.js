import React, { useState } from 'react';
import Routes from './routes';
import Context from './utils/context';



//main app 
const App = () => {

  const [globalState, setglobalState] = useState(0)

  const incrementGlobalState = () => {
    setglobalState(globalState + 1);
  }

  const decrementGlobalState = () => {
    setglobalState(globalState - 1);
  }

  return (
    <div>
      React
      <Context.Provider
        value={{
          valueGlobalState: globalState,
          incrGlobalValue: () => incrementGlobalState(),
          decrGlobalValue: () => decrementGlobalState(),
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
