import React from 'react';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-div">
                <div className="greeting-div">
                    <h1 className="greeting">Music lives here.</h1>
                    <h4 className="greeting-msg">Hundreds of songs. No credit card needed.</h4>
                </div>
            </div>
        )
    }

}

export default HomePage;