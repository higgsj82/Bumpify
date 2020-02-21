import React from 'react';

class CurrentSong extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="current-song-div">
                <div className="current-song">
                    <p>Formation</p>
                    <i className="far fa-heart"></i>
                </div>
                <div className="current-artist">
                    <p>Beyoncé</p>
                </div>
            </div>
        )
    }
}

export default CurrentSong;