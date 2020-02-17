import React from 'react';

class PlayerControlls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player-controlls-div">
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
                    <progress value="0" max=""></progress>
                </div>
            </div>
        )
    }
}

export default PlayerControlls;