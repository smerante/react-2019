import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import Reducer1 from './store/reducers/reducer1';
import { createStore } from 'redux';

const store = createStore(Reducer1);

console.log("STORE state:", store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
