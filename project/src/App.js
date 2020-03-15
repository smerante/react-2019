import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks-reducer';
import * as ACTIONS from './store/actions/actions';



//main app 
const App = () => {

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const [globalState, setglobalState] = useState(0)

  const incrementGlobalState = () => {
    setglobalState(globalState + 1);
  }

  const decrementGlobalState = () => {
    setglobalState(globalState - 1);
  }



  const handleContextDispatchTrue = () => {
    // dispatch(ACTIONS.SUCCESS)
    // dispatch(type: "SUCCESS")
    dispatchContextGlobal(ACTIONS.success())
  }

  const handleContextDispatchFalse = () => {
    // dispatch(ACTIONS.FAILURE)
    // dispatch(type: "FAILURE")
    dispatchContextGlobal(ACTIONS.failure())
  }

  return (
    <div>
      React
      <Context.Provider
        value={{
          valueGlobalState: globalState,
          incrGlobalValue: () => incrementGlobalState(),
          decrGlobalValue: () => decrementGlobalState(),

          reducerGlobalState: stateContextGlobal.stateProp2,
          dispatchContextTrue: () => handleContextDispatchTrue(),
          dispatchContextFalse: () => handleContextDispatchFalse()
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
