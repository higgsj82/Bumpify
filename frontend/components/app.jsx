import React from 'react';
import {
    Route,
    Switch,
    Router
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import { AuthRoute, MainRoute } from '../util/route_util';
import SplashPageContainer from './splash_page/splash_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main_page/main_page_container';

// does main route need to be in switch?
// try putting an auth route inside the 
const App = () => {
    return (
        <div className="app-div">
            <Route exact path="/main" component={MainPageContainer} />
                {/* <MainRoute exact path="/" component={MainPageContainer} other={SplashPageContainer}/> */}
            <Switch>
                <AuthRoute exact path="/" component={SplashPageContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    )
}

export default App;