import React from 'react';
import HeaderContainer from '../header/header_container';


class MainPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return(
            <div>
                <HeaderContainer/>
            </div>
        )
    }
}


export default MainPage;