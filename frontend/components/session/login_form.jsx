import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    render() {
        return (
            <div className='form-div'>
                <div className="form-header">
                    {/* logo goes here */}
                </div>
                <div className="form-container">
                    <div className="form-message-div">
                        <span className="form-message">To continue, log in to Bumpify.</span>
                    </div> <br/>
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
                            <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span> Remember me
                            </label>
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
                    <div>
                        <div className="opp-link-div">
                            <div>Don't have an account?</div>
                            <div className="opp-link">
                                {this.props.oppLink}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;