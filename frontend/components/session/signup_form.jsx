import React from 'react';
import { NavLink } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            confirmEmail: "",
            password: "",
            preferred_name: "",
            DOB: "",
            gender: "",
            month: "",
            day: "",
            year: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount () {
        this.props.clearErrors()
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.day.length < 2) {
            this.state.day = `0${this.state.day}`
        }
        this.state.DOB = `${this.state.year}${this.state.month}${this.state.day}`;
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li className="session-errors" key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    render() {
        let errors;
        if (this.renderErrors() === null) {
            errors = "";
        } else {
            errors = "errors"
        }
        return (
            <>
            <div className='form-div'>
                <div className="form-container">
                    <div className="form-logo">
                        <NavLink to="/"><img className='session-logo signup-logo' src={window.sessionLogo} /></NavLink>
                    </div>
                    <div className="form-message-div">
                        <span className="form-message">Sign up with your email address.</span>
                    </div> <br/>
                    {this.renderErrors()}
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <input className={`input-field ${errors}`}
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email" /> <br/>
                        <input className={`input-field ${errors}`}
                            type="text"
                            value={this.state.confirmEmail}
                            onChange={this.update('confirmEmail')}
                            placeholder="Confirm email" /> <br/>
                        <input className={`input-field ${errors}`}
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password" /> <br/>
                        <input className={`input-field ${errors}`}
                            type="text"
                            value={this.state.preferred_name}
                            onChange={this.update('preferred_name')}
                            placeholder="What should we call you?" /> <br/>
                            <label className="dob-label">Date of Birth</label>
                        <div className="dob-container">
                            <select className={`dob dob-month ${errors}`} value={this.state.month} onChange={this.update('month')} >
                                <option value="selected">Month</option>
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
                            <input className={`dob dob-day ${errors}`}
                                    type="number"
                                    value={this.state.day}
                                    onChange={this.update('day')}
                                    min="01" 
                                    max="31" 
                                    placeholder="Day"/>
                                <input className={`dob dob-year ${errors}`}
                                    type="number" 
                                    value={this.state.year}
                                    onChange={this.update('year')}
                                    min="1900" 
                                    max="2007" 
                                    placeholder="Year"/>
                        </div>
                        <div className="gender-container">
                            <label>
                                <input type="radio" 
                                        name="gender" 
                                        value="female" 
                                        onChange={this.update('gender')}
                                        /> Female
                            </label> 
                            <label>
                                <input type="radio"
                                        name="gender" 
                                        value="male"
                                        onChange={this.update('gender')}
                                        /> Male
                            </label> 
                            <label>
                                <input type="radio" 
                                        name="gender" 
                                        value="neutral"
                                        onChange={this.update('gender')}
                                        /> Non-binary
                            </label> 
                        </div>
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
            </>
        )
    }
}

export default SignupForm;