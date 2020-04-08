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
        // debugger
        let {
            currentSong,
            currentArtist,
            currentAlbum
        } = this.props;
        return (
          <footer className="play-bar">
            <CurrentSong currentSong={currentSong} currentArtist={currentArtist}/>
            <PlayerControlls currentSong={currentSong} />
            <VolumeControlls />
          </footer>
        );
    }
}

export default PlayBar;