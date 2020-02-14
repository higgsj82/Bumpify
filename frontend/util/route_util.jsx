import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/main" />
            )
    )} />
);

const Main = ({ component: Component, other: Other, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Other {...props} />
            )
    )} />
);

// make a similar function that renders the main page or the splash page based
// on if user is logged in

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const MainRoute = withRouter(connect(mapStateToProps)(Main));
