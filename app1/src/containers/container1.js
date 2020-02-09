import React, { Component } from 'react';

class Container1 extends Component {


	constructor(props) {
		super(props);
		this.state = {
			stateProp1: 'Our initial state prop 1',
			stateProp2: 5
		}
	}

	// Wrong
	// changeState = () => {
	// 	this.setState.stateProp1 = 'New State';
	// }

	// Can also do this
	// this.setState({
	// 	stateProp1: this.state.stateProp2 + 1
	// }); 

	// Correct
	changeState = () => {
		this.setState((prevState, props) => ({
			stateProp1: prevState.stateProp2 + 1
		})
		); 
	}

	render() {
		return (
			<div>
				<button onClick={() => this.changeState()}>Change State</button>

				{this.state.stateProp1}
			</div>
		)
	}
}

export default Container1;