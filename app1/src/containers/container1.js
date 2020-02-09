import React, { Component } from 'react';

class Container1 extends Component {

	// To implement forms without es6 arrow functions
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	state = {
		value: ''
	}

	handleChange = (event) => {
	this.setState({ value: event.target.value });
	}

	// To implement forms without es6 arrow functions
	handleSubmit(event){
		event.preventDefault();
		console.warn(this.state.value);
	}

	render() {
		return (
			<div>
				{ this.state.value }
				<form onSubmit = {this.handleSubmit}>
					<label>Name</label>
					<input id="name" onChange={this.handleChange} type="text" />

					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}

}

export default Container1;