import React from 'react';
import PlayBarContainer from './play_bar/play_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainRootContainer from './root/main_root_container';


class MainPage extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return(
            <div className="main-page-div">
                <NavBarContainer/>
                <MainRootContainer/>
                <div className="main-page-footer">
                    <PlayBarContainer/>
                </div>
            </div>
        )
    }
}


export default MainPage;