import React from 'react';
import HeaderContainer from '../header/header_container';


class SplashPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <> 
            <div className="home-div">
                <HeaderContainer />   
                <div className="greeting-div">
                    <h1 className="greeting">Music lives here.</h1>
                    <h4 className="greeting-msg">Hundreds of songs. No credit card needed.</h4>
                    <div className="demo-button-div">
                        <button onClick={() => this.props.login(this.props.user)}
                                className="demo-button">DEMO USER
                        </button>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default SplashPage;