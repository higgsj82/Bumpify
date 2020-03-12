import React from 'react';

class Playlists extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="playlist-main-div" >
                <div className="playlist-div">
                    <h1>playlists</h1>
                    <div className="create-playlist-div">
                        <button className="create-playlist-button" >
                            <i className="fas fa-plus-square"></i>
                            <span>Create Playlist</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playlists;