import React, { Component } from 'react';

class Container1 extends Component {


	constructor(props) {
		super(props);
		this.state = {
			stateProp1: 'Our initial state prop 1'
		}
	}

	render() {
		return (
			<div>
				{ this.state.stateProp1 }
			</div>
		)
	}
}

export default Container1;