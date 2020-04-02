import React from 'react';

class PlayerControlls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        }
        this.mediaRef = React.createRef();

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.playAction = this.playAction.bind(this);
    }

    componentDidUpdate () {
        
    }

    isPlaying() {
        let audio = document.getElementById('media-player');
        !audio.paused;
    }
    
    play() {
        let { currentSong } = this.props;
        if (!this.isPlaying()) {
            this.setState({ playing: true })
        }
    }

    pause() {
        if (!this.isPlaying()) {
            this.setState({ playing: false })
        }
    }

    playAction(e) {
        e.preventDefault();
        let { playing } = this.state;
        playing ? this.play() : this.pause()
    }

    // shuffle() {

    // }

    // repeat() {
        
    // }

    mediaPlayer() {
        if (!this.props.currentSong) {
            return null
        } else {
            return (
                <audio
                    id="media-player"
                    ref={this.mediaRef}
                    src={this.props.currentSong.trackUrl}
                    type="audio/mp4" 
                    autoPlay>
                </audio>
            )
        }
    }
    

    render() {
        // debugger
        console.log(this.state)
        let { playing } = this.state;
        let actionIcon = !playing ? 'fa-play-circle' : 'fa-pause-circle'
        return (
            <div className="player-controlls-div">
                {this.mediaPlayer()}
                {/* <audio controls src="https://bumpify-dev.s3.amazonaws.com/02+Hold+Up.m4a" itemType="audio/mpeg"></audio> */}
                <div className="play-buttons-div">
                    <button className="play-buttons">
                        <i className="fas fa-random"></i>
                    </button>
                    <button className="play-buttons arrows">
                        <i className="fas fa-angle-double-left"></i>
                    </button>
                    <div className="play-button-div">
                        <button 
                            className="play-buttons play-button"
                            onClick={this.playAction}    
                        >
                            <i className={`far ${actionIcon}`}></i>
                            {/* pause icon: <i className="far fa-pause-circle"></i> */}
                        </button>
                    </div>
                    <button className="play-buttons arrows">
                        <i className="fas fa-angle-double-right"></i>
                    </button>
                    <button className="play-buttons">
                        <i className="fas fa-redo"></i>
                    </button>
                </div>
                <div className="progress-bar">
                    <progress value="0" min="0" max="4"></progress>
                </div>
            </div>
        )
    }
}

export default PlayerControlls;