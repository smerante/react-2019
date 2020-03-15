import React, { useState, useReducer, useContext } from 'react';
import * as FormsReducer from '../store/hooks_state/forms-reducer';
import * as ACTIONS from '../store/actions/actions';

import Context from '../utils/context';

const HooksForm = () => {
    const [formChange, setformChange] = useState('');
    const [formSubmit, setformSubmit] = useState('');

    const [formState, formDispatch] = useReducer(FormsReducer.FormsReducer, FormsReducer.initialFormState);

    const context = useContext(Context);

    const handleFormChange = ($event) => {
        setformChange($event.target.value);
    }

    const handleFormSubmit = ($event) => {
        $event.preventDefault();
        $event.persist();
        setformSubmit($event.target.useState.value);
    }


    const handleFormReducerChange = ($event) => {
        formDispatch(ACTIONS.user_changed_form($event.target.value));
    }


    const handleFormReducerSubmit = ($event) => {
        $event.preventDefault();
        $event.persist();
        formDispatch(ACTIONS.user_submitted_form($event.target.useFormReducer.value));
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


            <form onSubmit={handleFormReducerSubmit}>
                <label>React useFormReducer form:</label>
                <input
                    id="useFormReducer"
                    type="text"
                    onChange={($event) => handleFormReducerChange($event)} />
                <button type="submit">Submit Reducer form</button>
            </form>

            <h2>React userReducer: </h2>
            <p>Change: {formState.user_form_change}</p>
            <p>Submit: {formState.user_form_submit}</p>



            <form onSubmit={context.dispatchFormSubmit}>
                <label>React useContext form:</label>
                <input
                    id="useFormContext"
                    type="text"
                    onChange={($event) => context.dispatchFormChange($event)} />
                <button type="submit">Submit Context form</button>
            </form>

            <h2>React userContext: </h2>
            <p>Change: {context.user_form_change}</p>
            <p>Submit: {context.user_form_submit}</p>
        </div>
    )
}

export default HooksForm;