import React, { useState, useEffect } from 'react';


//main app 
const HooksContainer1 = () => {

    // const stateValue = useState(0)[0]
    // const setValue = useState(0)[0]
    const [counter, setCounter] = useState(10)
    const [useEffectValue, setUseEffectValue] = useState(null)


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

    return (
        <div>
            React Hooks
            <br />
            <button onClick={() => incrementValue()}>Incr local state </button>
            <button onClick={() => decrementValue()}>Decr local value </button>
            <button onClick={() => changeUseEffectValue()}>Change useEffect value </button>

            <p>Local State: {counter}</p>
            <br />
            <p>Use effect value:
                {
                    useEffectValue ?
                        <p>{useEffectValue}</p> :
                        <p>No Value </p>
                }
            </p>

        </div>
    )
}


export default HooksContainer1;
