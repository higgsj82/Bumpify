import React from 'react';
import Modal from './modal';

class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    displayModal() {
        this.setState({ active: true })
    }

    closeModal(e) {
        e.preventDefault();
        this.setState({ active: false })
    }

    render() {
        // debugger
        return(
            <div className="playlist-main-div" >
                <div className="playlist-div">
                    <h1>playlists</h1>
                    <div className="create-playlist-div" onClick={this.displayModal}>
                        <button className="create-playlist-button" >
                            <i className="fas fa-plus-square"></i>
                            <span>Create Playlist</span>
                        </button>
                        <Modal active={this.state.active} exitModal={this.closeModal}>

                        </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default Playlists;