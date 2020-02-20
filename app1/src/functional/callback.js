import React from 'react';

const Callback = props => (
    <div>
        Callback
        {console.warn(props)}
    </div>
);

export default Callback;