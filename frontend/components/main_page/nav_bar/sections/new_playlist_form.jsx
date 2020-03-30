import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../../../actions/playlist_actions';


class NewPlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentWillUnmount() {
        this.setState({ name: "" })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPlaylist(this.state).then(() => this.props.exitModal(e));
    }

    updateName(e) {
        const name = e.currentTarget.value;
        this.setState({ name });
    }

    closeModal(e) {
        // e.persist();
        this.props.exitModal(e)
    }

    render() {
        return(
            <div className="new-playlist-container">
                <h1>Create new playlist</h1>
                <form className="new-playlist-form">
                    <div className="playlist-input-main">
                        <div className="playlist-input-inner">
                            <div className="playlist-input">
                                <h4>Playlist Name</h4>
                                <input 
                                    type="text"
                                    className="new-playlist-input"
                                    value={this.state.name}
                                    onChange={this.updateName}
                                    placeholder="New Playlist"
                                    />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="modal-buttons">
                    <div className="cancel-modal">
                        <button onClick={e => this.props.exitModal(e)}>
                            Cancel</button>
                    </div>
                    <div className="create-playlist">
                        <button onClick={this.handleSubmit}>
                            Create</button>
                    </div>
                </div>
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