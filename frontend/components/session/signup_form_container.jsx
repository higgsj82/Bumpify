import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        oppLink: <Link to='/login' className='login-link'>Log in</Link>
    }
}

const mDTP = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SignupForm)