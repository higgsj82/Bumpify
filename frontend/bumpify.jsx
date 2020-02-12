import React from 'react';
import ReactDOM from 'react-dom';
import bumpifyStore from './store/store';
import Root from './components/root';

// testing
import * as SessionAPIUtils from './util/session_api_utils';
// testing

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // testing
    window.login = SessionAPIUtils.login;
    window.logout = SessionAPIUtils.logout;
    window.signup = SessionAPIUtils.signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // testing
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}></Root>, root);
});