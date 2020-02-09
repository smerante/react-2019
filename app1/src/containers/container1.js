import React, { Component } from 'react';

class Container1 extends Component {


	constructor(props) {
		super(props);
		this.state = {
			stateProp1: 'Our initial state prop 1'
		}
	}

	// Wrong
	// changeState = () => {
	// 	this.setState.stateProp1 = 'New State';
	// }

	// Correct
	changeState = () => {
		this.setState({ stateProp1: 'New State' });
	}

	render() {
		return (
			<div>
				<button onClick={() => this.changeState()}>Change State</button>

				{/* Not reccomended */}
				<button onClick={() => this.setState({ stateProp1: 'New State' })}>Change State 2</button>
				{ this.state.stateProp1 }
			</div>
		)
	}
}

export default Container1;