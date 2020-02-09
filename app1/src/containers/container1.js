import React, { Component } from 'react';

class Container1 extends Component {

	arr1 = [
		{id: 1, text: '1', number : 1},
		{id: 2, text: '2', number : 2},
		{id: 3, text: '3', number : 3},
		{id: 4, text: '4', number : 4},
		{id: 5, text: '5', number : 5},
	];

	renderListItem = (props) => (
		<div>
			{ props.item.id }
			{ props.item.text }
			{ props.item.number }
		</div>
	)

	render() {
		return (
			<div>
				{this.arr1.map(item => (
					<this.renderListItem key={item.id} item={item} />	
				))}
			</div>
		)
	}
}

export default Container1;