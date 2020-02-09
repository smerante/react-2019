import React, { Component } from 'react';
import Component1 from '../functional/component1';

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
			stateProp2: prevState.stateProp2 + 1,
			stateProp1: this.state.stateProp1 + ' L '
		})
		);
	}

	changeState2 = () => {
		this.setState({
			stateProp1: this.state.stateProp1 + ' L '
		});
	}

	render() {
		return (
			<div>
				Container Component1: 
				<div>
					<button onClick={() => this.changeState2()}>Change State 2</button>
					{this.state.stateProp1}
				</div>

				<div>
					<button onClick={() => this.changeState()}>Change State</button>
					{this.state.stateProp2}
				</div>

				<Component1 prop1={this.state.stateProp1}/>
			</div>
		)
	}
}

export default Container1;