import React, { Component } from 'react';

import Component1 from './functional/component1';
import Auth from './utils/auth';

import Container1 from './containers/container1';
import CallBack from './functional/callback';

import { Router, Route, Switch } from 'react-router';
import Header from './containers/header';
import createBrowserHistory from './utils/history';

const auth = new Auth();

const handleAuth = (props) => {
	if (props.location.hash) {
		auth.handleAuth();
	}
}

class Routes extends Component {

	render() {
		return (
			<div>
				<Router history={createBrowserHistory}>
					<div>
						<Header />
						<Switch>
							<Route exact path="/" render={() => <Container1 auth={auth} />} />
							<Route path="/callback" render={(props) => { handleAuth(props); return <CallBack /> }} />

							{/* Desctructiorization  */}
							<Route path="/component/:id" render={(props) => <div>Render Test: <Component1 {...props} /></div>} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default Routes;