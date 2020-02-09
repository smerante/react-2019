import React, { Component } from 'react';

class Container1 extends Component {

    render() {
        return (
            <div>
                {this.props.nickname}
            </div>
        )
    }
}

export default Container1;