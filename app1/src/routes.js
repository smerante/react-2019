import React, { Component } from 'react';

import Component1 from './functional/component1';
import Auth from './utils/auth';

import Container1 from './containers/container1';
import CallBack from './functional/callback';

import { Router, Route, Switch, Redirect } from 'react-router';
import Header from './containers/header';
import createBrowserHistory from './utils/history';

import AuthCheck from './utils/auth-check';
import UnauthRedirect from './functional/unauthredirect';
import ProtectedRoute from './functional/protectedroutes';

const auth = new Auth();

const handleAuth = (props) => {
	if (props.location.hash) {
		auth.handleAuth();
	}
}

const PrivateRoute = ({ component: Component, auth }) => (
	<Route render={
		props =>
			auth.isAuthenticated() === true
				? <Component auth={auth} {...props} />
				: <Redirect to={{ pathname: './redirect' }} />
	} />
)

class Routes extends Component {

	render() {
		return (
			<div>
				<Router history={createBrowserHistory}>
					<div>
						<Header auth={auth} />
						<Switch>
							<Route exact path="/" render={() => <Container1 auth={auth} />} />
							<Route path="/callback" render={(props) => { handleAuth(props); return <CallBack /> }} />
							<Route path="/redirect" component={UnauthRedirect} />

							{/* Desctructiorization  */}
							<Route path="/component/:id" render={(props) => <div>Render Test: <Component1 {...props} /></div>} />
							<Route path="/authcheck" render={() => <div>Rendering auth check <AuthCheck auth={auth} /></div>} />

							<PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute} />

						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default Routes;