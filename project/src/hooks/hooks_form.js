import React, { useState, useReducer, useContext } from 'react';

const HooksForm = () => {
    const [formChange, setformChange] = useState('');
    const [formSubmit, setformSubmit] = useState('');


    const handleFormChange = (event) => {
        setformChange(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.persist();
        setformSubmit(event.target.useState.value);
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>React useState form:</label>
                <input
                    id="useState"
                    type="text"
                    onChange={($event) => handleFormChange($event)} />
                <button type="submit">Submit</button>
            </form>

            <h2>React useState: </h2>
            <p>Change: {formChange}</p>
            <p>Submit: {formSubmit}</p>
        </div>
    )
}

export default HooksForm;