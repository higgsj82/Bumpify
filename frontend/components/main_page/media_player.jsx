import React from 'react';

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.mediaRef = React.createRef();
    }

    // prev props on react assessment or pokedex pt 2
    componentDidUpdate() {
        
    }

    render() {
        if (!this.props.currentSong) {
            return null 
         } else { 
             return (
            <audio controls>
                <source ref={ this.mediaRef }
                        src={ this.props.currentSong.trackUrl } 
                        type="audio/mp4"/>
            </audio>
        )}
    }
}

export default MediaPlayer;
//  input => this.mediaRef = input 
