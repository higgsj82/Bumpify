import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PopularSongs from './popular_songs';

class Artist extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.getArtist(this.props.artistId);
    }

    render() {
        const { artist, artistId, popularSongs, updateCurrentSong } = this.props;
        return (
            <section className="artist-show-section">
                <div className="main-root-header" >
                    <div className="main-root-arrows" >
                        <i className="fas fa-arrow-circle-left"></i>
                        <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
                <h1>{ artist ? artist.artist_name : null }</h1>
                <div className="artist-actions">
                    <button className="artist-play-button">
                        play
                    </button>
                    <button className="follow-button">
                        follow 
                    </button>
                </div>
                <div className="artist-show-links">
                    <NavLink to={`/artist/${artistId}`} className="artist-links">
                        Overview
                    </NavLink>
                    <NavLink to={`/artist/${artistId}/about`} className="artist-links">
                        About
                    </NavLink>
                </div>
                <div className="popular-div">
                    <h3>Popular</h3>
                        <ul>
                            <PopularSongs popularSongs={popularSongs ? popularSongs : null} 
                                        updateCurrentSong={updateCurrentSong}/>
                        </ul>
                </div>
                <div className="albums-div">
                    <h3>Albums</h3>
                </div>
            </section>
        )
    }
}

export default Artist;