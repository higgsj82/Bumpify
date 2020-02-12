import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        oppLink: <Link to='/signup' className='signup-link'>SIGN UP FOR BUMPIFY</Link>
    }
}

const mDTP = dispatch => {
    return {
        login: user => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(LoginForm)