import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user);
    }

    update() {

    }
    
    render() {
        return (
            <section className='form-section'>
                <form className="session-forms">

                </form>
            </section>
        )
    }
}

export default SessionForm;