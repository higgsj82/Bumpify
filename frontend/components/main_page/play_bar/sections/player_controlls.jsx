import React from 'react';

class PlayerControlls extends React.Component {
    constructor(props) {
        super(props);
    }

    // // componentWillUpdate () {
        
    // // }

    // play() {
    //     // this.props.song.track.play()
    // }

    // pause() {

    // }

    // shuffle() {

    // }

    // repeat() {
        
    // }
    

    render() {
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
                        <button className="play-buttons play-button">
                            <i className="far fa-play-circle"></i>
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