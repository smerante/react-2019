import React, { useState } from 'react';


//main app 
const HooksContainer1 = () => {

    // const stateValue = useState(0)[0]
    // const setValue = useState(0)[0]
    const [counter, setCounter] = useState(10)

    const incrementValue = () => {
        setCounter(counter + 1);
    }

    const decrementValue = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            React Hooks
            <br />
            <button onClick={() => incrementValue()}>Incr local state </button>
            <button onClick={() => decrementValue()}>Decr local value </button>

            <p>Local State: {counter}</p>

        </div>
    )
}


export default HooksContainer1;
