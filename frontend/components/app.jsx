import React from 'react';
import {
    Route,
    Switch,
    Router
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePageContainer from './home_page/home_page_container';


const App = () => {
    return (
        <div>
            <HeaderContainer/>
            <Switch>
                <AuthRoute exact path="/" component={HomePageContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    )
}

export default App;