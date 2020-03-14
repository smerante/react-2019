import React, { Component } from 'react';

import { connect } from 'react-redux';

import Component1 from './functional/component1';
import Auth from './utils/auth';
import * as ACTIONS from './store/actions/actions';

import Container1 from './containers/container1';
import CallBack from './functional/callback';

import { Router, Route, Switch, Redirect } from 'react-router';
import Header from './containers/header';
import createBrowserHistory from './utils/history';

import AuthCheck from './utils/auth-check';
import UnauthRedirect from './functional/unauthredirect';
import ProtectedRoute from './functional/protectedroutes';

import Profile from './containers/profile';

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

	componentDidMount() {
		if (auth.isAuthenticated()) {
			this.props.login_success();
			auth.getProfile();
			setTimeout(() => {
				this.props.add_profile(auth.userProfile);
			}, 2000);
		}
		else {
			this.props.login_failure();
			this.props.remove_profile();
		}
	}

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
							<PrivateRoute path="/profile" auth={auth} component={Profile} />

						</Switch>
					</div>
				</Router>
			</div>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		login_success: () => dispatch(ACTIONS.login_success()),
		login_failure: () => dispatch(ACTIONS.login_failure()),
		add_profile: (profile) => dispatch(ACTIONS.add_profile(profile)),
		remove_profile: () => dispatch(ACTIONS.remove_profile())

	}
}

export default connect(null, mapDispatchToProps)(Routes);