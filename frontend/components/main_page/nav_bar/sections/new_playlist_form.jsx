import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../../util/playlist_api_util';


class NewPlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
    }
    
    componentWillUnmount() {
        this.state = { name: "" }
    }

    render() {
        return(
            <div className="new-playlist-container">
                <h1>Create A New Playlist</h1>
                <div className="close-modal">
                    <i className="fas fa-times"></i>
                </div>
                <form className="new-playlist-form">
                    <label className="new-playlist">Playlist Name
                        <input 
                            type="text"
                            className="new-playlist-input"
                            placeholder="name"
                            value=""
                        />
                    </label>
                    <button>Create Playlist</button>
                </form>
            </div>
        )
    }
}

const mDTP = dispatch => {
    return {
        createPlaylist: name => dispatch(createPlaylist(name))
    }
}

export default connect(null, mDTP)(NewPlaylistForm);