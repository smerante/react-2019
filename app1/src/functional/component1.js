import React from 'react';

const Component1 = props => (
    <div>
        Component {props.match.params.id}
    </div>
);

export default Component1;