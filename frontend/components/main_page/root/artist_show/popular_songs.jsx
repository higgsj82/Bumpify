import React from 'react';

const PopularSongs = ({popularSongs, updateCurrentSong}) => {
    // let popularSongs = artist.popularSongs;
    // let array = Array.from(popularSongs)
    const lis = popularSongs.map(song => {
        return(
            <li className="popular-songs"
                key={song.id}
                onClick={()=> updateCurrentSong(song)}>
                <div className="toggle-play">
                    <i className="fas fa-play"></i>
                </div>
                <div className="popular-icon-div">
                    <img className='popular-icon' src={window.currentAlbum} />
                </div>
                <div className="popular-song-name">
                        {song.song_name}
                </div>
                <div className="song-length">4:08</div>
            </li>
        );
    })

    return (
        <div className="popular-songs-div">{lis}</div>
    )
}

export default PopularSongs;