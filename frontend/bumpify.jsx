import React from 'react';
import ReactDOM from 'react-dom';
import bumpifyStore from './store/store';
import Root from './components/root';

// testing
import * as SessionAPIUtils from './util/session_api_utils';
// testing

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = bumpifyStore();
    // testing
    window.login = SessionAPIUtils.login;
    window.logout = SessionAPIUtils.logout;
    window.signup = SessionAPIUtils.signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // testing
    ReactDOM.render(<Root store={store}></Root>, root);
});