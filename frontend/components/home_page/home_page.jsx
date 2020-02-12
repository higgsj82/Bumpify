import React from 'react';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-div">
                    <img className='logo' src={window.background} />
                <div className="greeting-div">
                    <h1 className="greeting">Music lives here.</h1>
                    <p className="greeting-msg">Hundreds of songs. No credit card needed.</p>
                </div>
            </div>
        )
    }

}

export default HomePage;