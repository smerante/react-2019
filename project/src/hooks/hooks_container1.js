import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks-reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context';


//main app 
const HooksContainer1 = () => {

    const context = useContext(Context);

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
            <button style={{ margin: '5px' }} onClick={() => incrementValue()}>Incr local state </button>
            <button style={{ margin: '5px' }} onClick={() => decrementValue()}>Decr local value </button>
            <button style={{ margin: '5px' }} onClick={() => changeUseEffectValue()}>Change useEffect value </button>

            <button style={{ margin: '5px' }} onClick={() => handleDispatchTrue()}>Dispatch True </button>
            <button style={{ margin: '5px' }} onClick={() => handleDispatchFalse()}>Dispatch False </button>


            <br />
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

            <br />

            <button style={{ margin: '5px' }} onClick={() => context.incrGlobalValue()}>inc global state</button>
            <button style={{ margin: '5px' }} onClick={() => context.decrGlobalValue()}>inc global state</button>

            <button style={{ margin: '5px' }} onClick={() => context.dispatchContextTrue()}>Dispatch global true</button>
            <button style={{ margin: '5px' }} onClick={() => context.dispatchContextFalse()}>Dispatch global false</button>

            <p>Global State: {context.valueGlobalState}</p>


            <br />

            {
                context.reducerGlobalState ?
                    <p>state prop 2: true</p> :
                    <p>state prop 2: false </p>
            }

            <br />

            {
                context.user_form_change ?
                    <p>{context.user_form_change}</p> :
                    <p>form not changed </p>
            }


            <br />

            {
                context.user_form_submit ?
                    <p>{context.user_form_submit}</p> :
                    <p>form not submitted </p>
            }

        </div>
    )
}


export default HooksContainer1;
