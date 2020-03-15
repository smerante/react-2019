import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooks_state/hooks-reducer';
import * as ACTIONS from '../store/actions/actions';

//main app 
const HooksContainer1 = () => {

    // const stateValue = useState(0)[0]
    // const setValue = useState(0)[0]
    const [counter, setCounter] = useState(10)
    const [useEffectValue, setUseEffectValue] = useState(null)
    const [hooksState, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    useEffect(() => {
        setUseEffectValue('useEffect worked!')
    }, [counter])


    const incrementValue = () => {
        setCounter(counter + 1);
    }

    const decrementValue = () => {
        setCounter(counter - 1);
    }


    const changeUseEffectValue = () => {
        setUseEffectValue('Some string')
    }

    const handleDispatchTrue = () => {
        // dispatch(ACTIONS.SUCCESS)
        // dispatch(type: "SUCCESS")
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        // dispatch(ACTIONS.FAILURE)
        // dispatch(type: "FAILURE")
        dispatch(ACTIONS.failure())
    }

    return (
        <div>
            React Hooks
            <br />
            <button style={{margin: '5px'}} onClick={() => incrementValue()}>Incr local state </button>
            <button style={{margin: '5px'}} onClick={() => decrementValue()}>Decr local value </button>
            <button style={{margin: '5px'}} onClick={() => changeUseEffectValue()}>Change useEffect value </button>

            <button style={{margin: '5px'}} onClick={() => handleDispatchTrue()}>Dispatch True </button>
            <button style={{margin: '5px'}} onClick={() => handleDispatchFalse()}>Dispatch False </button>

            <p>Local State: {counter}</p>
            <br />
            <p>Use effect value:
                {
                    useEffectValue ?
                        <p>{useEffectValue}</p> :
                        <p>No Value </p>
                }
            </p>

            <br />

            {
                hooksState.stateprop1 ?
                    <p>state prop 1: true</p> :
                    <p>state prop 1: false </p>
            }

        </div>
    )
}


export default HooksContainer1;
