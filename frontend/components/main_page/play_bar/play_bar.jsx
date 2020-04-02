import React from 'react';
import CurrentSong from './sections/current_song';
import PlayerControlls from './sections/player_controlls';
import VolumeControlls from './sections/volume_controlls';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);

        // this.mediaRef = React.createRef();
    }

    render() {
        return (
            <footer className="play-bar">
                <CurrentSong/>
                <PlayerControlls currentSong={this.props.currentSong}/>
                <VolumeControlls/>
            </footer>
        )
    }
}

export default PlayBar;