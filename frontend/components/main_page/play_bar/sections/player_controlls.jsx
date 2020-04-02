import React from 'react';

class PlayerControlls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        }

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.playAction = this.playAction.bind(this);
    }

    // // componentWillUpdate () {
        
    // // }

    play() {
        let { currentSong } = this.props;
        if (currentSong.id) {
            this.setState({ playing: true })
        }
    }

    pause() {
        this.setState({ playing: false })
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
    

    render() {
        let actionIcon = this.state.playing ? 'fa-pause-circle' : 'fa-play-circle'
        return (
            <div className="player-controlls-div">
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