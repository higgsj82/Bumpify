import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    )
}

export default App;