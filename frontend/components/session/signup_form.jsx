import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            confirmEmail: "",
            password: "",
            preferredName: "",
            DOB: "",
            gender: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
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
                        <span className="form-message">Sign up with your email address</span>
                    </div> <br/>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input className="input-field"
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email" /> <br/>
                        <input className="input-field"
                            type="text"
                            value={this.state.confirmEmail}
                            onChange={this.update('confirmEmail')}
                            placeholder="Confirm email" /> <br/>
                        <input className="input-field"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" /> <br/>
                        <input className="input-field"
                            type="text"
                            value={this.state.preferredName}
                            onChange={this.update('preferredName')}
                            placeholder="What should we call you?" /> <br/>
                            <label>Date of Birth</label>
                        <div className="dob-container">
                            <select className="dob" name="signup-form[month]">
                                <option value selected="selected">month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">Novemeber</option>
                                <option value="12">December</option>
                            </select>
                            <input type="number" min="1" max="31" placeholder="Day"/>
                            <input type="number" min="1900" max="2007"/>
                        </div>
                        <div></div>
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Share my registration data with Bumpify's content 
                            providers for marketing purposes.
                        </label>
                        <div className="button-div">
                            <button className="session-button">SIGN UP</button>
                        </div>
                    </form>
                    <div className="account-already-div">
                        <div className="opp-link-div">
                            <div>Already have an account?</div>
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

export default SignupForm;