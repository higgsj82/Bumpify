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


const App = () => {
    return (
        <div className="app-div">
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
                <MainRoute exact path="/" component={MainPageContainer} other={SplashPageContainer}/>
        </div>
    )
}

export default App;