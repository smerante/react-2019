import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer);

console.log("STORE state:", store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
