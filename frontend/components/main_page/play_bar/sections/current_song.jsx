import React from 'react';

class CurrentSong extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { currentSong, currentArtist } = this.props;
        return (
            <div className="current-song-div">
                <div className="current-song">
                    <p>{currentSong ? currentSong.song_name : null}</p>
                    <i className="far fa-heart"></i>
                </div>
                <div className="current-artist">
                    <p>{currentArtist ? currentArtist.artist_name : null}</p>
                </div>
            </div>
        )
    }
}

export default CurrentSong;