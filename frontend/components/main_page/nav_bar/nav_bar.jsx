import React from 'react';
import { NavLink } from 'react-router-dom';
import PlaylistContainer from './sections/playlist_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-bar-div">
                <div className="nav-logo-div">
                    <img className='nav-logo' src={window.headerLogo} />
                </div>
                <ul>
                    <li className="nav-buttons">
                        <div className="nav-link-divs" >
                            <NavLink className="nav-links" to="/">
                                <i className="fas fa-home"></i>
                                <p>Home</p>
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-buttons">
                        <div className="nav-link-divs" >
                            <NavLink className="nav-links" to="/search">
                                <i className="fas fa-search"></i>
                                <p>Search</p>
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-buttons">
                        <div className="nav-link-divs" >
                            <a className="nav-links" href="">
                                <i className="fas fa-book"></i>
                                <p>Your Library</p>
                            </a>
                        </div>
                    </li>
                </ul>
                <PlaylistContainer/>
                {/* <div className="playlist-main-div" >
                    <div className="playlist-div">
                        <h1>playlists</h1>
                        <div className="create-playlist-div">
                            <button className="create-playlist-button" >
                                <i className="fas fa-plus-square"></i>
                                <span>Create Playlist</span>
                            </button>
                        </div>
                    </div>
                </div> */}
                <div className="current-album-div">
                    <img className='current-album' src={window.currentAlbum} />
                </div>
            </div>
        )
    }
}

export default NavBar;