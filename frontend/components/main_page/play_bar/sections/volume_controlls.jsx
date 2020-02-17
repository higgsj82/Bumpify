import React from 'react';

class VolumeControlls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="volume-controlls-div">
                <button className="volume-controlls">

                </button>
                <button className="volume-controlls">
                    <i className="fas fa-volume-up"></i>
                </button>
                <div className="volume-bar">
                    <progress value="0" max=""></progress>
                </div>
            </div>
        )
    }
}

export default VolumeControlls;