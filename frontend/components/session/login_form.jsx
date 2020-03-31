import React from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        return (
            <>
            <div className='form-div'>
                <div className="form-container">
                <div className="form-logo">
                    <NavLink to="/"><img className='session-logo' src={window.sessionLogo} /></NavLink>
                </div>
                    <div className="form-message-div">
                        <span className="login-form-message">To continue, log in to Bumpify.</span>
                    </div> <br/>
                    {this.renderErrors()}
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input className="input-field" 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email address or username" /> <br/>
                        <input className="input-field" 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" /> <br/>
                        <div className="row-submit">
                            <div className="button-div">
                                <button className="session-button">LOG IN</button>
                            </div>
                        </div>
                    </form>
                    <div className="forgot-div">
                        <p>
                            <a href="#">Forgot your password?</a>
                        </p>
                    </div>
                    <div className="last-div">
                        <div className="opp-link-div">
                            <p>Don't have an account?</p>
                            <div className="opp-link">
                                {this.props.oppLink}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default LoginForm;