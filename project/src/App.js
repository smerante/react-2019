import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks-reducer';
import * as FormsReducer from './store/hooks_state/forms-reducer';
import * as ACTIONS from './store/actions/actions';



//main app 
const App = () => {

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)
  const [formGlobal, dispatchformGlobal] = useReducer(FormsReducer.FormsReducer, FormsReducer.initialFormState)

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



  const handleFormChange = ($event) => {
    dispatchformGlobal(ACTIONS.user_changed_form($event.target.value))
  }

  const handleFormSubmit = ($event) => {
    $event.preventDefault();
    $event.persist();
    dispatchformGlobal(ACTIONS.user_submitted_form($event.target.useFormContext.value))
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
          dispatchContextFalse: () => handleContextDispatchFalse(),

          user_form_change: formGlobal.user_form_change,
          user_form_submit: formGlobal.user_form_submit,
          dispatchFormChange: ($event) => handleFormChange($event),
          dispatchFormSubmit: ($event) => handleFormSubmit($event),
        }}
      >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
