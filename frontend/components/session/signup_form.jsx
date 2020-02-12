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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
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
                    {this.renderErrors()}
                    <form className="signup-form" onSubmit={this.handleSubmit}>
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
                            <label className="dob-label">Date of Birth</label>
                        <div className="dob-container">
                            <select className="dob dob-month" name="signup-form[month]">
                                <option value="selected">Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">Novemeber</option>
                                <option value="12">December</option>
                            </select>
                            <input className="dob dob-day" type="number" min="1" max="31" placeholder="Day"/>
                            <input className="dob dob-year" type="number" min="1900" max="2007" placeholder="Year"/>
                        </div>
                        <div className="gender-container">
                            <label>
                                <input type="radio" value="female"/> Female
                            </label> 
                            <label>
                                <input type="radio" value="male"/> Male
                            </label> 
                            <label>
                                <input type="radio" value="neutral" /> Non-binary
                            </label> 
                        </div>
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Share my registration data with Bumpify's content 
                            providers for marketing purposes.
                        </label>
                        <div className="signup-button-div">
                            <button className="signup-button">SIGN UP</button>
                        </div>
                    </form>
                    <div className="account-already-div">
                        <div className="opp-link-div">
                            <p>Already have an account? 
                                {this.props.oppLink}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;