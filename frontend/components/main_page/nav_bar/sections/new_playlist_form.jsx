import React from 'react';


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
                <form className="new-playlist-form">
                    <label>Playlist Name
                        <input 
                            type="text"
                            
                        />
                    </label>
                </form>
            </div>
        )
    }
}

